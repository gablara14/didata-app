

export default (time) => {
    const date = new Date(time)
    const Day = date.getDate()
    const Month = date.getMonth() + 1
    const Year = date.getFullYear()
    const Hour = date.getHours()
    const Minute = date.getMinutes()
    const now = new Date(Date.now())
    const nowDay = now.getDate()
    const nowMonth = now.getMonth() + 1
    const nowYear = now.getFullYear()
    const nowHour = now.getHours()
    const nowMinute = now.getMinutes()
    const hourDiff = Number(nowHour) - Number(Hour)
    const minDiff = Number(nowMinute) - Number(Minute)
    
    function convertToString(month){
        switch(month) {
            case 1:
                return 'Janeiro'
            case 2:
                return 'Fevereiro'
            case 3:
                return 'Março'
            case 4:
                return 'Abril'
            case 5:
                return 'Maio'
            case 6:
                return 'Junho'
            case 7:
                return 'Julho'
            case 8:
                return 'Agosto'
            case 9:
                return 'Setembro'
            case 10:
                return 'Outubro'
            case 11:
                return 'Novembro'
            case 12:
                return 'Dezembro'
            default:
                return month
        }
    }
    
    if (nowYear === Year){
        if (nowMonth === Month){
            if (nowDay === Day){
                if (nowHour === Hour){
                    if (nowMinute === Minute){
                        return `Há alguns segundos`
                    }
                    if (minDiff === 1){
                        return `Há ${minDiff} minuto`
                    }
                    return `Há ${Math.abs(minDiff)} minutos`
                }
                if (hourDiff === 1){
                    return `Há ${hourDiff} hora`
                }
                return `Há ${Math.abs(hourDiff)} horas`
            }
            if (nowDay  === Day + 1){
                if (Minute < 10){
                    return `Ontem às ${Hour}:0${Minute}`  
                }
                return `Ontem às ${Hour}:${Minute}`   
            }
        }
        return `${Day} de ${convertToString(Month)}`
    } else {
        return `${Day} de ${convertToString(Month)} de ${Year}`
    }
}
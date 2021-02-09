import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Touchable, TouchableOpacityBase } from 'react-native'
import { thriverBucket } from '../data/config.json'
import { DarkLayer, BackgroundImage } from './styles/styles'
import { SeeAll, SeeOne } from './Buttons'
import { navigate } from '../navigationRef'
import Carousel from 'react-native-snap-carousel'
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold'
    },
    authorName: {
        fontWeight: 'bold'
    },
    authorImage: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    authorInfo: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    authorContent:{
        fontSize: 12,
        margin: 'auto'
    },
    authorCard: {
        marginTop: 10,
        paddingHorizontal: 5,
        marginRight: 2,
        marginLeft: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    authorCardButtom:{
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    newReleasesCard:{
        flex: 1,
        height: 250,
        width: 250,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    newReleasesButton:{
        shadowColor: "black",
        shadowOpacity: 0.40,
        shadowRadius: 3.84,
        elevation: 5,
        
    },
    hottestCard: {
        flex: 1,
        height: 220,
        width: 220,
        marginRight: 2,
        marginLeft: 10,
        
        justifyContent: 'center',
        
    },
    hottestInfo: {
        paddingHorizontal: 10
    },
    hottestTitle: {
        
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
        
    },
    hottestSubtitle: {
        color: 'white'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 10
    }

})


export const ResultsDetail = ({ data }) => {
    return(
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={data => data.name}
            renderItem={({ item }) => {
                return (
                    <View style={styles.hottestCard} >
                        {/* <Image style={styles.backgroundImage} source={{ uri:  thriverBucket + item.image_url }} /> */}
                            
                        <BackgroundImage>
                            <Image
                                style={styles.backgroundImage}
                                source={{ uri:  thriverBucket + item.image_url }}
                            />
                            <DarkLayer />
                        </BackgroundImage>


                            <View style={styles.hottestInfo}>
                                <Text style={styles.hottestTitle} >{item.name}</Text>
                                <Text  style={styles.hottestSubtitle}>#investments</Text>
                            </View>

                        
                    </View> 
                )}}
        />

    )
}





export const TrendingAuthors = ({ data }) => {
    return(
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={data => data.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={styles.authorCardButtom} onPress={() => navigate('Author',  { id: item.id, name: item.name, image_url: item.image_url })}>
                        <View style={styles.authorCard}>
                            <Image style={styles.authorImage} source={{ uri:  thriverBucket + item.image_url }} />
                                
                            <View style={styles.authorInfo}>
                                <Text style={styles.authorName}>{item.name}</Text>
                                <Text style={styles.authorContent} >6 comunidades</Text>
                            </View>

                                {/* <SeeOne
                                    text="LEARN MORE"
                                    navigateTo={{ route: 'Author', params: { id: item.id, name: item.name, image_url: item.image_url } }} 
                                /> */}
                        </View> 
                    </TouchableOpacity>
                )}}
        />

    )
}


export class NewReleasesCarousel extends Component{
    render(){
        return(
            <Carousel
            
                ref={(c) => {this._carousel = c}}
                sliderWidth={deviceWidth}
                sliderHeight={deviceWidth}
                itemWidth={250}
                data={this.props.data}
                keyExtractor={data => data.name}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigate('CommunityPosts')} style={styles.newReleasesButton}>
                            <View style={styles.newReleasesCard} >
                                {/* <Image style={styles.backgroundImage} source={{ uri:  thriverBucket + item.image_url }} /> */}
                                    
                                <BackgroundImage >
                                    <Image
                                        style={styles.backgroundImage}
                                        source={{ uri:  thriverBucket + item.image_url }}
                                    />
                                    <DarkLayer />
                                </BackgroundImage>


                                    <View style={styles.hottestInfo}>
                                        <Text style={styles.hottestTitle} >{item.name}</Text>
                                        <Text  style={styles.hottestSubtitle}>#investments</Text>
                                    </View>

                                
                            </View> 
                        </TouchableOpacity>

                    )}}
            />
    
        )
    }

}



export const Hottest = ({ data }) => {
    return(
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={data => data.name}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity 
                        style={styles.hottestCard}
                        onPress={() => navigate('Community', { id: item.id, name: item.name, image_url: item.image_url})}
                    >
                        <View style={styles.hottestCard} >
                            {/* <Image style={styles.backgroundImage} source={{ uri:  thriverBucket + item.image_url }} /> */}
                                
                            <BackgroundImage>
                                <Image
                                    style={styles.backgroundImage}
                                    source={{ uri:  thriverBucket + item.image_url }}
                                />
                                <DarkLayer />
                            </BackgroundImage>


                                <View style={styles.hottestInfo}>
                                    <Text style={styles.hottestTitle} >{item.name}</Text>
                                    <Text  style={styles.hottestSubtitle}>#investments</Text>
                                </View>

                            
                        </View>
                    </TouchableOpacity>
                )}}
        />

    )
}

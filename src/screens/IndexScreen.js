import React, { useContext, useEffect, useState } from 'react';
import {View , Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext'

const IndexScreen = ({navigation}) => {
    const {state,deleteBlogPost, getBlogPosts} = useContext(Context);

    useEffect(() => {
        getBlogPosts()

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts()
        })

        return () => {
            listener.remove();
        }
            
    }, [])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight : () => (
                <TouchableOpacity onPress = {() => navigation.navigate('CreateScreen')}>
                    <Text style ={{fontSize: 30, marginRight : 10}}>+</Text>
                </TouchableOpacity>
            )
        })
    })

    return (
        <View>
            <FlatList 
                data={state} 
                keyExtractor ={(blog) => blog.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress = {() => navigation.navigate('ShowScreen', {id: item.id})}>
                            <View style= {styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress = {() => deleteBlogPost(item.id)}>
                                    <Text style = {styles.icon}>X</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        
                    )
                }}
            />
        </View>
    )

    
}



// IndexScreen.navigationOptions = () => {
//     return {
//         headerRight : <Text style = {styles.icon}>+</Text>
//     };
// };



const styles = StyleSheet.create({
    row : {
        flexDirection: 'row',
        justifyContent : 'space-between',
        paddingVertical : 20,
        paddingHorizontal : 10,
        borderTopWidth : 1,
        borderColor : 'gray'
    }, 
    title : {
        fontSize : 18
    },
    icon : {
        fontSize : 24,
        color : 'red'
    }

})


export default IndexScreen;

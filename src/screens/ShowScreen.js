import React, { useContext, useEffect, useState } from 'react';
import {View , Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';


const ShowScreen = ({navigation, route}, props) => {
    const {id} = route.params;
    const {state} = useContext(Context);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight : () => (
                <TouchableOpacity onPress = {() => navigation.navigate('EditScreen',{id})}>
                    <Text style ={{fontSize: 20, marginRight : 10}}>edit</Text>
                </TouchableOpacity>
            )
        })
    }, [navigation])

    const blogPost = state.find((blogPost) => blogPost.id === id )

    console.log(blogPost)


    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ShowScreen;
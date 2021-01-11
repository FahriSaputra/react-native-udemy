import React, { useState, useContext } from 'react';
import {View , Text, TextInput, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';



const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context);


    return (
        <BlogPostForm
            buttonTittle = 'ADD BLOGPOST'
            onSubmit = {(title, content) => {
                addBlogPost(title, content, () => navigation.navigate('IndexScreen') )
            }}
        />
    )
}

const styles = StyleSheet.create({
    input : {
        fontSize: 18,
        borderColor : 'black',
        borderWidth : 1,
        marginBottom : 15,
        padding : 5, 
        margin : 5
    },
    label : {
        fontSize : 20,
        marginBottom : 5,
        margin : 5
    }
})

export default CreateScreen;
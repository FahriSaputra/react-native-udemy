import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

const BlogPostForm = ({onSubmit,buttonTittle, initialValues = {title : '', content : ''}}) =>  {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);


    return (
        <View>
            <Text style = {styles.label} >Enter Title</Text>
            <TextInput value = {title} onChangeText = {(value) => setTitle(value) } style = {styles.input} />
            <Text style = {styles.label} >Enter Content : </Text>
            <TextInput value = {content} onChangeText = {(value) => setContent(value)} style = {styles.input} />
            <Button 
                title = {buttonTittle}
                onPress = {() => onSubmit(title, content)}
            />
        </View>
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

export default BlogPostForm;

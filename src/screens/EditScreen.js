import React, {useContext} from 'react'
import { StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation, route}) => {
    const {state, editBlogPost } = useContext(Context)
    const {id} = route.params;

    const blogPost = state.find((blogPost) => blogPost.id === id)
    
    return (
        <BlogPostForm 
            buttonTittle = 'Save BlogPost'
            initialValues = {{title : blogPost.title, content : blogPost.content}}
            onSubmit = {(title, content) => {
                editBlogPost(id, title, content, () => navigation.pop())
            }}
        />
    )
    
}

const styles = StyleSheet.create({})


export default EditScreen;

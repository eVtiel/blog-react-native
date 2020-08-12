import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    const [ title, setTitle ] = useState(blogPost.title);
    const [ content, setContent ] = useState(blogPost.content);

    return (
        <View>
            <Text>Enter New Title:</Text>
            <TextInput value={title} onChangeText={(text) => setTitle(text)} />
            <Text>Enter New Content:</Text>
            <TextInput value={content} onChangeText={(text) => setContent(text)} />
        </View>
    )
};

const styles = StyleSheet.create({});

export default EditScreen;
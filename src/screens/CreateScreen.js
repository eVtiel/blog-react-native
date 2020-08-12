import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>Create</Text>
        </View>
    )
};

const style = StyleSheet.create({});

export default CreateScreen;
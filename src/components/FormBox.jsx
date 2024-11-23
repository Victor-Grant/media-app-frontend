import {  StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'

const FormBox = ({updateName, updateDescription, updateUrl, nameInput, descriptionInput, urlInput, addMedia}) => {
  return (
    <View style={styles.box}>
        <Text style={styles.heading}>Add a new Media</Text>
        <View>
            <Text style={styles.text}>Enter A Title For Your New Post</Text>
            <TextInput
                style={styles.input}
                onChangeText={(value) => {
                    updateName(value)
                }}
                value={nameInput}
            />
        </View>

        <View>
            <Text style={styles.text}>Enter A Description</Text>
            <TextInput
                style={styles.input}
                onChangeText={(value) => {
                    updateDescription(value)
                }}
                value={descriptionInput}
            />
        </View>
        
        <View>
            <Text style={styles.text}>Enter An Image URL</Text>
            <TextInput
                style={styles.input}
                onChangeText={(value) => {
                    updateUrl(value);
                }}
                value={urlInput}
            />
        </View>

        <TouchableHighlight
            activeOpacity={0.7}
            underlayColor={'#41436a'}
            onPress={() => {addMedia()}}
        >
            <View style={styles.button}>
                <Text style={styles.text}>ADD</Text>
            </View>
        </TouchableHighlight>
    </View>
  )
}

export default FormBox

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: '#fe9677',
        backgroundColor: 'white',
    },
    box: {
        borderWidth: 2,
        borderRadius: 15,
        padding: 20,
        margin: 10,
        borderColor: '#fe9677'
    }, 
    heading: {
        textAlign: 'center',
        fontSize: 23,
        color: 'white'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fe9677',
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    text: {
        color: 'white'
    }
})
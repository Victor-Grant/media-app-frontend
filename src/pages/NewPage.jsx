import { StatusBar, SafeAreaView, StyleSheet, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import FormBox from '../components/FormBox';
import Header from '../components/Header';

const NewPage = () => {
    const [nameInput, setNameInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [urlInput, setUrlInput] = useState('');

    const updateName = (value) => {
        setNameInput(value)
    }
    const updateDescription = (value) => {
        setDescriptionInput(value)
    }
    const updateUrl = (value) => {
        setUrlInput(value)
    }

    const addMedia = () => {
        console.log(nameInput, urlInput, descriptionInput);
        fetch('https://media-app-backend-lcb5.onrender.com/api/data', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nameInput,
                description: descriptionInput,
                url: urlInput
            })
        }).then(response => {
            return response.json()
        }).then(data => {
            if (data.success === 'true') {
                ToastAndroid.show('Your post has been made successfully', ToastAndroid.LONG);
                setNameInput('');
                setDescriptionInput('');
                setUrlInput('');
            } else {
                ToastAndroid.show('Could not successfully make post', ToastAndroid.LONG);
            }
        })
    }
  return (
    <>
        <SafeAreaView style={styles.safeView}>
            <Header />
            <View >
                <FormBox 
                    updateName={updateName} 
                    updateDescription={updateDescription} 
                    updateUrl={updateUrl} 
                    nameInput={nameInput}
                    descriptionInput={descriptionInput}
                    urlInput={urlInput}
                    addMedia={addMedia}
                />
            </View>
        </SafeAreaView>
        <StatusBar></StatusBar>
    </>
  )
}

export default NewPage

const styles = StyleSheet.create({
    safeView: {
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#41436A',
    }
})
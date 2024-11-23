import { Platform, RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Post from '../components/Post';

const randomObject = {
    "name": "Some random name",
    "description": "some longer random description",
    "url": "https://plus.unsplash.com/premium_photo-1731966051195-a1bf3db6487e?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}


const HomePage = () => {
    const [data, setData] = useState([]);
    const [refreshState, setRefreshState] = useState(false);

    const getData = () => {
        fetch('https://media-app-backend-lcb5.onrender.com/api/data')
            .then(response => response.json())
            .then(dataset => {
            setData(dataset);
        })
    }


    useEffect(() => {
        getData();
    }, [])

    const refreshScreen = () => {
        setRefreshState(true);
        getData();
        setRefreshState(false);
    }

  return (
    <>
        <SafeAreaView style={styles.sefeView}>
            <Header />
            <ScrollView 
                style={styles.posts}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshState}
                        onRefresh={refreshScreen}
                    />
                }
            >{
                data.map(item => {
                    return <Post key={item._id} refreshData={getData} data={item} />
                })
            }</ScrollView>
            
        </SafeAreaView>
        <StatusBar style={styles.statusBar}></StatusBar>
    </>
  )
}

export default HomePage

const styles = StyleSheet.create({
    sefeView: {
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#41436A',
        flex: 1
    },
    posts: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        marginBottom: Platform.OS === 'ios' ? 40 : 60
    }  
})
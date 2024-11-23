import { StyleSheet, Text, View, Image, TouchableHighlight, ToastAndroid } from 'react-native'
import React from 'react'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Post = ({data, refreshData}) => {

    const deletePost = (id) => {
        fetch(`https://media-app-backend-lcb5.onrender.com/api/data/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data.success === 'true') {
                    ToastAndroid.show('post successfully deleted', ToastAndroid.LONG);
                    refreshData();

                } else {
                }
            })
    }
  return (
    <View style={styles.box}>
        <View style={styles.upperBox}>
            <View style={styles.upperText}>
                <Text style={[{textAlign: 'center', fontSize: 19, color: 'white'}]}>{data.name}</Text>
            </View>
            <TouchableHighlight style={styles.follow}>
                <SimpleLineIcons name="user-follow" size={30} color="white" />
            </TouchableHighlight>
        </View>
        <Image style={styles.image} source={{uri: data.url}} />
        <View style={styles.lowerBox}>
            <View style={styles.lowerText}>
                <Text style={{fontSize: 17, color: 'white'}}>{data.description}</Text>
            </View>
            <View style={styles.icons}>
                <TouchableHighlight style={styles.like}>
                    <AntDesign name="like2" size={30} color="white" />
                </TouchableHighlight>
                <TouchableHighlight style={styles.delete} onPress={() => {deletePost(data._id)}}>
                    <AntDesign name="delete" size={30} color="white" />
                </TouchableHighlight>
            </View>
      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    image: {
        flex: 7,
        borderWidth: 1,
        borderColor: 'white',
    },
    box: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        height: 400,
        borderColor: 'white',
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10
    },
    upperBox: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        gap: 5
    },
    upperText: {
        width: '80%',
    },
    follow: {
        width: '15%',
        padding: 5,
        borderRadius: 7,
        backgroundColor: '#fe9677'
    },
    lowerBox: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    lowerText: {
        width: '70%',
        overflow: 'hidden',
        maxHeight: 43
    },
    icons: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5
    },
    like: {
        backgroundColor: '#f64668',
        padding: 5,
        borderRadius: 7
    },
    delete: {
        backgroundColor: '#fe9677',
        padding: 5,
        borderRadius: 7
    }
    
})
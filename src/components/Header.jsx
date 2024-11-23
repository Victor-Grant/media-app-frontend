import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const Header = () => {
  return (
    <View style={styles.headerView}>
        <View style={styles.title}>
            <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>Media App</Text>
        </View>
        
        
        <TouchableHighlight activeOpacity={1} onPress={() => {}} underlayColor={'#fe9677'} style={styles.icon}>
            <SimpleLineIcons style={{textAlign: 'center'}} name="options-vertical" size={25} color="white" />
        </TouchableHighlight>
        
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'white',
        backgroundColor: '#41436A'
    },
    title: {
        flex: 4,
        padding: 10
    },
    icon: {
        flex: 1,
        padding: 10,
        borderRadius: 15
    }
})
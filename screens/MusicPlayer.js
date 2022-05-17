import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const MusicPlayer = () => {
  return (
    <View style={styles.container}>
        <Ionicons name='airplane-outline' size={30} />
      <Text>Music in Player</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor: '#C68642',
        alignItems: 'center',
    }
})
export default MusicPlayer
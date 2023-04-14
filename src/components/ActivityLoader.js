import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

export default function ActivityLoader() {
  return (
        <ActivityIndicator size='large' color='#4B84F1' style={styles.loaderStyle}/>
  )
}

const styles = StyleSheet.create({
    loaderStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    }
})

import React, {useContext} from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { FontContext } from '../context/FontContext'

export default function ButtonCom(props) {
    const {fontsLoaded} = useContext(FontContext);

  return (
    <TouchableOpacity onPress={props.onPress}>
        {fontsLoaded && 
            <View style={[styles.buttonStyle, props.style]}>
                <Text style={[styles.buttonTitle, {fontFamily: "Roboto-Bold"}, props.styleText]}>{props.title}</Text>
            </View>
        }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#4B84F1",
        padding: 15,
        borderRadius: 15,
    },
    buttonTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16
    }
})
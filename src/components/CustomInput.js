import React, { useContext, useEffect, useState } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { FontContext } from '../context/FontContext'

export default function CustomInput(props) {
  const {fontsLoaded} = useContext(FontContext);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      {fontsLoaded && 
        <TextInput
            placeholder={props.placeholder}
            style={[
                    styles.textInputStyle, 
                    {fontFamily: "Roboto-Regular"}, 
                    isFocused && styles.inputFocused
                  ]}
            selectionColor={"#4B84F1"}
            onFocus={() => setIsFocused(true)}
            onBlur={props.onBlur}
            secureTextEntry={props.secureTextEntry}
            value={props.value}
            onChangeText={props.onChangeText}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
    textInputStyle: {
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      fontSize: 16,
      borderColor: "#8F9090"
    },
    inputFocused: {
      borderColor: '#4B84F1',
      borderWidth: 2
    },
})

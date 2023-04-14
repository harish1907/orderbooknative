import React, { useContext } from 'react'
import { FontContext } from '../context/FontContext'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function ProfileCollection(props) {
    const {fontsLoaded} = useContext(FontContext);
  return (
    <>
        {fontsLoaded && 
            <View style={[styles.collectionBox, props.mainBoxStyle]}>
                <Text style={[styles.personalText, fontsLoaded && {fontFamily: "Roboto-Regular"}]}>
                    {props.title}
                </Text>
                <Image
                    source={props.source}
                    style={styles.imageCollectionIcon}
                />
            </View>
        }
    </>
  )
}

const styles = StyleSheet.create({
    collectionBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#F2F2F2",
        paddingBottom: 10,
        marginTop: 25
    },
    personalText: {
        color: "#313333",
        fontSize: 18
    },
    imageCollectionIcon: {
        height: 25,
        width: 25
    }
})

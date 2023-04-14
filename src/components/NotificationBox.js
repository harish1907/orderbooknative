import React, { useContext } from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import { FontContext } from '../context/FontContext';
import ImageURL from '../ImageURL';

const {width} = Dimensions.get("window")

export default function NotificationBox() {
    const {fontsLoaded} = useContext(FontContext);
  return (
    <>
        {fontsLoaded && 
            <View style={styles.notificationMain}>
                <View style={styles.notificationBox}>
                    <Image
                        source={ImageURL.union}
                        style={{height: 25, width: 25}}
                    />

                    <View style={styles.notificationContent}>
                        <Text style={[{color: "#313333"} , fontsLoaded && {fontFamily: "Roboto-Bold"}]}>Welcome Notification</Text>
                        <Image
                        source={ImageURL.cancelIcon}
                        style={{height: 20, width: 20}}
                        />
                    </View>
                </View>
                <Text
                style={[
                    styles.notificationTextData,
                    fontsLoaded && {fontFamily: "Roboto-Regular"}
                ]}
                >
                Congratulations Hello, welcome to the D'paragon application, please verify your data and get many benefits from us. Thank You
                </Text>
            </View>
        }
    </>
  )
}

const styles = StyleSheet.create({
    notificationMain: {
        borderWidth: 1,
        borderColor: "#F2F2F2",
        paddingVertical: 25,
        paddingHorizontal: 15,
    },
    notificationBox: {
        flexDirection: "row"
    },
    notificationContent: {
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        width: width*0.85
    },
    notificationTextData: {
        fontSize: 12, 
        color: "#515252",
        marginLeft: 40
    }
})

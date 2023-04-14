import React, {useContext} from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import ButtonCom from '../components/ButtonCom';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActivityLoader from '../components/ActivityLoader';
import { FontContext } from '../context/FontContext';
import ImageURL from '../ImageURL';

export default function StartScreen(props) {
    const {fontsLoaded} = useContext(FontContext);

  return (
    <View style={styles.containerStyle}>
        <ImageBackground 
            source={ImageURL.startscreenimage} 
            style={styles.ImageBackground}
        >
            {!fontsLoaded ? (
                <ActivityLoader/>
            ) : (
                <View style={styles.mainContentBox}>
                    <View>
                        <Text style={{...styles.mainHeadingText, ...{fontFamily: "Roboto-Bold"}}}>Wherever you are, booking a D'paragon boarding house is now easier.</Text>

                        <Text style={{...styles.secondHeadingText, ...{fontFamily: "Roboto-Regular"}}}>
                            Enjoy the maximum service from D'paragon, booking a room for boarding house is now easier through the latest application with a more attractive display.
                        </Text>
                    </View>

                    <View style={styles.bottomData}>
                        <ButtonCom
                            title="ORDER NOW"
                        />
                        <View style={styles.bottomTextView}>
                            <Text style={{...styles.accountTextStyle, ...{fontFamily: "Roboto-Regular"}}}>Do you already have an account?</Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                                <Text style={{...styles.loginTextStyle, ...{fontFamily: "Roboto-Bold"}}}> Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center'
    },
    ImageBackground: {
        flex: 1,
        resizeMode: "center",
        width: "100%",
        alignItems: "center",
    },
    mainContentBox: {
        flex: 1,
        justifyContent: 'space-around',
        marginHorizontal: 15
    },
    mainHeadingText: {
        fontSize: 24,
    },
    secondHeadingText: {
        color: '#8F9090',
        fontSize: 15,
        marginTop: 10
    },
    bottomData: {
        marginTop: 50
    },
    bottomTextView: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center'
    },
    accountTextStyle: {
        color: "#313333",
        textAlign: 'center',
    },
    loginTextStyle: {
        color: '#fff',
        fontSize: 15,
        marginTop: -2
    }
})

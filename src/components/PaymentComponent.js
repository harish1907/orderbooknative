import React, {useContext} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import ImageURL from '../ImageURL';
import { FontContext } from '../context/FontContext'


export default function PaymentComponent() {
    const {fontsLoaded} = useContext(FontContext);
  return (
    <>
        {fontsLoaded && 
            <View style={styles.avilableCityCard}>
                <Image
                    source={ImageURL.dummy2}
                    style={styles.avilableCityImg}
                />
                <Text style={[styles.headingText, fontsLoaded && {fontFamily: "Roboto-Bold"}]}>Pembayaran bulanan</Text>
                <Text style={[styles.normalText, fontsLoaded && {fontFamily: "Roboto-Regular"}]}>Pilihan pembayaran fleksibel bulanan adalah layanan yang te..</Text>
            </View>
        }
    </>
  )
}


const styles = StyleSheet.create({
    avilableCityCard: {
        width: 145,
        height: 180,
        borderRadius: 20,
        backgroundColor: "#fff",
        elevation: 5,
        marginBottom: 20,
        marginLeft: 10
    },
    avilableCityImg: {
        width: 145,
        height: 110,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    headingText: {
        fontSize: 14,
        color: "#313333",
        marginHorizontal: 5
    },
    normalText: {
        fontSize: 10,
        color: "#515252",
        margin: 5
    }
})
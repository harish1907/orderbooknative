import React, {useContext} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import ImageURL from '../ImageURL';
import { FontContext } from '../context/FontContext'


export default function AvilableCity() {
    const {fontsLoaded} = useContext(FontContext);
  return (
    <>
        {fontsLoaded && 
            <View style={styles.avilableCityCard}>
                <Image
                source={ImageURL.dummy1}
                style={styles.avilableCityImg}
                />
                <View style={styles.cityTextAlign}>
                <Text style={[styles.avilableCityHeadText, fontsLoaded && {fontFamily: "Roboto-Bold"}]}>Surabaya</Text>
                <View style={styles.ratingBox}>
                    <Text style={[styles.avilableRatingText, fontsLoaded && {fontFamily: "Roboto-Regular"}]}>4.8</Text>
                    <Image
                    source={ImageURL.fullStar}
                    style={{
                        height: 10,
                        width: 10,
                        marginLeft: 3
                    }}
                    />
                </View>
                </View>
                <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginLeft: 5}}>
                <Image
                    source={ImageURL.cityIcon}
                    style={{
                    height: 10,
                    width: 10
                    }}
                />
                <Text style={[fontsLoaded && {fontFamily: "Roboto-Regular"}, {fontSize: 12, color: "#515252"}]}>12 Properti Tersedia</Text>
                </View>
            </View>
        }
    </>
  )
}


const styles = StyleSheet.create({
    avilableCityCard: {
        width: 145,
        height: 161,
        borderRadius: 20,
        backgroundColor: "#fff",
        elevation: 5,
        marginBottom: 20,
        marginLeft: 10
    },
    cityTextAlign: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5
    },
    avilableCityImg: {
        width: 145,
        height: 110,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    ratingBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F8F9FB",
        padding: 5,
        borderRadius: 15,
    },
    avilableCityHeadText: {
        color: "#313333",
        fontSize: 16
    },
    avilableRatingText: {
        color: "#515252"
    }
})
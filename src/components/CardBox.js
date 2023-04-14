import React, { useContext } from 'react'
import { FontContext } from '../context/FontContext'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import ImageURL from '../ImageURL';

const {height, width} = Dimensions.get("window")

export default function CardBox(props) {
    const {fontsLoaded} = useContext(FontContext);
  return (
    <>
        {fontsLoaded && 
            <View style={styles.parentCardBox}>
                <View style={styles.cardBox}>
                    <Image
                        source={ImageURL.bathTub}
                        style={styles.imgStyle}
                    />
                    <View style={styles.cardData}>
                        <Text style={[styles.cardheading, fontsLoaded && {fontFamily: "Roboto-Bold"}]}>D'paragon dieng hill</Text>

                        <View style={styles.manageStarRow}>
                            <Image
                                source={ImageURL.fullStar}
                                style={styles.starStyle}
                            />
                            <Image
                                source={ImageURL.fullStar}
                                style={styles.starStyle}
                            />
                            <Image
                                source={ImageURL.fullStar}
                                style={styles.starStyle}
                            />
                            <Image
                                source={ImageURL.fullStar}
                                style={styles.starStyle}
                            />
                            <Image
                                source={ImageURL.halfStar}
                                style={styles.starStyle}
                            />
                            <Text style={[styles.ratingText , fontsLoaded && {fontFamily: "Roboto-Regular"}]}>4.9 (980)</Text>
                        </View>

                        <View style={{marginBottom: 5, flexDirection: "row"}}>
                            <View style={styles.serviceViewBox}>
                                <Image
                                    source={ImageURL.bathTubIcon}
                                    style={styles.serviceImage}
                                />
                                <Text style={[styles.addressText, {marginLeft: 3, marginTop: -2} ,fontsLoaded && {fontFamily: "Roboto-Regular"}]}>Bathtub</Text>
                            </View>

                            <View style={[styles.serviceViewBox, {marginLeft: 15}]}>
                                <Image
                                    source={ImageURL.wifiIcon}
                                    style={styles.serviceImage}
                                />
                                <Text style={[styles.addressText, {marginLeft: 3, marginTop: -2} ,fontsLoaded && {fontFamily: "Roboto-Regular"}]}>Wifi</Text>
                            </View>
                        </View>

                        <Text style={[styles.addressText , fontsLoaded && {fontFamily: "Roboto-Regular"}]}>Jl. Bukit Dieng Blok H1, Malang City</Text>

                        <View style={styles.priceTextBox}>
                            <Text style={[styles.priceText , fontsLoaded && {fontFamily: "Roboto-Bold"}]}>{props.cardPrice} /</Text>
                            <Text style={[styles.priceText , fontsLoaded && {fontFamily: "Roboto-Regular"}]}> night</Text>
                        </View>
                    </View>
                </View>
        </View>
        }
    </>
  )
}

const styles = StyleSheet.create({
    parentCardBox: {
      marginTop: 10,
      marginHorizontal: 15
    },
    cardBox: {
      height: 145,
      borderRadius: 10,
      elevation: 5,
      backgroundColor: 'white',
      flexDirection: "row"
    },
    imgStyle: {
      resizeMode: "contain",
      height: 130,
      width: width*0.35,
      marginTop: 7,
      marginLeft: 4
    },
    cardData: {
      width: width*0.5,
      margin: 10
    },
    cardheading: {
      fontSize: 16
    },
    manageStarRow: {
      flexDirection: "row",
      marginVertical: 5,
    },
    starStyle: {
      height: 15,
      width: 15
    },
    ratingText: {
      marginLeft: 10,
      marginTop: -1,
      color: "#515252"
    },
    addressText: {
        color: "#515252",
        fontSize: 12
    },
    priceTextBox: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    priceText: {
        color: "#4B84F1",
    },
    serviceImage: {
        height: 12,
        width: 12
    },
    serviceViewBox: {
        flexDirection: "row",
        backgroundColor: "#F8F9FB",
        padding: 5,
        borderRadius: 10
    }
  })
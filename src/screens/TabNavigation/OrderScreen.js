import { View, Text, Image, StyleSheet } from 'react-native';
import { useContext } from 'react';
import {FontContext} from '../../context/FontContext';
import ButtonCom from '../../components/ButtonCom';
import CustomHeading from '../../components/CustomHeading';
import ImageURL from '../../ImageURL';

export default function OrderScreen() {
  const {fontsLoaded} = useContext(FontContext);
  return (
    <>
      {fontsLoaded && 
        <View style={styles.mainBox}>
          <CustomHeading
            title="Order"
          />
          <View style={styles.secondBox}>
            <Image
              source={ImageURL.orderBox}
              style={styles.boxImage}
            />
            <Text style={[styles.bookedText, {fontFamily: "Roboto-Regular"}]}>Oops! Looks like you haven't booked a room yet</Text>
            <ButtonCom
              title="ORDER NOW"
            />
          </View>
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    backgroundColor: "#fff"
  },
  secondBox: {
    marginHorizontal: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxImage: {
    resizeMode: "contain",
    height: 200,
    width: 200,
  },
  bookedText: {
    color: "#515252",
    fontSize: 18,
    textAlign: "center",
    width: 250,
    marginVertical: 40
  }
})
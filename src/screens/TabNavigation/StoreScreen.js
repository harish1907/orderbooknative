import { View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { FontContext } from '../../context/FontContext';
import CustomHeading from '../../components/CustomHeading';
import CardBox from '../../components/CardBox';


export default function StoreScreen() {
  const {fontsLoaded} = useContext(FontContext);
  return (
    <>
      {fontsLoaded && 
        <View style={styles.mainBox}>
          <CustomHeading
            title="Store"
          />
          <CardBox
            cardPrice="IDR 175K"
          />
          <CardBox
            cardPrice="IDR 125K"
          />
          <CardBox
            cardPrice="IDR 130K"
          />
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
})
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import {FontContext} from '../../context/FontContext';
import { useContext } from 'react';
import ImageURL from '../../ImageURL';

export default function HomeScreen() {
  const {fontsLoaded} = useContext(FontContext);

  return (
    <>
      {fontsLoaded && 
        <View style={styles.mainBox}>
          
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    backgroundColor: "#fff"
  }
})
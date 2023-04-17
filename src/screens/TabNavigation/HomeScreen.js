import { View,Text, StyleSheet, Dimensions, Image } from 'react-native';
import {FontContext} from '../../context/FontContext';
import { useContext } from 'react';
import ImageURL from '../../ImageURL';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { ScrollView } from 'react-native-gesture-handler';
import CustomInput from '../../components/CustomInput';
import ButtonCom from '../../components/ButtonCom'

const {width} = Dimensions.get("window");

export default function HomeScreen() {
  const {fontsLoaded} = useContext(FontContext);
  const colors = [1,2,3,4,5];
  return (
    <>
      {fontsLoaded && 
        <View style={styles.mainBox}>
          <ScrollView>
            <View style={styles.swipperView}> 
              <SwiperFlatList
                index={2}
                showPagination
                paginationActiveColor="#4B84F1"
                paginationDefaultColor="#C4C4C4"
                paginationStyle={styles.paginationStyle}
                paginationStyleItem={styles.paginationStyleItem}
                data={colors}
                renderItem={({ item }) => (
                  <Image
                    key={`${item}`}
                    source={ImageURL.homeHeaderImg}
                    style={styles.homeHeaderImg}
                  />
                )}
              />
              <Text style={[styles.seeAllText, fontsLoaded && {fontFamily: "Roboto-Regular"}]}>{"View All >"}</Text>
            </View>

            <View style={styles.contentView}>
              <View style={styles.contentViewTopBox}>
                <Text style={[styles.contentHeadingStyle, fontsLoaded && {fontFamily: "Roboto-Bold"}]}>Book a Boarding Room</Text>
                <CustomInput
                  placeholder="🔍 Where do you want to stay?"
                  selectionColor="#E4E4E4"
                  style={{
                    borderColor: "#E4E4E4"
                  }}
                />

                <View style={styles.dateAndRoomBox}>
                  <View style={styles.searchComponentBox}>
                    <Image
                      source={ImageURL.calenderIcon}
                      style={{
                        height: 20,
                        width: 20
                      }}
                    />
                    <Text style={[styles.screenTextStyle, fontsLoaded && {fontFamily: "Roboto-Bold"}]}>Sen,28 Sep 2020</Text>
                  </View>

                  <View style={styles.searchComponentBox}>
                    <Image
                      source={ImageURL.moonIcon}
                      style={{
                        height: 20,
                        width: 20
                      }}
                    />
                    <Text style={[styles.screenTextStyle, fontsLoaded && {fontFamily: "Roboto-Bold"}]}>1 Malam</Text>
                  </View>
                </View>

                <Text style={[styles.smallText, fontsLoaded && {fontFamily: "Roboto-Regular"}]}>Check-in starts from 14:00</Text>
                <Text style={[styles.smallText, fontsLoaded && {fontFamily: "Roboto-Regular"}]}>Check out Tue, <Text style={[fontsLoaded && {fontFamily: "Roboto-Bold"}]}>29 Sept 2020</Text> before 12:00pm</Text>

                <ButtonCom
                  title="CHECK AVAILABILITY"
                  style={{marginVertical: 20}}
                />
              </View>

            </View>
          </ScrollView>
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
  homeHeaderImg: {
    width,
    height: 203,
    resizeMode: "contain",
    marginBottom: 5
  },
  swipperView: {
    flex : 2,
  },
  paginationStyleItem: {
    height: 10,
    width: 10,
    marginHorizontal: 3,
    marginTop: -10,
  },
  paginationStyle: {
    paddingRight: width*0.7
  },
  seeAllText: {
    color: "#313333",
    textAlign: "right",
    marginHorizontal: 15,
    paddingBottom: width*0.05
  },
  contentView: {
    flex : 4,
    marginHorizontal: 15,
    marginBottom: 20
  },
  contentViewTopBox: {
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: 15
  },
  contentHeadingStyle: {
    marginVertical: 15,
    color: "#313333",
    fontSize: 20
  },
  dateAndRoomBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5
  },
  searchComponentBox: {
    flexDirection: "row",
    padding: 15,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center"
  },
  screenTextStyle: {
    color: "#313333",
    paddingLeft: 5
  },
  smallText: {
    color: "#515252"
  }
})
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {FontContext} from '../../context/FontContext';
import { useContext, useState } from 'react';
import CustomHeading from '../../components/CustomHeading';
import NotificationBox from '../../components/NotificationBox';
import ImageURL from '../../ImageURL';

export default function MessageScreen() {
  const {fontsLoaded} = useContext(FontContext);
  const [customTab, setCustomTab] = useState("message");
  return (
    <>
      {fontsLoaded && 
        <View style={styles.mainBox}>
          <CustomHeading
            title="Message"
          />
          <View style={styles.backBoxView}>
            <TouchableOpacity style={[
                                      styles.selectedStyle, 
                                      customTab !== "message" && styles.tabNotSelected
                                    ]} onPress={() => setCustomTab("message")}>
                <Text style={[
                              styles.textStyleSelected, 
                              fontsLoaded && {fontFamily: "Roboto-Bold"} , 
                              customTab !== "message" && {color: "#515252"}
                            ]}>Incoming messages</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[
                                      styles.selectedStyle, 
                                      customTab !== "notification" && styles.tabNotSelected
                                    ]} onPress={() => setCustomTab("notification")}>
                <Text style={[
                              styles.textStyleSelected, 
                              fontsLoaded && {fontFamily: "Roboto-Bold"} , 
                              customTab !== "notification" && {color: "#515252"}
                            ]}>Notifications</Text>
            </TouchableOpacity>
          </View>

          {customTab === "message" ? (
            <View style={styles.messageBodyBox}>
              <Image
                source={ImageURL.messageBig}
                style={{height: 150, width: 150}}
              />
              <Text style={[styles.messageBodyText, fontsLoaded && {fontFamily: "Roboto-Regular"}]}>The incoming message is still empty, but don't worry, we'll let you know later</Text>
            </View>
          ) : (
            <>
              <NotificationBox/>
              <NotificationBox/>
              <NotificationBox/>
            </>
          )}

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
  backBoxView: {
    backgroundColor: "#E4E4E4",
    height: 50,
    margin: 22,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  selectedStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 7,
    padding: 5,
    borderRadius: 20,
    paddingHorizontal: 10,
    elevation: 5
  },
  textStyleSelected: {
    color: "#4B84F1",
    fontSize: 16,
  },
  tabNotSelected: {
    backgroundColor: "#E4E4E4",
    elevation: 0
  },
  messageBodyBox: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100
  },
  messageBodyText: {
    textAlign: "center",
    width: 300,
    marginTop: 30,
    color: "#515252",
    fontSize: 15
  }
})
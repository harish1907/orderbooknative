import { View, Text, StyleSheet, Image } from 'react-native';
import { FontContext } from '../../context/FontContext';
import CustomHeading from '../../components/CustomHeading';
import { useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileCollection from '../../components/ProfileCollection';
import ImageURL from '../../ImageURL';

export default function ProfileScreen() {
  const {fontsLoaded} = useContext(FontContext);
  return (
    <>
      {fontsLoaded && 
        <ScrollView style={styles.mainBox} showsHorizontalScrollIndicator={false}>
          <CustomHeading
            title="Profile"
          />

          <View style={styles.userDataBox}>
            <View>
              <Image
                source={ImageURL.profileIMG}
                style={styles.userImage}
              />
            </View>

            <View>
              <Text style={[styles.nameText, fontsLoaded && {fontFamily: "Roboto-Bold"}]}>Harish Chaudhary</Text>
              <Text style={[styles.emailText, fontsLoaded && {fontFamily: "Roboto-Regular"}]}>Harishc1903@gmail.com</Text>
              <Text style={[styles.emailText, fontsLoaded && {fontFamily: "Roboto-Regular"}]}>+91-9999444433</Text>
            </View>
          </View>

          <View style={styles.userManageLink}>
            <Text style={[styles.arragementHeading, fontsLoaded && {fontFamily: "Roboto-Regular"}]}>Arrangement</Text>

            <ProfileCollection
              title="Personal Information"
              source={ImageURL.profileUser}
            />

            <ProfileCollection
              title="Password"
              source={ImageURL.lock}
            />

            <ProfileCollection
              title="ID Card"
              source={ImageURL.wallet}
            />
            
            <Text style={[styles.arragementHeading, fontsLoaded && {fontFamily: "Roboto-Regular"}]}>About</Text>
            <ProfileCollection
              title="About Us"
              source={ImageURL.info}
            />
            <ProfileCollection
              title="Help center"
              source={ImageURL.question}
            />
            <ProfileCollection
              title="Logout"
              source={ImageURL.signout}
            />

          </View>

        </ScrollView>
      }
    </>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    backgroundColor: "#fff"
  },
  userDataBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2"
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  nameText: {
    color: "#313333",
    fontSize: 17
  },
  emailText: {
    color: "#515252",
    marginVertical: 4
  },
  userManageLink: {
    marginHorizontal: 15,
  },
  arragementHeading: {
    color: "#8F9090",
    fontSize: 20,
    marginTop: 20
  },
})


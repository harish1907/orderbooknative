import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import OrderScreen from './OrderScreen';
import StoreScreen from './StoreScreen';
import MessageScreen from './MessageScreen';
import ProfileScreen from './ProfileScreen';
import { Image, StyleSheet } from 'react-native';
import {FontContext} from '../../context/FontContext'
import { useContext } from 'react';
import ImageURL from '../../ImageURL';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const {fontsLoaded} = useContext(FontContext);
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 60,
            borderTopWidth: 0,
            elevation: 0
          },
          tabBarLabelStyle: [
            {marginBottom: 7},
            fontsLoaded && {fontFamily: "Roboto-Bold"}
          ]
        }
      }
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={
                  color!=="#8E8E8F" ? (
                    ImageURL.homeSelect
                  ) : (
                    ImageURL.home
                  )
                }
                style={[styles.iconStyle, {height: 35, width: 35}]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={
                  color!=="#8E8E8F" ? (
                    ImageURL.orderSelected
                  ) : (
                    ImageURL.order
                  )
                }
                style={styles.iconStyle}
              />
            ),
            // tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="StoreScreen"
          component={StoreScreen}
          options={{
            tabBarLabel: 'Store',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={
                  color!=="#8E8E8F" ? (
                    ImageURL.storeSelected
                  ) : (
                    ImageURL.store
                  )
                }
                style={styles.iconStyle}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={
                  color!=="#8E8E8F" ? (
                    ImageURL.messageSelected
                  ) : (
                    ImageURL.message                   
                  )
                }
                style={styles.iconStyle}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={
                  color!=="#8E8E8F" ? (
                    ImageURL.profileSelected
                  ) : (
                    ImageURL.profile
                  )
                }
                style={styles.iconStyle}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  iconStyle: {
    resizeMode: "contain",
    height: 30,
    width: 30
  }
})
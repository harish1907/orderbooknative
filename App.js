import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './src/screens/StartScreen';
import Login from './src/screens/Login';
import { FontContextProvider } from './src/context/FontContext';
import TabNavigation from './src/screens/TabNavigation/TabNavigation';

const Stack = createStackNavigator();
export default function App() {
  return (
    <FontContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='TabNavigation' screenOptions={{headerShown: false}}>
          <Stack.Screen  name="StartScreen" component={StartScreen} />
          <Stack.Screen  name="Login" component={Login} />
          <Stack.Screen  name="TabNavigation" component={TabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </FontContextProvider>
  );
}
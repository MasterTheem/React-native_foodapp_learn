import React, { useEffect } from 'react';

import { StatusBar } from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import rootReducer from "./stores/rootReducer"
import cartItems from './stores/cartItem';

import AsyncStorage from "@react-native-async-storage/async-storage"
import SplashScreen from "react-native-splash-screen"

import { FloatButton } from './components';

import CustomDrawer from "./navigation/CustomDrawer"
import {
  Home,

  OnBoarding,
  SignIn,
  SignUp,
  Otp,

  FoodDetail,
  Checkout,
  MyCart,
  Success,
  AddCard,
  MyCard,
  DeliveryStatus,
  Map

} from './screens';

const storeTab = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const storeCart = createStore(cartItems)



const Stack = createNativeStackNavigator();

function CustomDrawerfuction() {
  return (
    <Provider store={storeTab}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="CustomDrawer1" component={CustomDrawer} />
      </Stack.Navigator>
    </Provider>
  )
}


const App = () => {

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null)

  React.useEffect(() =>{
    SplashScreen.hide();
  },[])

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true)
      } else {
        setIsFirstLaunch(false)
      }
    })


  }, [])

  if (isFirstLaunch == null) {
    return null
  } else if (isFirstLaunch == true) {
    return (
      <Provider store={storeCart}>
        <NavigationContainer>
          <StatusBar
            backgroundColor="#FF6C44"
            barStyle="light-content"
          />
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            initialRouteName={'OnBoarding'}
          >

            {/* <Stack.Screen
            name="CustomDrawer"
            component={CustomDrawer}
          /> */}

            <Stack.Screen
              name="CustomDrawer"
              component={CustomDrawerfuction}
            />

            <Stack.Screen
              name="Home"
              component={Home}
            />

            <Stack.Screen
              name="OnBoarding"
              component={OnBoarding}
            />

            <Stack.Screen
              name="SignIn"
              component={SignIn}
            />

            <Stack.Screen
              name="SignUp"
              component={SignUp}
            />

            <Stack.Screen
              name="Otp"
              component={Otp}
            />

            <Stack.Screen
              name="FoodDetail"
              component={FoodDetail}
            />

            <Stack.Screen
              name="Checkout"
              component={Checkout}
            />
            <Stack.Screen
              name="MyCart"
              component={MyCart}
            />

            <Stack.Screen
              name="Success"
              component={Success}
              options={{ gestureEnabled: false }}
            />

            <Stack.Screen
              name="AddCard"
              component={AddCard}
            />

            <Stack.Screen
              name="MyCard"
              component={MyCard}
            />

            <Stack.Screen
              name="DeliveryStatus"
              component={DeliveryStatus}
              options={{ gestureEnabled: false }}
            />

            <Stack.Screen
              name="Map"
              component={Map}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  } else {
    return (
      <Provider store={storeCart}>
        <NavigationContainer>
          <StatusBar
            backgroundColor="#FF6C44"
            barStyle="light-content"
          />
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            initialRouteName={'CustomDrawer'}
          >

            {/* <Stack.Screen
            name="CustomDrawer"
            component={CustomDrawer}
          /> */}

            <Stack.Screen
              name="CustomDrawer"
              component={CustomDrawerfuction}
            />

            <Stack.Screen
              name="Home"
              component={Home}
            />

            <Stack.Screen
              name="OnBoarding"
              component={OnBoarding}
            />

            <Stack.Screen
              name="SignIn"
              component={SignIn}
            />

            <Stack.Screen
              name="SignUp"
              component={SignUp}
            />

            <Stack.Screen
              name="Otp"
              component={Otp}
            />

            <Stack.Screen
              name="FoodDetail"
              component={FoodDetail}
              options={{ gestureEnabled: false }}
            />

            <Stack.Screen
              name="Checkout"
              component={Checkout}
            />
            <Stack.Screen
              name="MyCart"
              component={MyCart}
            />

            <Stack.Screen
              name="Success"
              component={Success}
              options={{ gestureEnabled: false }}
            />

            <Stack.Screen
              name="AddCard"
              component={AddCard}
            />

            <Stack.Screen
              name="MyCard"
              component={MyCard}
            />

            <Stack.Screen
              name="DeliveryStatus"
              component={DeliveryStatus}
              options={{ gestureEnabled: false }}
            />

            <Stack.Screen
              name="Map"
              component={Map}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

    )
  }

  // return (
  //   <Provider store={storeCart}>
  //     <NavigationContainer>
  //       <Stack.Navigator
  //         screenOptions={{
  //           headerShown: false
  //         }}
  //         initialRouteName={'CustomDrawer'}
  //       >

  //         {/* <Stack.Screen
  //           name="CustomDrawer"
  //           component={CustomDrawer}
  //         /> */}

  //         <Stack.Screen
  //           name="CustomDrawer"
  //           component={CustomDrawerfuction}
  //         />

  //         <Stack.Screen
  //           name="Home"
  //           component={Home}
  //         />

  //         <Stack.Screen
  //           name="OnBoarding"
  //           component={OnBoarding}
  //         />

  //         <Stack.Screen
  //           name="SignIn"
  //           component={SignIn}
  //         />

  //         <Stack.Screen
  //           name="SignUp"
  //           component={SignUp}
  //         />

  //         <Stack.Screen
  //           name="Otp"
  //           component={Otp}
  //         />

  //         <Stack.Screen
  //           name="FoodDetail"
  //           component={FoodDetail}
  //         />

  //         <Stack.Screen
  //           name="Checkout"
  //           component={Checkout}
  //         />
  //         <Stack.Screen
  //           name="MyCart"
  //           component={MyCart}
  //         />

  //         <Stack.Screen
  //           name="Success"
  //           component={Success}
  //           options={{ gestureEnabled: false }}
  //         />

  //         <Stack.Screen
  //           name="AddCard"
  //           component={AddCard}
  //         />

  //         <Stack.Screen
  //           name="MyCard"
  //           component={MyCard}
  //         />

  //         <Stack.Screen
  //           name="DeliveryStatus"
  //           component={DeliveryStatus}
  //           options={{ gestureEnabled: false }}
  //         />

  //         <Stack.Screen
  //           name="Map"
  //           component={Map}
  //         />

  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </Provider>
  // )
}
export default App
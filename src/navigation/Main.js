import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Home } from '../screens/Home';
import { ProductDetails } from '../screens/ProductDetails';
import { Explore } from '../screens/Explore';
import { Account } from '../screens/Account';
import { Gift } from '../screens/Gift';
import { Order } from '../screens/Order';
import { Menu } from '../screens/Menu';
import { Scan } from '../screens/Scan';
import { Cart } from '../screens/Cart';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import Toptabs from '../components/topTabs'
import TopTabsMenu from '../components/TopTabsMenu'
import { CartIcon, TabBarIcon, CloseIcon, Header } from '../components/Navigation';
import colors from '../constants/colors';

const tabStackScreenOptions = {
  headerShown: false,
 // headerRight: () => <CartIcon />,
};

const HomeStack = createStackNavigator();
const HomeStackNav = () => (
  <HomeStack.Navigator   screenOptions={({ route }) => ({
      
    tabBarIcon: props => <TabBarIcon {...props} routeName={route.name}/>,
    headerTitle: props =>  <Header {...props} routeName={route.name}/>,
    headerTitleAlign: "left",
    // headerLeft: null
  })}>
    <HomeStack.Screen name="Home" component={Toptabs}   options={{
        headerShown: true }} />
    <HomeStack.Screen name="Account" component={Account}   options={{
        headerShown: true }} />
    
  </HomeStack.Navigator>
);

const ExploreStack = createStackNavigator();
const ExploreStackNav = () => (
  <ExploreStack.Navigator screenOptions={tabStackScreenOptions}>
    <ExploreStack.Screen name="Explore" component={Explore} />
    <ExploreStack.Screen name="Details" component={ProductDetails} />
  </ExploreStack.Navigator>
);

const AccountStack = createStackNavigator();
const AccountStackNav = () => (
  <AccountStack.Navigator screenOptions={tabStackScreenOptions}>
    <AccountStack.Screen name="Toptabs" component={HomeStackNav} />
    <AccountStack.Screen name="Account" component={Account} />
  </AccountStack.Navigator>
);

const MenuStack = createStackNavigator();
const MenuStackNav = () => (
  <MenuStack.Navigator screenOptions={tabStackScreenOptions}>
    <MenuStack.Screen name="Toptabs" component={TopTabsMenu} />
    <MenuStack.Screen name="Details" component={ProductDetails} />
  </MenuStack.Navigator>
);



const MainTabs = createBottomTabNavigator();
const Tabs = () => (
  <MainTabs.Navigator
    tabBarOptions={{
      activeTintColor: colors.brand,
      inactiveTintColor: colors.icon,
    }}
    screenOptions={({ route }) => ({
      
      tabBarIcon: props => <TabBarIcon {...props} routeName={route.name}/>,
      headerTitle: props =>  <Header {...props} routeName={route.name}/>,
      headerTitleAlign: "left"
    })}
  >
    <MainTabs.Screen name="Home" component={AccountStackNav} options={{
        headerShown: false }} />
    <MainTabs.Screen name="Menu" component={MenuStackNav} />
    <MainTabs.Screen name="Scan" component={Scan} />
    <MainTabs.Screen name="Gift" component={Gift} />
    <MainTabs.Screen name="Order" component={Order} />
  </MainTabs.Navigator>
);

const Auth = createMaterialTopTabNavigator();
const AuthTabs = () => (
  <Auth.Navigator>
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator mode="modal">
    <MainStack.Screen
      name="Root"
      component={Tabs}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Cart"
      component={Cart}
      options={{
        headerLeft: () => <CloseIcon />,
      }}
    />
    <MainStack.Screen
      name="Auth"
      component={AuthTabs}
      options={{
        headerLeft: () => <CloseIcon />,
      }}
    />
  </MainStack.Navigator>
);

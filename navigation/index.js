import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-native-gesture-handler'
import Welcome from './../screens/Welcome';
import Login from './../screens/Login';
import Explore from './../screens/Explore';
import Browse from './../screens/Browse';
import Product from './../screens/Product';
import Settings from './../screens/Settings';

import { theme } from '../constants';

const screens = createStackNavigator(
    {
        Welcome,
        Login,
        Explore,
        Browse,
        Product,
        Settings
    },
    {
        defaultNavigationOptions: {
            headerStyle: {},
            headerBackImage: <Image />,
            headerBackTitle: null,
            headerLeftContainerStyle: null,
        
        }
    }

)
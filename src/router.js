import React, {Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './routes/Home';
import Detail from './routes/Detail';

MaterialCommunityIconsIcon.loadFont();

const Tabs = createBottomTabNavigator();
const TabsNavigator = () =>(
    <Tabs.Navigator initialRouteName="Home">
        <Tabs.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: '首頁',
                tabBarIcon: ({ focused, color}) => (
                    <MaterialCommunityIconsIcon color={color} size={24} name="home"/>
                ),
            }}
        />
    </Tabs.Navigator>
);

const Stack = createStackNavigator();
const StackNavigator = () =>(
    <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
            name="Tabs"
            component={TabsNavigator}
            options={{
                title :"OpenData 旅遊景點分享APP",
            }}
        />
        <Stack.Screen
            name="Detail"
            component={Detail}
            options={({ route }) => ({
                headerBackTitle: '返回',
                title: route.params.data.caseName,
            })}
        />
    </Stack.Navigator>
);

export default class Router extends Component {
    render(){
        return (
            <NavigationContainer>
              <StackNavigator />
            </NavigationContainer>
        );
    }
}
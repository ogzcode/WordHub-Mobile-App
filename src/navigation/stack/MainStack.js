import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBar } from './bottomTabBar/CustomTabBar';
import { CustomHeader } from './bottomTabBar/CustomHeader';

import Home from '../../screen/home/Home';
import Saved from '../../screen/saved/Saved';

const Tab = createBottomTabNavigator();

export default function MainStack() {
    return (
        <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={{
                header: props => <CustomHeader {...props} />,
                tabBarBackground: "blue",
                tabBarHideOnKeyboard: false,
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Saved" component={Saved} />
            <Tab.Screen name="Games" component={Home} />
        </Tab.Navigator>
    );
}
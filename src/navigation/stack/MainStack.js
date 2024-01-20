import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBar } from './bottomTabBar/CustomTabBar';
import { CustomHeader } from './bottomTabBar/CustomHeader';

import Home from '../../screen/home/Home';
import Saved from '../../screen/saved/Saved';
import Game from '../../screen/game/Game';
import Setting from '../../screen/setting/Setting';

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
            <Tab.Screen name="Games" component={Game} />
            <Tab.Screen name="Settings" component={Setting} options={{ tabBarVisible: false }} />
        </Tab.Navigator>
    );
}
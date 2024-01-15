import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../../screen/auth/Welcome';
import Auth from '../../screen/auth/Auth';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
    );
}
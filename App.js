import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/Navigation';

import { store } from './src/store/store';

import { FontProvider } from './src/context/fontContext';
import { AuthProvider } from './src/context/authContext';
import { ToastProvider } from './src/components/toast/useToast';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="black" />
      <Provider store={store}>
        <FontProvider>
          <AuthProvider>
            <ToastProvider>
              <Navigation />
            </ToastProvider>
          </AuthProvider>
        </FontProvider>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

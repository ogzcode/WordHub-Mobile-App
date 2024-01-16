import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import Navigation from './src/navigation/Navigation';

import { FontProvider } from './src/context/fontContext';
import { AuthProvider } from './src/context/authContext';
import { ToastProvider } from './src/components/toast/useToast';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="black" />
      <FontProvider>
        <AuthProvider>
          <ToastProvider>
            <Navigation />
          </ToastProvider>
        </AuthProvider>
      </FontProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

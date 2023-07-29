import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigator';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    // // Monument Extended Fonts
    MonumentExtendedRegular: require('./config/fonts/Monument-Extended/MonumentExtended-Regular.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar style="light" />
        <AppStackNavigator />
    </NavigationContainer>
  );
}

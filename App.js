import { useFonts } from 'expo-font';

import Application from './src/navigation/Application';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [isLoad] = useFonts({
    'PoppinsBold': require("./assets/fonts/Poppins-Bold.ttf"),
    'PoppinsMedium': require("./assets/fonts/Poppins-Medium.ttf"),
    'PoppinsRegular': require("./assets/fonts/Poppins-Regular.ttf"),
    'PoppinsSemiBold': require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!isLoad) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Application />
    </SafeAreaView>
  )

}
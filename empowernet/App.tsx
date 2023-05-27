import { AppNavigator } from './navigation/app-navigator';
import { useFonts, OpenSans_300Light, OpenSans_400Regular, OpenSans_500Medium, OpenSans_600SemiBold, OpenSans_700Bold} from '@expo-google-fonts/open-sans';


export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light, 
    OpenSans_400Regular, 
    OpenSans_500Medium, 
    OpenSans_600SemiBold, 
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppNavigator />
  );
}
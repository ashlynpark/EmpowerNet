import { AppNavigator } from './navigation/app-navigator';
//import { useFonts, OpenSans_300Light, OpenSans_400Regular, OpenSans_500Medium, OpenSans_600SemiBold, OpenSans_700Bold} from '@expo-google-fonts/open-sans';
import { useFonts, Syne_700Bold, Syne_600SemiBold } from '@expo-google-fonts/syne';
import { Barlow_300Light, Barlow_400Regular, Barlow_300Light_Italic, Barlow_400Regular_Italic, Barlow_500Medium, Barlow_600SemiBold } from '@expo-google-fonts/barlow';


export default function App() {
  let [fontsLoaded] = useFonts({
    // OpenSans_300Light, 
    // OpenSans_400Regular, 
    // OpenSans_500Medium, 
    // OpenSans_600SemiBold, 
    Syne_700Bold,
    Syne_600SemiBold,
    Barlow_300Light, 
    Barlow_400Regular, 
    Barlow_300Light_Italic, 
    Barlow_400Regular_Italic, 
    Barlow_500Medium, 
    Barlow_600SemiBold,
    

  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppNavigator />
  );
}
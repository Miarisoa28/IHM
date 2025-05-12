import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccueilScreen from './screens/AccueilScreen';
import LoginScreen from './screens/LoginScreen';
import SelectionClasseScreen from './screens/SelectionClasseScreen';
import AppelScreen from './screens/AppelScreen';
import BaseDeDonneesScreen from './screens/BaseDeDonneesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={AccueilScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sélection Classe" component={SelectionClasseScreen} />
        <Stack.Screen name="Appel" component={AppelScreen} />
        <Stack.Screen name="Base de Données" component={BaseDeDonneesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

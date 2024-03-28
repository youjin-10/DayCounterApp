import { AppRegistry } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DayList from "@/screens/DayList";
import DayEdit from "@/screens/DayEdit";
import { RootStackParamList } from "@/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DayList">
        <Stack.Screen name="DayList" component={DayList} />
        <Stack.Screen name="DayEdit" component={DayEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("daycounterapp", () => App);

export default App;

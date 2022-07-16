import "./src/i18n";
import { AppNavigator, useNavigationPersistence } from "./src/navigators";
import * as storage from "./src/utils/storage";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE";

export default function App() {
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);
  if (!isNavigationStateRestored) return null;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppNavigator
        initialState={initialNavigationState}
        onStateChange={onNavigationStateChange}
      />
    </SafeAreaProvider>
  );
}

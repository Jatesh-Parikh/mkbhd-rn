import { SplitView } from "@/components/SplitView";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import {
  useLibraryWallpapers,
  useLikedWallpapers,
  useSuggestedWallpapers,
} from "@/hooks/useWallpapers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useColorScheme } from "react-native";
import { StyleSheet } from "react-native";
import * as React from "react";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedSafeAreaView style={styles.container}>
      <Tab.Navigator
        style={{
          flex: 1,
        }}
        screenOptions={{
          tabBarActiveTintColor: Colors[theme].tint,
          tabBarStyle: {
            backgroundColor: Colors[theme].background,
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors[theme].text,
            height: 5,
          },
        }}
      >
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Liked" component={LikedScreen} />
        <Tab.Screen name="Suggested" component={SuggestedScreen} />
      </Tab.Navigator>
    </ThemedSafeAreaView>
  );
}

function LibraryScreen() {
  const wallpapers = useLibraryWallpapers();

  return (
    <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpapers} />
    </ThemedView>
  );
}

function LikedScreen() {
  const wallpapers = useLikedWallpapers();

  return (
    <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpapers} />
    </ThemedView>
  );
}

function SuggestedScreen() {
  const wallpapers = useSuggestedWallpapers();

  return (
    <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpapers} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

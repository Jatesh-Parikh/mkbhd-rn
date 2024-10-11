import { useWallpapers } from "@/hooks/useWallpapers";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as React from "react";

export default function Layout() {
  const wallpapers = useWallpapers();
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </GestureHandlerRootView>
  );
}

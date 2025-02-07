import { Tabs } from "expo-router";
import TabHome from "@/assets/icons/tabs/TabHome";
import theme from "@/shared/styles/theme";
import TabSearch from "@/assets/icons/tabs/TabSearch";
import TabTranslate from "@/assets/icons/tabs/TabTranslate";
import TabRecords from "@/assets/icons/tabs/TabRecords";
import TabMypage from "@/assets/icons/tabs/TabMypage";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "#354A4D",
        tabBarStyle: {
          height: Platform.OS === "ios" ? 68 : 52,
          paddingTop: 5,
          paddingHorizontal: 25,
          backgroundColor: "#FBFDFF",
          boxShadow: "2px 0 2px rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabHome color={color} />,
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          tabBarIcon: ({ color }) => <TabSearch color={color} />,
        }}
      />
      <Tabs.Screen
        name="translate/index"
        options={{
          tabBarIcon: ({ color }) => <TabTranslate color={color} />,
        }}
      />
      <Tabs.Screen
        name="records/index"
        options={{
          tabBarIcon: ({ color }) => <TabRecords color={color} />,
        }}
      />
      <Tabs.Screen
        name="mypage/index"
        options={{
          tabBarIcon: ({ color }) => <TabMypage color={color} />,
        }}
      />
    </Tabs>
  );
}

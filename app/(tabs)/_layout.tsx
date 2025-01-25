import { Tabs } from "expo-router";
// import HomeIcon from "@/assets/icons/home-unactive.svg";
// import SearchIcon from "../assets/icons/search-unactive.svg";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // tabBarIcon: ({ color }) => <HomeIcon size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          // tabBarIcon: ({ color }) => <SearchIcon size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="translation"
        options={{
          title: "Translation",
        }}
      />
      <Tabs.Screen
        name="records"
        options={{
          title: "Records",
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          title: "Mypage",
        }}
      />
    </Tabs>
  );
}

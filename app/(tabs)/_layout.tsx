import CustomTabBar from "@/entities/custom_tab_bar/CustomTabBar";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{ 
                headerShown: false,
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tabs.Screen name="home/index"/> 
            <Tabs.Screen name="payments/index" /> 
            <Tabs.Screen name="history/index" /> 
            <Tabs.Screen name="analytics/index" /> 
            <Tabs.Screen name="chat/index" />
        </Tabs>
    );
}
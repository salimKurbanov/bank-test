import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { styles } from "./styles/style";
import NavBtn from "@/shared/ui/nav_btn/NavBtn";
import { Colors } from "@/shared/constants/colors";
import { tabs } from "@/shared/config/routes.config";

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {

    const onPress = (name: string) => {
        navigation.navigate(name as never);
    };

    return (
        <View style={styles.customTabs}>
            {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const focused = state.index === index;

                return (
                    <NavBtn
                        key={tab.name}
                        icon={
                            <Icon 
                                size={20} 
                                color={focused ? Colors.primary : Colors.textPrimary} 
                            />
                        }
                        gap={6}
                        fontSize={12}
                        fontColor={focused ? Colors.primary : Colors.textPrimary}
                        label={tab.label}
                        callback={() => onPress(tab.name)}
                    />
                );
            })}
        </View>
    );
}

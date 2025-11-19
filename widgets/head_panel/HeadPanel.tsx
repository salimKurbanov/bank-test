import { View } from "react-native";
import IconEarth from "@/shared/icons/IconEarth";
import NavBtn from "@/shared/ui/nav_btn/NavBtn";
import IconTransfer from "@/shared/icons/IconTransfer";
import IconGift from "@/shared/icons/IconGift";
import IconSupport from "@/shared/icons/IconSupport";

import { styles } from "./style/styles";

export default function HeadPanel() {
    return (
        <View style={styles.root}>
            <NavBtn 
                icon={<IconEarth size={24}/>}
                label="Travel"
                gap={8}
                fontSize={14}
            />
            <NavBtn 
                icon={<IconTransfer size={24}/>}
                label="Delivery"
                gap={8}
                fontSize={14}
            />
            <NavBtn 
                icon={<IconGift size={24}/>}
                label="Bonuses"
                gap={8}
                fontSize={14}
            />
            <NavBtn 
                icon={<IconSupport size={24}/>}
                label="Support"
                gap={8}
                fontSize={14}
            />
        </View>
    );
}
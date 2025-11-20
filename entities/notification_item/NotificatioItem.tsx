import { Text, View } from "react-native";
import { TypeNotificationItem } from "./types/types";
import Avatar from "@/shared/ui/avatar/Avatar";
import Bottom from "@/entities/notification_item/ui/Bottom";
import { styles } from "./styles/style";
import IconSecurity from "@/shared/icons/IconSecurity";
import IconTransferMoney from "@/shared/icons/IconTransferMoney";
import IconTravel from "@/shared/icons/IconTravel";

export default function NotificationItem({ 
    title, 
    money, 
    text_top, 
    text_bottom, 
    source,
    date,
    type,
    isViewed,
}: TypeNotificationItem) {

    const icon = () => {
        if(source) return null

        switch(type) {
            case 'travel':
                return <IconTravel size={20}/>
            case 'security':
                return <IconSecurity size={20}/>
            case 'payments':
                return <IconTransferMoney size={20}/>
            default:
                return <IconTravel size={20}/>
        }
    }

    return (
        <View style={styles.item}>
            <Avatar 
                source={source ? source : undefined}
                icon={!source ? icon() : null}
                size={42}
                resizeMode="contain"
            />

            <View style={styles.content}>
                <View style={styles.top}>
                    <Text style={styles.title}>{title}</Text>
                    {!!isViewed && <View style={styles.dot}></View>}
                </View>

                {!!money && <Text style={styles.money}>{money}</Text>}

                <View style={styles.middle}>
                    <Text style={styles.textMiddle}>{text_top}</Text>
                    <Text style={styles.textMiddle}>{text_bottom}</Text>
                </View>
                
                <Bottom type={type} date={date}/>
            </View>
        </View>
    );
}
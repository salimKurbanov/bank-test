import NotificationItem from "@/entities/notification_item/NotificatioItem";
import { TypeNotificationItem } from "@/entities/notification_item/types/types";
import { SectionList, Text, View } from "react-native";
import { prepareNotificationList } from "./lib/prepareList";
import { styles } from "./style/style";

type Props = {
  list: TypeNotificationItem[];
};

export default function NotificationList({ list }: Props) {
  const sections = prepareNotificationList(list);

  return (
    <View style={styles.listContainer}>
      <SectionList
            sections={sections}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.title}>{title}</Text>
            )}
            renderSectionFooter={() => (
                <View style={styles.sectionDivider} />
            )}
            renderItem={({ item }) => (
            <NotificationItem
                id={item.id}
                title={item.title}
                money={item.money}
                text_top={item.text_top}
                text_bottom={item.text_bottom}
                source={item.source}
                date={item.date}
                type={item.type}
                isViewed={item.isViewed}
            />
        )}
      />
    </View>
  );
}

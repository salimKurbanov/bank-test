import { FlatList, SectionList, Text, View } from "react-native";
import { TypeTransactionList } from "./types/types";
import MessageCard from "@/entities/message_card/MessageCard";
import { prepareList } from "./lib/prepareList";
import { styles } from "./style/style";
import Title from "@/shared/ui/title/Title";

export default function List({ list }: TypeTransactionList) {
    const sections = prepareList(list);

    return (
        <View style={styles.listContainer}>
            <SectionList
                sections={sections}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
                renderSectionHeader={({ section: { title } }) => (
                    <Title style={{marginBottom: 6, marginTop: 20, }} label={title} />
                )}
                renderItem={({ item }) => (
                    <MessageCard
                        source={item.source}
                        price={item.price}
                        type={item.type}
                        date={item.date}
                        username={item.username}
                    />
                )}
            />
        </View>
    );
}
import IconMastreCard from "@/shared/icons/IconMastreCard";
import { ImageBackground, Text, View } from "react-native";
import { TypeCard } from "./types/types";
import { styles } from "./styles/style";
import { formatNumber } from "@/shared/lib/formatNumber";

export default function Card({ type, price, cardNumber }: TypeCard) {

    const bgImage = type === 'debit' ? require(`@/assets/images/cardDebit.jpg`) : require(`@/assets/images/cardVirtual.jpg`)

    return (
        <View style={styles.container}>
            <ImageBackground 
                imageStyle={[styles.image, styles[type]]}
                source={bgImage}
            >
                <View style={styles.content}>
                    <IconMastreCard size={26}/>

                    <Text style={styles.price}>${formatNumber(price)}</Text>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{type}</Text>
                        <Text style={styles.cardNumber}>•• {cardNumber}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}
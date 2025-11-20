import { Image, View } from "react-native";
import { TypeAvatar } from "./types/types";
import { styles } from "./style/styles";
import { useState } from "react";
import Skeleton from "./Skeleton";

export default function Avatar({ size, style, source, icon, ...rest }: TypeAvatar) {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const imageSource = typeof source === 'string' 
        ? { uri: source } 
        : source;

    return (
        <View 
            style={[styles.root, { width: size, height: size }, style]}
        >
            {icon 
            ? icon
            : <Image 
                {...rest}
                style={styles.image}
                source={imageSource}
                resizeMode='cover'
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              />
            }

            {!icon && isLoading && (
                <View style={styles.loader}>
                    <Skeleton width={size} height={size} />
                </View>
            )}
        </View>
    );
}
import { View, Animated, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Colors } from "@/shared/constants/colors";

interface Props {
    width: number,
    height: number,
    borderRadius?: number,
}

export default function Skeleton({ width, height, borderRadius = 12 }: Props) {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
        Animated.loop(
            Animated.timing(translateX, {
                toValue: width,
                duration: 1200,
                useNativeDriver: true,
            })
        ).start();
  }, []);

  return (
    <View style={[styles.container, { width, height, borderRadius }]}>
        <Animated.View
            style={[
                StyleSheet.absoluteFill,
                { transform: [{ translateX }] }
            ]}
        >
            <LinearGradient
                colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.15)", "rgba(255,255,255,0)"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.gradient}
            />
        </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bgSurface,
        overflow: "hidden",
    },
    gradient: {
        flex: 1,
    },
});

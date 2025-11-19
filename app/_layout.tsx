import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import { useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
} from '@expo-google-fonts/inter';

SplashScreen.preventAutoHideAsync(); 

export default function RootLayout() {

    const [loaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
    });

    useEffect(() => {
        if(loaded) {
            // Когда шрифт загружен скрываем экран загрузки
            SplashScreen.hide()
        }
    }, [loaded])

    if(!loaded) return null

    return (
        <Stack>
            <Stack.Screen name="home/index" options={{ title: "Home" }} />
            <Stack.Screen
                name="(modals)/notification"
                options={{ presentation: "modal", headerShown: false }}
            />
        </Stack>
    );
}

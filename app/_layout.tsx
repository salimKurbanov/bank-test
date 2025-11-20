import { SafeAreaView } from 'react-native-safe-area-context';
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import { useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
} from '@expo-google-fonts/inter';
import { Colors } from '@/shared/constants/colors';
import Header from '@/widgets/header/Header';
import NoticeHeader from '@/entities/notice_header/NoticeHeader';

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
            SplashScreen.hide()
        }
    }, [loaded])

    if(!loaded) return null

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bgScreen}}>
            <Stack>
                <Stack.Screen 
                    name="(tabs)"
                    options={{ 
                        header: () => <Header />,
                    }} 
                />
                <Stack.Screen
                    name="modals/notification"
                    options={{ 
                        presentation: "modal", 
                        header: () => <NoticeHeader />
                    }}
                />
            </Stack>
        </SafeAreaView>
    );
}

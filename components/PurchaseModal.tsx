import React, { useCallback, useRef } from 'react';
import { View, Image, StyleSheet, useColorScheme, Text, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { ThemedView } from './ThemedView';
import { LinearGradient } from 'expo-linear-gradient';


export const DownloadPicture = ({ onClose }: {
    onClose: () => void;
}) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const theme = useColorScheme() ?? 'light';

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <BottomSheet
            onClose={onClose}
            snapPoints={["60%"]}
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            handleIndicatorStyle={{ display: "none" }}
            handleStyle={{ display: "none" }}
        >
            <BottomSheetView style={styles.contentContainer}>
                <ThemedView style={{ flex: 1 }}>
                    <View style={styles.topbar}>
                        <Ionicons
                            onPress={onClose}
                            name={'close'}
                            size={24}
                            color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
                        />
                    </View>
                    <View style={styles.content}>
                        <View >
                            <Image source={require("../assets/SealWarning.png")} />
                        </View>

                        <Text style={styles.title}>
                            This membership only works on the app, not YouTube
                        </Text>

                        <Text style={styles.description}>
                            You will be able to watch all members-only content on the app and we will also put some content which is not on YouTube.
                        </Text>

                        <Text style={styles.additionalInfo}>
                            But buying the app membership doesn't make you a YouTube channel member.
                        </Text>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.backButton}
                            // onPress={onBack}
                            >
                                <Text style={styles.backButtonText}>Back</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonContainer}>
                                <LinearGradient
                                    colors={['#D1B85A', '#EFE288', '#D1B85A']}
                                    start={{ x: 0.7, y: 0 }}
                                    end={{ x: 0.3, y: 1 }}
                                    style={styles.gradient}
                                >
                                    <Text style={styles.buttonText}>Continue to purchase</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ThemedView>
            </BottomSheetView>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        borderRadius: 10,
        overflow: 'hidden',
      },
      gradient: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonText: {
        color: 'rgba(7, 7, 7, 1)',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'manrope',
      },
    content: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 16,
        lineHeight: 32,
    },
    description: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center',
        marginBottom: 8,
        lineHeight: 24,
    },
    additionalInfo: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center',
        marginBottom: 32,
        lineHeight: 24,
    },
    // buttonContainer: {
    //     width: '100%',
    //     gap: 12,
    // },
    backButton: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        alignItems: 'center',
    },
    backButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    continueButton: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#FFD700',
        alignItems: 'center',
    },
    continueButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600'
    },
    contentContainer: {
        flex: 1,
    },
    image: {
        height: "70%",
        borderRadius: 15,
    },
    topbar: {
        position: "absolute",
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%"
    },
    topbarInner: {
        display: "flex",
        flexDirection: "row",
    },
    textContainer: {
        width: "100%"
    },
    text: {
        paddingTop: 20,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "600"
    }
});
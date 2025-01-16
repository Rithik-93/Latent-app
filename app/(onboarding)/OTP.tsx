import { router } from 'expo-router';
import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    TextInput,
} from 'react-native';

const OTPVerification = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = useRef([]);

    const handleInputChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text.slice(-1);
        setOtp(newOtp);

        if (text && index < otp.length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputs.current[index - 1].focus();
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <View style={styles.imageContainer}>
                    <Image
                        source={require("../../assets/consent.png")}
                        style={styles.profileImage}
                    />
                    <View style={styles.speechBubble}>
                        <Text style={styles.speechText}>Kahin toh consent le rahe hai</Text>
                    </View>
                </View>

                <View style={styles.otpSection}>
                    <Text style={styles.headerText}>Enter your OTP</Text>
                    <TouchableOpacity>
                        <Text style={styles.resendText}>Resend?</Text>
                    </TouchableOpacity>

                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={(el) => (inputs.current[index] = el)}
                                style={[
                                    styles.otpInput,
                                    otp[index] && styles.otpInputActive,
                                ]}
                                keyboardType="numeric"
                                maxLength={1}
                                value={digit}
                                onChangeText={(text) => handleInputChange(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                            />
                        ))}
                    </View>
                </View>

                <TouchableOpacity
                    style={[
                        styles.nextButton,
                        otp.every((digit) => digit !== '') && styles.nextButtonActive,
                    ]}
                    onPress={() => {
                        router.push('/(onboarding)/Name')
                    }}
                >
                        <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    backButton: {
        padding: 8,
        marginTop: 8,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#FFD700',
    },
    speechBubble: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 15,
        marginTop: 0,
    },
    speechText: {
        color: '#000000',
        fontSize: 10,
    },
    otpSection: {
        alignItems: 'center',
        marginTop: 40,
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
    },
    resendText: {
        color: '#666666',
        fontSize: 16,
        marginTop: 8,
        textDecorationLine: 'underline',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 24,
        width: '100%',
        paddingInline: 10
    },
    otpInput: {
        width: 65,
        height: 46,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333333',
        backgroundColor: '#1A1A1A',
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    otpInputActive: {
        borderColor: '#F8D48D',
    },
    nextButton: {
        backgroundColor: '#666666',
        padding: 12,
        borderRadius: 8,
        marginTop: 32,
        marginHorizontal: 20,
    },
    nextButtonActive: {
        backgroundColor: 'white',
    },
    nextButtonText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default OTPVerification;

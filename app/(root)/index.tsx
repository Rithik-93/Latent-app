import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

const PhoneEmailInput = () => {
    const [input, setInput] = useState('');
    const [error, setError] = useState("");

    const validateInput = (input: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const phoneRegex = /^91\d{10}$/;

        if (emailRegex.test(input)) {
            setError("");
        }
        else if (input.length >= 1 && !input.startsWith("9") || input.length > 1 && !input.startsWith("91")) {
            setError("Phone number must start with 91");
        }
        else if (input.length > 1 && input.startsWith("9") && input[1] === "1" && phoneRegex.test(input)) {
            setError("");
        }
        else if (input.startsWith("9") && input.length <= 2) {
            setError("");
        }
        else if (input.length >= 2 && !input.startsWith("91")) {
            setError("Phone number must start with 91");
        }
        else {
            setError("");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <View style={styles.content}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require("../../assets/Singh.png")}
                            style={styles.profileImage}
                        />
                        <View style={styles.speechBubble}>
                            <Text style={styles.speechText}>Likho 98...</Text>
                        </View>
                    </View>

                    <View style={styles.inputSection}>
                        <Text style={styles.headerText}>
                            Enter your phone number or email,{' '}
                            <Text style={styles.subText}>we promise no spam.</Text>
                        </Text>

                        <TextInput
                            style={[styles.input, {
                                borderColor: error ? "red" : "#ccc",
                                borderWidth: error ? 1 : 0,
                            }]}
                            value={input}
                            onChangeText={(text) => {
                                setInput(text);
                                validateInput(text)
                            }}
                            placeholder="Phone number or email"
                            placeholderTextColor="#666666"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        {error ? <Text style={styles.errortext}>{error}</Text> : null}
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    keyboardView: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    imageContainer: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 40,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        backgroundColor: '#FFD700',
    },
    speechBubble: {
        position: 'absolute',
        bottom: -20,
        right: 20,
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 15,
        maxWidth: '80%',
    },
    speechText: {
        color: '#000000',
        fontSize: 14,
    },
    inputSection: {
        marginBottom: 20,
    },
    headerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
    },
    subText: {
        color: '#666666',
        fontWeight: '400',
    },
    input: {
        backgroundColor: '#1A1A1A',
        borderRadius: 8,
        borderColor: "red",
        padding: 16,
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },
    errortext: {
        color: "red",
        fontSize: 12,
        marginTop: 5
    },
    button: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        marginTop: 'auto',
        marginBottom: Platform.OS === 'ios' ? 20 : 40,
    },
    buttonText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default PhoneEmailInput;
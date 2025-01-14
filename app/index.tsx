import { Link } from 'expo-router';
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

const WelcomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/latent_intro.png")}
                        style={styles.profileImage}
                    />
                </View>

                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>
                        Welcome to{'\n'}India's Got Latent 👋
                    </Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Link href='/(root)' >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </Link>
                </TouchableOpacity>

                <Text style={styles.termsText}>
                    By starting the onboarding you agree to the{'\n'}
                    <Text style={styles.linkText}>Terms of service</Text>
                    {' & '}
                    <Text style={styles.linkText}>Privacy Policy</Text>
                </Text>
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
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 90,
        paddingHorizontal: 20,
    },
    imageContainer: {
        width: 250,
        height: 250,
        // marginTop: 10,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 150,
        backgroundColor: '#FFD700',
    },
    speechBubble: {
        position: 'absolute',
        bottom: -20,
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 15,
        maxWidth: '80%',
    },
    speechText: {
        color: '#000000',
        fontSize: 14,
    },
    welcomeContainer: {
        marginTop: 120,
    },
    welcomeText: {
        color: 'white',
        fontSize: 28,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 34,
    },
    button: {
        backgroundColor: '#FFD700',
        width: '100%',
        padding: 13,
        borderRadius: 8,
        marginTop: 'auto',
    },
    buttonText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    termsText: {
        color: '#666',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 25,
        lineHeight: 18,
    },
    linkText: {
        color: '#FFF',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default WelcomeScreen;
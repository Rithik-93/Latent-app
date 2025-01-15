import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';

const NameInput = ({ navigation }) => {
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/cheerup.png")}
            style={styles.profileImage}
          />
          <View style={styles.speechBubble}>
            <Text style={styles.speechText}>Make some noise for...?</Text>
          </View>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.headerText}>What should we refer you as?</Text>
          <Text style={styles.subtitleText}>Make some noise for...</Text>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Anw"
              placeholderTextColor="#666666"
              value={name}
              onChangeText={setName}
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
            />
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.nextButton,
            name.length > 0 && styles.nextButtonActive
          ]}
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
    padding: 8,
    borderRadius: 15,
    marginTop: 10,
  },
  speechText: {
    color: '#000000',
    fontSize: 14,
  },
  inputSection: {
    marginTop: 40,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    letterSpacing: -1,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: "manrope",
    lineHeight: 28.8
  },
  subtitleText: {
    color: '#666666',
    fontWeight: '500',
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: -1,
    fontFamily: "manrope"
  },
  inputContainer: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#F8D48D',
    borderRadius: 8,
    backgroundColor: '#1A1A1A',
  },
  input: {
    color: 'white',
    fontSize: 16,
    padding: 13,
    textAlign: 'left',
  },
  nextButton: {
    backgroundColor: '#FFFFFF',
    padding: 13,
    borderRadius: 8,
    marginTop: 32,
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  nextButtonActive: {
    opacity: 1,
  },
  nextButtonText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default NameInput;


import React from 'react';
import { Pressable, TextInput, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './styles';



export default function MessageInput() {
    const [message, setMessage] = useState("");
    const handlePress = () => {
        if (message) {
            console.warn(`Sending: ${message}`)
        } else {
            console.warn("Type something in the message box");
        }
        
    }

  return (
    <KeyboardAvoidingView 
        style={styles.root} 
        behavior={ Platform.OS === "ios" ? "padding" : "height" }
        keyboardVerticalOffset={100}
    >

        <View style={styles.inputContainer}>
            <SimpleLineIcons name="emotsmile" size={24} color="grey" style={styles.smileIcon} />
            <TextInput 
                style={styles.input} 
                placeholder="Write your message..." 
                value={message}
                onChangeText={prev => setMessage(prev)}
            />
            <Feather name="camera" size={24} color="grey" style={styles.featherIcon} />
            <MaterialCommunityIcons name='microphone-outline' size={24} color='grey' />
        </View>
        <Pressable onPress={handlePress} style={styles.buttonContainer}>
            {
                message 
                    ? <Ionicons name="send" size={20} color="white" /> 
                    : <AntDesign name="plus" size={24} color="white" />
            }
        </Pressable>

    </KeyboardAvoidingView>
  )
}



import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";



export default function Message ({ message }) {

    const messageId = "u1";
    const user = message.user.id === messageId;

    return (
        <View>
            {
                message ?
                <View style={[styles.container, user ? styles.meContainer : styles.otherContainer ]}>
                    <Text style={[styles.title, user ? styles.meTitle : styles.otherTitle]}>
                        {message.content}
                    </Text>
                </View> : null
            }
        </View>
    )
}



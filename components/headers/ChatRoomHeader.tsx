import React from "react";
import { useWindowDimensions, Text, Image, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style";



export const ChatRoomHeader = (props) => {
    const { width } = useWindowDimensions();
  
    return (
      <View style={{
        width: width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <View style={styles.textContainer}>
          <Image 
            source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg' }}
            style={styles.image} 
          />
          <Text style={styles.headerText}>{props.children}</Text>
        </View>
        <View style={styles.icons}>
          <Feather name="camera" size={22} color="grey" />
          <Feather name="edit-2" size={22} color="grey" />
        </View>
      </View>
    )
  }


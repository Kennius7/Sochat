import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';


export const ChatRoomItem = ({ chatRoomData }) => {
  const users = chatRoomData.users[1];
  const lastMsgData = chatRoomData.lastMessage;
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate("ChatRoomScreen", { id: chatRoomData.id });


  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: users.imageUri }}
        style={styles.image} 
      />
      {
        chatRoomData.newMessage ? 
        <View style={styles.badgeContainer}>
          <Text style={styles.badge}>
            {chatRoomData.newMessage}
          </Text>
        </View> : null
      }
      <Pressable onPress={handlePress} style={styles.textCol}>
        <View style={styles.row}>
          <Text style={styles.name}>{users.name}</Text>
          <Text style={styles.time}>{lastMsgData.createdAt}</Text>
        </View>
        <Text style={styles.message} numberOfLines={1}>
          {lastMsgData.content}
        </Text>
      </Pressable>
    </View>
  )
}




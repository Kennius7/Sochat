import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Message from '../components/message/Messages';
import messageData from "../constants/Chats";
import MessageInput from '../components/messageInput/MessageInput';
import chatRoomData from "../constants/ChatRooms";
import React from 'react';



export default function ChatRoomScreen() {
 const route = useRoute();
 const navigation = useNavigation();
 navigation.setOptions({title: chatRoomData[route.params?.id - 1].users[1].name});

 console.log(`Displaying route: ${route.params?.id}`)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={messageData.messages} 
        renderItem={({item}) => <Message message={item}/>}
        inverted
      />
      <MessageInput/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

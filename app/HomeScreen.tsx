import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ChatRoomItem } from "../components/ChatRoomItem/ChatRoomItem";
import chatRoomData from "../constants/ChatRooms";


export default function HomeScreen() {
  return (
   <View style={styles.page}>
    <FlatList 
      data={chatRoomData} 
      renderItem={({item}) => <ChatRoomItem chatRoomData={item} />} 
      showsVerticalScrollIndicator={false} 
    />
   </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  }
})


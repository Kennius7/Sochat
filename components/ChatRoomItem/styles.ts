import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "flex-start",
      padding: 10,
    },
    textCol: {
      flex: 1,
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    name: {
      fontSize: 16,
      fontWeight: "bold",
    },
    time: {
      fontSize: 14,
      fontWeight: '300',
    },
    message: {
      fontSize: 15,
      fontWeight: '300',
    },
    image: {
      width: 55,
      height: 55,
      borderRadius: 30,
      marginRight: 10,
      position: 'relative',
    },
    badgeContainer: {
      backgroundColor: '#1cdba2',
      width: 20,
      height: 20,
      borderRadius: 10,
      borderColor: 'white',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 10,
      left: 50,
    },
    badge: {
      fontSize: 12,
      color: 'white',
    },
  });




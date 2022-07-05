import React from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

const App = () => {

  const onPressFunction = () => {

  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>TO~DO~APP</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="what do you want to do? type here..."
          placeholderTextColor={"#fff8dc"}
        />
        <TouchableOpacity style={styles.button} onPress={onPressFunction}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        <Text style={styles.listHeading}>~To Do Items~</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },

    headingView: {
      flex: 1 / 15,
      backgroundColor: "#0000ff",
      marginLeft: 3,
      marginRight: 3,
      borderWidth: 2,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      justifyContent: "center",
      alignItems: "center",

    },
    headingText: {
      fontSize: 30,
      color: "#fff8dc"
    },

    inputView: {
      flex: 1 / 8,
      backgroundColor: "#0000ff",
      margin: 3,
      borderRadius: 15,
      alignItems: "center",
      flexDirection: "row",
    },

    inputText: {
      borderWidth: 2,
      borderColor: "#fff8dc",
      height: 40,
      width: 300,
      marginLeft: 3,
      color: "#fff8dc",

    },

    button: {
      marginLeft: 15,
      backgroundColor: "#00ffff",
      height: 50,
      width: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
    },

    buttonText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#0000ff"
    },

    listView: {
      flex: 1,
      backgroundColor: "#0000ff",
      margin: 3,
      borderRadius: 15,
      alignItems: "center"
    },

    listHeading: {
      color: "#fff8dc",
      fontSize: 22,
      fontStyle: "italic",
      textDecorationLine: 'underline'
    },

  }
)

export default App;


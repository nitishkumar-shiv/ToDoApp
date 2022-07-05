import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>TO~DO~APP</Text>
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
    }
  }
)

export default App;


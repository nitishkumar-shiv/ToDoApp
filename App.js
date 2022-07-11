import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View, TextInput,
  TouchableOpacity,
  FlatList, Image
} from "react-native";

const App = () => {
  const [todolist, setTodoList] = useState([]);
  const [text, settext] = useState('');
  const [idd, setid] = useState(0);
  const [istoggle, settoggle] = useState(true);
  const [editid, seteditid] = useState(null);

  const changeHandler = (val) => {
    settext(val);
  }

  const onPressAdd = () => {

    if (!istoggle) {
      const newtodo = todolist.map((item) => {
        if (item.id == editid) {
          return { ...item, name: text };
        }
        return item;
      }

      );
      settoggle(true);
      settext('');
      seteditid(null);

      setTodoList(newtodo)
    }
    else {
      setTodoList([...todolist, { name: text, id: idd, iscompleted: false }]);
      setid(idd + 1);
      settext('');
      console.log(text);
    }
  }

  const deleteItem = (id) => {
    setTodoList((todolist) => {
      return todolist.filter(item => item.id != id);
    });
  }

  const editItem = (id) => {
    let newEditItem = todolist.find((item) => {
      return item.id === id
    });
    console.log(newEditItem);
    settoggle(false);
    settext(newEditItem.name);
    seteditid(id);
  }

  const completetodo = (id) => {
    const newArray = todolist.map((item) => {
      if (item.id == id) {
        return { ...item, iscompleted: true };
      }
      else {
        return item;
      }
    })
    setTodoList(newArray);
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.headingView}>
        <Image
          style={styles.images}
          source={require('./assets/rently-icon.png')}
        />
        <Text style={styles.headingText}>TO~DO~APP</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="what do you want to do? type here..."
          placeholderTextColor={"#fff8dc"}
          value={text}
          onChangeText={changeHandler}
        />

        {istoggle ?
          <TouchableOpacity style={styles.button} onPress={onPressAdd}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity> :
          <TouchableOpacity style={styles.button} onPress={onPressAdd}>
            <Image
              style={styles.images}
              source={require('./assets/edit-icon.png')}
            />
          </TouchableOpacity>
        }
      </View>
      <View style={styles.listView}>
        <Text style={styles.listHeading}>~To Do Items~</Text>
        <FlatList
          data={todolist}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.flatlistcontainer}>
              <View>
                <TouchableOpacity onPress={() => completetodo(item.id)}>
                  <Image
                    style={styles.images}
                    source={require('./assets/tic-icon.jpg')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.flatlistView}>
                <Text style={{
                  textDecorationLine: item.iscompleted ? 'line-through' : 'none',
                  textDecorationStyle: 'solid'
                }}>{item.name}</Text>
              </View>
              <TouchableOpacity onPress={() => editItem(item.id)}>
                <Image
                  style={styles.images}
                  source={require('./assets/edit-icon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteItem(item.id)}>
                <Image
                  style={styles.images}
                  source={require('./assets/sign-delete-icon.png')}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },

    headingView: {
      flex: 1 / 15,
      flexDirection: "row",
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

    flatlistView: {
      backgroundColor: "#fffaf0",
      height: 50,
      width: 260,
      margin: 5,
      justifyContent: "center"


    },
    // flatlistText: {
    //   fontSize: 25,
    //   color: "#ff1493",
    //   textDecorationLine: item.iscompleted ? 'line-through' : 'none',
    //   textDecorationStyle: 'solid'

    // },
    images: {
      height: 35,
      width: 35,

    },
    flatlistcontainer: {
      flexDirection: "row",
      backgroundColor: "#fffaf0",
      borderRadius: 20,
      marginBottom: 5,
      alignItems: "center"
    }

  }
)
export default App;
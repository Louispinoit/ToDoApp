import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

function TachesItem(props) {
  const [tache, setTache] = useState("");

  function tacheInputHandler(tache) {
    setTache(tache);
  }

  function ajouterTacheHandler() {
    props.onAjouterTache(tache);
    setTache("");
  }

  return (
    <>
      <Modal visible={props.showModal} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/goal.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Tes tâches"
            value={tache}
            onChangeText={tacheInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Annuler"
                color="#f31282"
                onPress={props.onCancel}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Ajouter"
                onPress={ajouterTacheHandler}
                color="#b180f0"
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default TachesItem;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

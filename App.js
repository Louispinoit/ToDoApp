import React, { useState } from "react";
import { StyleSheet, FlatList, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import TachesItem from "./components/TachesItem";
import TachesInput from "./components/TachesInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [taches, setTaches] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function ajouterTacheHandler(tache) {
    if (tache.length === 0) {
      alert("Veuillez entrer une tâche");
      return;
    } else {
      setTaches((tacheAjoutée) => [
        ...tacheAjoutée,
        { text: tache, id: Math.random().toString() },
      ]);
    }
    endAddGoalHandler();
  }

  function supprimerTacheHandler(id) {
    setTaches((tacheSupprimée) => {
      return tacheSupprimée.filter((tache) => tache.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Ajouter une tâche"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <TachesInput
          showModal={modalIsVisible}
          onAjouterTache={ajouterTacheHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={taches}
            renderItem={(itemData) => {
              return (
                <TachesItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={supprimerTacheHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
  },
});

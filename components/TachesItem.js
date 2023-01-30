import { StyleSheet, View, Text, Pressable } from "react-native";

function TachesItem(props) {
  return (
    <View style={styles.tacheContainer}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.tacheText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TachesItem;

const styles = StyleSheet.create({
  tacheContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  tacheText: {
    color: "#ffffff",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

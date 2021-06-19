import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <Button 
      title="Go to Components Demo"
      onPress={() => props.navigation.navigate('List')} 
      />
      <TouchableOpacity onPress={() => console.log('Touchable')} >
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button 
      title="Go to Image Screen"
      onPress={() => props.navigation.navigate('ImageScreen')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

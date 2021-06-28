import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ReduxScreen = () => {
    const [counter, setCounter] = useState(0);

    const numbers = [1,2,3];
    const added = [...numbers, 4];
    console.log(added);

    const removed = numbers.filter(n => n !== 2);
    console.log(removed);

    const updated = numbers.map(n => n===2 ? 20 : n);
    console.log(updated);
    
    return (
        <View>
            <Button title="Increate" onPress={() => {
                // counter++;
                setCounter(counter+1);
                console.log(counter);
                }}/>
            <Button title="Decrease" onPress={() => {
                // counter--;
                setCounter(counter-1);
                console.log(counter);
                }}/>
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ReduxScreen;
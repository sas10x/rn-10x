import React from 'react';
import { View, Text, StyleSheet, FlatList }   from 'react-native';

// const ComponentsScreen = function () {
const ListScreen = () => {
    const friends = [
        {name: 'Friend1'},
        {name: 'Friend7'},
        {name: 'Friend3'},
        {name: 'Friend4'},
        {name: 'Friend5'},
        {name: 'Friend6'}
    ]
    return <FlatList keyExtractor={(friend) => friend.name} data={friends} renderItem={({item}) => {
        return <Text>{item.name}</Text>
    // return <FlatList data={friends} renderItem={(element) => {
        // element === { item: { name: 'Friend1' }, index:0 }
    }} />
};

const styles = StyleSheet.create({

})

export default ListScreen;
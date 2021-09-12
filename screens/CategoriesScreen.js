import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { CATEGORIES } from '../data/categories';
import Griditem from '../components/GridItem';

export default function CategoriesScreen( { navigation, route }) {
    
    //creo funcion para el renderItem y poder pasar props al componente
    const renderGridItem = data => <Griditem item={data.item} onSeleted={handleSelectedCategory}/>
    //creo este manejador para envar los datos de la categoria.
    const handleSelectedCategory = (item) => {
        navigation.navigate('Products',{
            categoryID: item.id,
            name: item.title,
        })
    }
    return (
        <FlatList 
            horizontal={true}
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
        />
    );
}

const styles = StyleSheet.create({
    
});
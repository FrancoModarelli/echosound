import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ProductDetail from '../components/ProductDetail';
import { PRODUCTS } from '../data/items'

export default function ProductDetailScreen( { route } ) {

    //funcion para traer los detalles del producto por ID
    const products = PRODUCTS.find(prod => prod.id === route.params.categoryID);

    return (
        <ProductDetail detail={products} />
    );
}

const styles = StyleSheet.create({

});
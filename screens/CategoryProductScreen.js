import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ProductItem from '../components/ProductItem'
import { PRODUCTS } from '../data/items'

export default function CategoryProductScreen( {navigation, route } ) {

    //funcion para traer los productos de cada categoria
    const products = PRODUCTS.filter(prod => prod.category === route.params.categoryID);

    const renderItemProduct = ({ item }) => <ProductItem item={item} onSeleted={handleSelected}/>;
    
    const handleSelected = (item) => {
        navigation.navigate('Detail',{
            categoryID: item.id,
        })
    }

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={renderItemProduct}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
ButtonPage:{
    padding: 10,
    backgroundColor: '#DF2122',
    alignItems: 'center',
    fontFamily: 'PoppinsBold'
}
});
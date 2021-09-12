import React from "react";
import { View, Text, TouchableOpacity, Platform, StyleSheet, Image } from "react-native";
import colors from '../constants/colors'

const ProductItem = ({ item, onSeleted }) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity
                style={styles.container}
                onPress={() => onSeleted(item)}>
                <View style={styles.productsContainer}>
                    <Image style={styles.productsImg} source={item.img}/>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.price}>$ {item.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 15,
        width: 250,
        height: 200,
        backgroundColor: colors.backG,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:colors.borders,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
        padding: 8,
    },
    title: {
        fontFamily: 'PoppinsBold',
        paddingRight: 10,
        fontSize: 20,
        textAlign:'center'

    },
    productsImg:{
        width:200,
        height:100
    },
    productsContainer:{
        flexDirection: 'column',
        alignItems:'center',
    },
    price: {
        fontFamily: 'PoppinsBold',
        paddingRight: 10,
        fontSize: 15,
    },

});


export default ProductItem;
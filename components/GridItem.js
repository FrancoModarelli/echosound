import React from "react";
import { View, Text, TouchableOpacity, Platform, StyleSheet, Image } from "react-native";
import colors from '../constants/colors'

const Griditem = ({ item, onSeleted }) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity
                style={styles.container}
                onPress={() => onSeleted(item)}>
                <View style={styles.categoriesContainer}>
                    <Image style={styles.categoriesImg} source={item.img}/>
                    <Text style={styles.title}>{item.title}</Text>
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
        height: 300,
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
        alignItems:'flex-end',
        fontSize: 25,
    },
    categoriesImg:{
        width:100,
        height:300
    },
    categoriesContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingTop: 10,
    }
});


export default Griditem;
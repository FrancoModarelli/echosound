import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import colors from '../constants/colors'
import { useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";

const ProductDetail = ({ detail }) => {

    const dispatch = useDispatch();

    const handlerAddItemCart = () => {
        dispatch(addItem(detail));
    }



    return (
        <View style={styles.gridItem}>
            <View style={styles.detailContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.productsImg} source={detail.img}/>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.title}>{detail.name}</Text>
                    <View>
                        <Text style={styles.year}>Año: {detail.year}</Text>
                        <Text style={styles.detalle}>Detalles:</Text>
                        <Text style={styles.descrip}>{detail.description}</Text>
                        <Text style={styles.price}>$ {detail.price}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handlerAddItemCart}>
                            <Text style={styles.buttonText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>    
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    detailContainer: {
        flex: 1,
        padding: 5,
    },
    dataContainer:{
        marginLeft: 10,
        marginRight: 10,
        borderRadius:20,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:colors.borders,
        backgroundColor: colors.backG,
    },
    imageContainer:{
        paddingTop: 30,
        paddingBottom: 50,
    },
    title: {
        fontFamily: 'PoppinsBold',
        fontSize: 18,
        paddingTop: 20,
        paddingBottom: 40,
        textAlign:'center',
        color:colors.title,
    },
    year:{
        fontSize: 15,
        fontFamily: 'PoppinsBold',
        paddingBottom: 20,
        paddingLeft: 10,
        color: colors.title
    },
    descrip:{
        fontFamily: 'PoppinsRegular',
        textAlign:'justify',
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10,
    },
    productsImg:{
        width:400,
        height:200,
    },
    price: {
        fontFamily: 'PoppinsBold',
        paddingBottom: 20,
        paddingTop:20,
        fontSize: 25,
        textAlign:'center',
        color: colors.title,
    },
    detalle:{
        fontSize:16,
        paddingLeft: 10,
        fontFamily: 'PoppinsBold'

    },
    buttonContainer:{
        paddingBottom: 20,
    },
    button:{
        backgroundColor: colors.warning,
        alignItems:'center',
        marginLeft: 120,
        marginRight: 120,
        borderRadius: 20,
    },
    buttonText:{
        fontFamily: 'PoppinsBold',
        color:colors.detail,
        fontSize: 18,
        paddingBottom:5,
        paddingTop: 5,
    },

});


export default ProductDetail;
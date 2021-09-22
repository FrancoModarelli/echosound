import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { confirmCart, removeItem } from '../store/actions/cart.action'
import CartItem from '../components/CartItem'

const CartScreen = () => {
    
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);
    
    const handlerDeleteItem = (id) => dispatch(removeItem(id));
    const handlerConfirmCart = () => dispatch(confirmCart(items));

    const renderItem = (data) => {
        <CartItem item={data.item} onDelete={handlerDeleteItem} />
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items} 
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
                    <Text>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 12,
        backgroundColor: '#fff'
    },
    list:{
        flex:1,
    },
    footer:{
        padding: 12,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    total:{
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
    text:{
        fontSize: 24,
        fontFamily: 'PoppinsRegular',
        padding: 8,
    }
})

export default CartScreen

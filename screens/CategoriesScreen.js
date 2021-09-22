import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Griditem from '../components/GridItem';
import { selectCategory } from '../store/actions/category.action';
import { FAB } from 'react-native-element'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/colors'
import CartScreen from './CartScreen';

const CategoriesScreen = ( { navigation }) => {
    
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories.list);
    
    //creo este manejador para envar los datos de la categoria.
    const handleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('Products',{
            name: item.title,
        });
    }

    //creo funcion para el renderItem y poder pasar props al componente
    const renderGridItem = ({ item }) => <Griditem item={item} onSeleted={handleSelectedCategory}/>

    return (
        <View style={styles.container}>
            <FlatList 
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            horizontal={true}
            />
            <FAB 
                icon={ <Ionicons name='cart' size={24} color='white'/> }
                placement='right'
                color={COLORS.warning}
                onPress={() => navigation.navigate(CartScreen)}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.backG,
    }
})

export default CategoriesScreen
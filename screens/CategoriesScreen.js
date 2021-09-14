import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Griditem from '../components/GridItem';
import { selectCategory } from '../store/actions/category.action';

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
        <FlatList 
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            horizontal={true}
        />
    );
}

export default CategoriesScreen
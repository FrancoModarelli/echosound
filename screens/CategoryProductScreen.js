import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../components/ProductItem'
import { filterProduct, selectProduct } from '../store/actions/product.action';

const CategoryProductScreen = ( {navigation} ) => {
    
    //Utilizacion de los componentes de redux para filtrar producto.
    const dispatch = useDispatch();
    const categoryID = useSelector(state => state.categories.selectedID);
    const products = useSelector(state => state.products.filteredProduct);

    useEffect(() => {
        dispatch(filterProduct(categoryID))
        console.log(categoryID)
    }, [categoryID])

    const handleSelected = (item) => {
        dispatch(selectProduct(item.id))
        navigation.navigate('Detail')
    }

    //const para que el componente reciba datos
    const renderItemProduct = ({ item }) => <ProductItem item={item} onSeleted={handleSelected}/>;

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={renderItemProduct}
            numColumns={2}
        />
    );
}

export default CategoryProductScreen
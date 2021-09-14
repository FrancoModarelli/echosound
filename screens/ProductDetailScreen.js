import React from 'react';
import ProductDetail from '../components/ProductDetail';
import { View } from 'react-native'
import { useSelector} from 'react-redux';


const ProductDetailScreen = () => {

    //Utilizacion de los componentes de redux para filtrar producto.
    const productsID = useSelector(state => state.products.selectedID);
    const products = useSelector(state => state.products.list);
    const product = products.find(item => item.id === productsID);

    return (
        
        <View>
            <ProductDetail detail={product} />
        </View>
        
    );
}

export default ProductDetailScreen
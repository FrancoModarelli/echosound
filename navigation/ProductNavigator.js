import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryProductScreen from '../screens/CategoryProductScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import colors from '../constants/colors'

const Stack = createNativeStackNavigator();

const ProductNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{
            headerStyle:{
                backgroundColor: Platform.OS === 'ios' ? colors.backG : colors.backGalt
            },
            headerTintColor: Platform.OS === 'ios' ? colors.title : colors.titleAlt,
            headerTitleStyle: {
                fontWeight:'900',
                fontFamily: 'PoppinsBold'
                }
            }
        }
        
        >
            <Stack.Screen name='Home' options={{ title:'Categorias' }} component={CategoriesScreen} />
            <Stack.Screen name='Products' options={({ route })=> ({ title: route.params.name })} component={CategoryProductScreen} />
            <Stack.Screen name='Detail' options={{ title:'Detalles del Producto' }} component={ProductDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default ProductNavigator 
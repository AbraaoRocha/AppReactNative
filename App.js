import React, {useState, useEffect} from 'react';
import {Text, View, Button, Alert } from 'react-native';
import Page from './views/Page';
import {css} from './assets/css/css'

export default function App() {
  
  const [product,setProduct] = useState('qualquer');
  
  const [quantity,setQuantity] = useState(0);

  useEffect(()=>{
    
    if(quantity>0){
      
      Alert.alert('Novo Produto Adicionado')
    
    }

  }, [quantity]);

  const props = {

    empresa: 'AR Sofwares',
    
    name: 'Abraão Rocha',

    produto: product,

    quantidade: quantity
  
  };
  
  return (
    
    <View style={css.container}>
      
      <Text style={css.textPage} > {product} {quantity} </Text>
      
      <Page {... props} />

      <Button title='Adicionar Produto' onPress={()=>{setQuantity(quantity+1)}}/>

    </View>
  
  );

};
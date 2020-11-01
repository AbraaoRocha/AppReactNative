import React from 'react';
import { View, Text } from 'react-native';
import { css } from '../assets/css/css';

export default function Page(props){
    
  return (
      
    <View style = {css.textPage}>
        
      <Text> O nome da empresa é: {props.empresa}</Text>
      
      <Text> E seu fundador se chama: {props.name}</Text>
      
      <Text> Que comprou o produto: {props.produto}</Text>
      
      <Text> Nesta quantidade: {props.quantidade}</Text>
    
    </View>
  
  );

  }
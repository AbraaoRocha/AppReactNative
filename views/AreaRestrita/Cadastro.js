import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import {css} from '../../assets/css/css'
import config from '../../config/config.json';

export default function Cadastro({navigation}) {
    
    const address = config.address;
    const [code,setCode] = useState(null);
    const [userId,setUserId] = useState(null);
    const [product,setProduct] = useState(null);
    const [response,setResponse] = useState(null);

    useEffect(()=>{
        getUser();
    },[]); 

    useEffect(()=>{
        randomCode();
    },[]);

    //Pegar o id do usuário
    async function getUser()
    {
        let response=await AsyncStorage.getItem('userData');
        let json=JSON.parse(response);
        setUserId(json.id);
    }

    //Gerar um código randômico
    async function randomCode()
    {
        let result = '';
        let length=20;
        let chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        setCode(result);
    }

    //Envio do Formulário
    async function sendForm(){
        let response = await fetch(config.urlRoot +'create',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                code: code,
                product: product,
                local: address
            })
        });
    }

    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Cadastro' navigation={navigation} />
            <View style={css.login__input}>
                <TextInput
                        placeholder='Nome do Produto:'
                        onChangeText={text=>setProduct(text)}
                />
            </View>

            <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}
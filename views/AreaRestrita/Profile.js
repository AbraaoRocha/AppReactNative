import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import {View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import {css} from '../../assets/css/css';
import config from '../../config/config.json';

export default function Profile({navigation}) {
    
    const[idUser,setIdUser] = useState('');
    const[senhaAntiga,setSenhaAntiga] = useState('');
    const[novaSenha,setNovaSenha] = useState('');
    const[confNovaSenha,setConfNovaSenha] = useState('');
    const[msg,setMsg] = useState('');
    
    useEffect(()=>{
        async function getIdUser(){
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            setIdUser(json.id)
        }
            getIdUser();
    });

    async function sendForm(){
        let response = await fetch(`${config.urlRoot}verifyPass`,{
            method:"POST",
            body:JSON.stringify({
                id : idUser,
                senhaAntiga : senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
            }
            ),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }       
        });
            let json = await response.json()
            setMsg(json);
    }
    
    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Perfil' navigation={navigation} />

            <View>
                <Text>{msg}</Text>
                <TextInput placeholder='Senha Antiga' onChangeText={text =>setSenhaAntiga(text)} />
                <TextInput placeholder='Nova Senha' onChangeText={text =>setNovaSenha(text)} />
                <TextInput placeholder='Confirmação da Nova Senha' onChangeText={text =>setConfNovaSenha(text)} />

                <TouchableOpacity onPress={()=>sendForm()}>
                    <Text>Trocar</Text>
                </TouchableOpacity>

            </View>
        
        </View>
    );
}
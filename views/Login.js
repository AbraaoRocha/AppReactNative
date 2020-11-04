import React, {useState,useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, View, Platform} from 'react-native';
import {css} from '../assets/css/css';
import AsyncStorage from '@react-native-community/async-storage';
import config from './../config/config.json';

export default function Login({navigation})
{
  const [display, setDisplay]=useState('none');
  const [user, setUser]=useState('');
  const [password, setPassword]=useState('');
  const [login, setLogin]=useState('');


  async function sendForm(){
        let response= await 
        fetch(`${config.urlRoot}login`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });
        let json=await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },5000);
            }else{
                await AsyncStorage.setItem('userData', JSON.stringify(json));
                navigation.navigate('AreaRestrita');
        }
    }


    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            
            <View style={css.login__logomarca}>       
                  <View>
                    <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>
                  
                  </View>
            </View>

            <View style={css.login__form}>
                
                <TextInput style={css.login__input} placeholder='Usuário:' onChangeText={text=>setUser(text)}/>

                <TextInput style={css.login__input} placeholder='Senha:' secureTextEntry={true} onChangeText={text=>setPassword(text)} />
                
                <TouchableOpacity title ='Entrar' style={css.login__button} onPress={()=>sendForm()}>
                   
                   <Text style={css.login__buttonText}>Entrar</Text>

                </TouchableOpacity>
            
            </View>
        
        </KeyboardAvoidingView>
    );
}
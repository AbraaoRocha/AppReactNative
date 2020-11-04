import React, {useEffect} from 'react';
import {View,  Button, BackHandler, Alert} from 'react-native';
import {css} from '../assets/css/css';


export default function Home({navigation}) {
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
                {
                    text: "Não",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    BackHandler.exitApp();
                    }
                }
            ]);
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);


    return (
        <View style={css.container2} >
            <Button title='Login'
            style = {css.button__home}
            onPress = {()=>navigation.navigate('Login', {id:404})}
            />
            <Button title='Rastreio'
            style = {css.button__home}
            onPress = {()=>navigation.navigate('Rastreio', {id:404})}
            />

        </View>
    );
}
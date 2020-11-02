import React from 'react';
import {View,  Button} from 'react-native';
import {css} from '../assets/css/css';

export default function Home({navigation}) {

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
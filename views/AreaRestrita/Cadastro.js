import React from 'react';
import { View} from 'react-native';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import {css} from '../../assets/css/css'

export default function Cadastro({navigation}) {
    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Cadastro' navigation={navigation} />
        </View>
    );
}
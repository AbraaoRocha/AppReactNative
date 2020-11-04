import React from 'react';
import { View} from 'react-native';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import {css} from '../../assets/css/css'

export default function Profile({navigation}) {
    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Perfil' navigation={navigation} />
        </View>
    );
}
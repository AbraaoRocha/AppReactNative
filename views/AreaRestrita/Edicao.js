import React, {useState,useEffect} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import { BarCodeScanner } from 'expo-barcode-scanner';
import {css} from '../../assets/css/css';
import config from '../../config/config';

export default function Edicao({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [displayQR, setDisplayQR] = useState('flex');
    const [displayForm, setDisplayForm] = useState('none');
    const [code, setCode] = useState(null);
    const [product, setProduct] = useState(null);
    const [localization, setLocalization] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    //Leitura do código QR
    async function handleBarCodeScanned({ type, data }){
        setScanned(true);
        setDisplayQR('none');
        setDisplayForm('flex');
        setCode(data);
        await searchProduct(data);
    }

    async function searchProduct(codigo)
{
    let response=await fetch(config.urlRoot+'searchProduct',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: codigo
        })
    });
    let json=await response.json();
    setProduct(json.Products[0].name);
}

    async function sendForm() {

    }

    return (
        <View>
            <MenuAreaRestrita title='Edição' navigation={navigation} />

            <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : value=>handleBarCodeScanned(value)}
                style={css.qr__code(displayQR)}
            />

            <View style={css.qr__form(displayForm)}>
                <Text>Código do Produto: {code}</Text>

                <View style={css.login__input}>
                    <TextInput
                            placeholder='Nome do Produto:'
                            onChangeText={text=>setProduct(text)}
                            value={product}
                    />
                </View>

                <View style={css.login__input}>
                    <TextInput
                            placeholder='Localização do Produto:'
                            onChangeText={text=>setLocalization(text)}
                        value={localization}
                    />
                </View>

                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
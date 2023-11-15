import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario = () => {
    const [ animacionBoton ] = useState(new Animated.Value(1));

    const animacionEntrada = () => {
        console.log('Entrada');
    }

    const animacionSalida = () => {
        console.log('Salida');
    }

    return (
        <View style={styles.formulario}>
            <View>
                <TextInput 
                    style={styles.input}
                    placeholder="Ciudad"
                    placeholderTextColor="#666"
                />
            </View>

            <View>
                <Picker
                    style={{ height: 120, backgroundColor: '#FFF' }}
                >
                    <Picker.Item label="-- Seleccione un País --" value="" />
                    <Picker.Item label="Estados Unidos" value="US" />
                    <Picker.Item label="México" value="MX" />
                    <Picker.Item label="Argentina" value="AR" />
                    <Picker.Item label="Colombia" value="CO" />
                    <Picker.Item label="Costa Rica" value="CR" />
                    <Picker.Item label="España" value="ES" />
                    <Picker.Item label="Perú" value="PE" />
                </Picker>
            </View>

            <TouchableWithoutFeedback
                onPressIn={ () => animacionEntrada() }
                onPressOut={ () => animacionSalida() }
            >
                <View style={styles.btnBuscar}>
                    <Text style={styles.textoBuscar}>Buscar Clima</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
};

const styles = StyleSheet.create
(
    {
        input: {
            padding: 10,
            height: 50,
            backgroundColor: '#FFF',
            fontSize: 20,
            marginBottom: 20,
            textAlign: 'center',
        },

        btnBuscar: {
            marginTop: 50,
            backgroundColor: '#000',
            padding: 10,
            justifyContent: 'center',
        },

        textoBuscar: {
            color: '#FFF',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: 18,
        }, 
    }
);

export default Formulario

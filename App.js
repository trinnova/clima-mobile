import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

const App = () => {

  const [ busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  });

  const [ consultar, guardarConsultar ] = useState(false);

  const [ resultado, guardarResultado ] = useState({});

  const { ciudad, pais } = busqueda;

  useEffect( () => {
    const consultarClima = async () => {

      if (consultar)
      {
        const appId = 'b3b0e54050ad6076822c45e95401fcf6';
        /*
          https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

          La temperatura tambien está disponible en unidades Fahrenheit, Celsius y Kelvin.
          Para temperatura en grados Fahrenheit use unidades = imperial
          Para la temperatura en grados Celsius = metric
          La temperatura en Kelvin se usa de forma predeterminada, no es necesario usar el parámetro de unidades en la llamada API
          http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&units=metric&appid=${apiKey}
        */
        
          const url = `http;//api.openwathermap.org/data/2.5/weather?q=${ciudad}, ${pais}&appid=${appId}`;

        try
        {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

          guardarResultado(resultado);
          guardarConsultar(false);
        }
        catch (error)
        {
          mostrarAlerta();
        }
        
      }

    }

    consultarClima();

  }, [consultar]);

  const mostrarAlerta = () => {
    Alert.alert
    (
        'Error',
        'No se encontró la Ciudad, intenta con otra',
        [
            { text: 'Ok'}
        ]
    )
  };

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={ () => ocultarTeclado() } >
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Clima 
              resultado={resultado}
            />

            <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create
(
  {
    app: {
      flex: 1,
      backgroundColor: 'rgb(71, 149, 212)',
      justifyContent: 'center',
    },

    contenido: {
      marginHorizontal: '2.5%',
    },

  }
);

export default App;

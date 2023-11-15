import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Formulario from './components/Formulario';

const App = () => {

  const [ busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  });

  const [ consultar, guardarConsultar ] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect( () => {
      if (consultar)
      {
        const appId = 'b3b0e54050ad6076822c45e95401fcf6';

        // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        const url = `api.openwathermap.org/data/2.5/weather?q=${ciudad}, ${pais}&appid=${appId}`;

        console.log(url);
      }
  }, [consultar]);

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={ () => ocultarTeclado() } >
        <View style={styles.app}>
          <View style={styles.contenido}>
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

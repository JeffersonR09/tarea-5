import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Button, StyleSheet,TextInput, Text, View} from 'react-native';

import { Cliente } from './models/cliente';
import { Journal } from './models/journal';

export default function App(){
  const [fecha, setFecha] = useState('2022-07-29');
  const [nombre, setNombre] = useState('');
  const [apellido, setLastNombre] = useState('');
  const [consepto, setConsep] = useState('');
  const [codigo, setCode] = useState('');
  const [cuenta, setCuenta] = useState('');
  const [debito, setDebit] = useState('');
  const [credito, setCredit] = useState('');

  const saveDate = (text: string) => {
    //validar fecha
    if (text.length >= 10 && text !== '2022-07-29'){
      alert ('error en la fecha')
      return
    }

    if(text.length >= 10){
      setFecha(text);
      console.log(fecha);
      
    }
  };
   
  const saveName = (text: string) =>{
    setNombre(text)
    
  }

  const saveLastName = (text: string) =>{
    setLastNombre(text)
    
  }

  const saveConsep = (text: string) =>{
    setConsep(text)
    
  }
  const saveCode = (text: string) =>{
    setCode(text)
    
  }
  const saveCuenta = (text: string) =>{
    setCuenta(text)
    
  }
  const isNumber =(text:string) => {
    const TextIsNumber = Number(text)
    return !Number.isNaN(TextIsNumber)
  }
  const saveDebit = (text: string) =>{
    console.log(`La variable text con valor ${text} es un numero ?: ${isNumber(text)}`);
    setDebit(text)
    
  }
  const saveCredit = (text: string) =>{
    console.log(`La variable text con valor ${text} es un numero ?: ${isNumber(text)}`);
    setCredit(text)
  }
  const saveJournal = () =>{
    console.log(fecha);
    console.log(nombre);
    console.log(apellido);
    console.log(consepto);
    console.log(codigo);
    console.log(cuenta);
    console.log(debito);
    console.log(credito);
    
    alert('hola')
  };


  return (
    <View>
      <Text>APP Journal</Text>
      <Text>Fecha</Text>
      <TextInput 
      placeholder="Fecha"
      onChangeText={(text) => saveDate(text)} />
      <Text>Nombre</Text>
      <TextInput 
      placeholder="Nombre"
      onChangeText={(text) => saveName(text)} />
      <Text>Apellido</Text>
      <TextInput placeholder="Apellido"
      onChangeText={(text) => saveLastName(text)} />
      <Text>Consepto:</Text>
      <TextInput placeholder="Consepto"
      onChangeText={(text) => saveConsep(text)} />

      <View>
      <Text>Codigo:</Text>
      <TextInput placeholder="Codigo"
      onChangeText={(text) => saveCode(text)} />
      <Text>Cuenta:</Text>
      <TextInput placeholder="Cuenta" 
      onChangeText={(text) => saveCuenta(text)} />
      <Text>Debito:</Text>
      <TextInput placeholder="Debito"
      onChangeText={(text) => saveDebit(text)} />
      <Text>Credito:</Text>
      <TextInput placeholder="Credito"
      onChangeText={(text) => saveCredit(text)} />
        <Text></Text>
       <Button 
       title='Guardar'
       onPress={
        () => saveJournal()
        }
        />
      </View>
    </View>
  );
}
/*export default function App() {
  const cliente = new Cliente('juan', 'perez')
  const journal = new Journal(new Date(), cliente, 'venta de computadora');
 
  journal.addLine({ 
    code: '110505', 
    account: 'Caja',
    amount: 2200,
    operation: 'D'
  });
  
  journal.addLine({ 
    code: '110505', 
    account: 'Caja',
    amount: 2200,
    operation: 'C'
  });

  journal.addLine({ 
    code: '110505', 
    account: 'Caja',
    amount: 1200,
    operation: 'D'
  });
  
  journal.addLine({ 
    code: '110505', 
    account: 'Caja',
    amount: 1200,
    operation: 'C'
  });

  console.log(cliente);
  console.log(journal);
  
  
  console.log(' Total Debit:::::',journal.getTotalDebit());
  console.log(' Total Credit:::::',journal.getTotalCredit());
  console.log('Los totales son iguales?: ', journal.validateTotalAreEquals());
  
  console.log(journal.deliteLine() === undefined);
  




  return (
    <View style={styles.container}>
      <Text>Diseña tu app!</Text>
      <Text>Hola!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ccff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

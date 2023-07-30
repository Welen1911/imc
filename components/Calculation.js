import { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export const Calculation = () => {
    
    const [altura, setAltura] = useState()
  const [peso, setPeso] = useState()
  const [teste, setTeste] = useState()
  const handleCalcular = () => {
    let pesoNum = parseFloat(peso)
    let alturaNum = parseFloat(altura)
    let resultado = pesoNum / (alturaNum * alturaNum)
    setTeste(`O resultado seu imc é: ${resultado}`) 
  }
    return (
        <>
        <Text>Digite a sua altura:</Text>
      <TextInput style={styles.input} keyboardType='numeric' placeholder='altura' value={altura} onChangeText={setAltura}></TextInput>

      <Text>Digite o seu peso:</Text>
      <TextInput style={styles.input} keyboardType='numeric' placeholder='peso' value={peso} onChangeText={setPeso}></TextInput>
      <Button title="Calcular" onPress={() => handleCalcular()}/>
      <Text style={styles.text}>{teste}</Text>
      
      </>
    )
}

const styles = {
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 35,
      }, text : {
        marginTop: 10,
      }
}
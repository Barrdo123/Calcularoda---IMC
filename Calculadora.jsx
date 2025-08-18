import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [resultColor, setResultColor] = useState('lightgrey');

  const calculateIMC = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height);

    if (isNaN(weightInKg) || isNaN(heightInM)) {
      setResult('Valores inválidos');
      setResultColor('black');
      return;
    }

    const imc = weightInKg / (heightInM * heightInM);
    const formattedIMC = imc.toFixed(2);

    let category = '';
    let color = '';

    if (imc < 17) {
      category = 'Muito abaixo do peso';
      color = 'orange';
    } else if (imc < 18.49) {
      category = 'Abaixo do peso';
      color = 'yellow';
    } else if (imc < 24.99) {
      category = 'Peso ideal';
      color = 'green';
    } else if (imc < 29.99) {
      category = 'Acima do peso';
      color = 'yellow';
    } else if (imc < 34.99) {
      category = 'Obesidade 1';
      color = 'darkorange';
    } else if (imc < 40) {
      category = 'Obesidade 2';
      color = 'orange';
    } else {
      category = 'Obesidade 3';
      color = 'red';
    }

    setResult(`${formattedIMC} (${category})`);
    setResultColor(color);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          placeholder="Peso em kg"
          value={weight}
          onChangeText={(text) => setWeight(text)}
          style={{ marginRight: 10, padding: 10 }}
        />
        <TextInput
          placeholder="Altura em metros"
          value={height}
          onChangeText={(text) => setHeight(text)}
          style={{ marginRight: 10, marginTop: 20, padding: 10 }}
        />
      </View>
      <TouchableOpacity
        onPress={calculateIMC}
        style={{
          padding: 10,
          backgroundColor: '#DA70D6',
          borderRadius: 5,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Calcular</Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 100,
          width: 200,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: resultColor,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: 'black', fontWeight: 'bold' }}>{result}</Text>
      </View>
    </View>
  );
}

export default App;

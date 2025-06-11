import { resolvePlugin } from "@babel/core";
import React, { useState } from "react";
import { View, Text,  StyleSheet, TextInput, Button, ScrollView } from "react-native";


export default function Numero(){
    const[num1, sertNum1] = useState('');
    const[num2, sertNum2] = useState('');
    const[num3, sertNum3] = useState('');
    const[result, setResult] = useState('');



    const analizar = () =>{
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        const c = parseFloat(num3);


        if (isNaN(a) || isNaN(b) || isNaN(c)){
            setResult("por favor ingrese 3 numeros validos!!")
            return;
        }

        const mayor = Math.max(a, b, c);
        const menor = Math.min(a, b, c);
        const promedio = ((a + b + c)/ 3).toFixed(2);


        setResult(`Mayor: ${mayor}\nMenor: ${menor}\nPromedio: ${promedio}`);
    };

    return(
        <View style={style.container}>
            <Text style={style.titulo}>Analizar 3 Numeros</Text>
            <TextInput style={style.input} keyboardType="numeric" placeholder="Numero 1" value={num1} onChangeText={sertNum1}/>
            <TextInput style={style.input} keyboardType="numeric" placeholder="Numero 2" value={num2} onChangeText={sertNum2}/>
            <TextInput style={style.input} keyboardType="numeric" placeholder="Numero 3" value={num3} onChangeText={sertNum3}/>
            <Button title="Analizar" onPress={analizar}/>
            {result !=="" && <Text style={style.result}>{result}</Text>}
        </View>
    )
    
}


const style = StyleSheet.create({
    container: {flex: 1, padding: 20, backgroundColor: '#fff'},
    titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10},
    input: { borderWidth: 1, padding: 10, marginBottom: 10},
    result: { fontSize: 18, marginTop: 20},
});





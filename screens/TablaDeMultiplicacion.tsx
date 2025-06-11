import React, { useState } from "react";
import { View, Text,  StyleSheet, TextInput, Button, ScrollView } from "react-native";


export default function TablaDeMultiplicar(){
    const [number, setNumber] = useState('');
    const [table, setTable] = useState<string[]>([]);

    const generateTable = ()=> {
        const num = parseInt(number);

        if (isNaN(num)) return;

        const result = [];
        for (let i = 1; i <=14; i++){
            result.push(`${num} x ${i} = ${num * i}`);
        }
        setTable(result)
    };
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Tabla de Multiplicar</Text>
            <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Ingrese un numero"
            value={number}
            onChangeText={setNumber}>
            </TextInput>
            <Button title="Generar Tabla" onPress={generateTable}></Button>
            <ScrollView style={styles.result}>
                {table.map((line, index) =>(
                    <Text key={index} style={styles.line}>{line}</Text>
                ))}
            </ScrollView>

        </View>

    )

    
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 20, backgroundColor: "#fff"},
    titulo: {fontSize: 22, fontWeight: 'bold', marginBottom: 10},
    input: {borderWidth: 1, padding: 20, marginBottom: 10},
    result: {marginTop: 20},
    line: {fontSize: 18, marginVertical: 2}
});
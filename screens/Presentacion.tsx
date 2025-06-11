import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Jordys Valenzuela Perez 2023-0957


export default function Presentacion(){
    return (
        <View style={styles.Container}>
            <Image source={require('../assets/Foto2x2.jpg')} style={styles.image}/>
            <Text style={styles.name}>Jordys Valenzuela Perez</Text>
            <Text style={styles.matricula}>2023-0957</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'},
    name: {fontSize: 24, fontWeight: 'bold'},
    matricula: { fontSize: 20},
    image: {width: 200, height: 200, marginBottom: 20}

})
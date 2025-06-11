import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Presentacion from "./screens/Presentacion";
import TablaDeMultiplicar from "./screens/TablaDeMultiplicacion";
import AnalizarNumeros from "./screens/Numero";

// Jordys Valenzuela Perez 2023-0957
const Drawer = createDrawerNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Presentacion">
        <Drawer.Screen name="Presentacion" component={Presentacion}/>
        <Drawer.Screen name="Tabla de Multiplicar" component={TablaDeMultiplicar}/>
        <Drawer.Screen name="Analizar Numeros" component={AnalizarNumeros}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
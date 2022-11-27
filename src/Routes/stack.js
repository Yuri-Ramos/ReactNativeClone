import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { EsqueciMinhaSenha } from "../screens/EsqueciMinhaSenha";
import { Login } from "../screens/Login";
import { Produtos } from "../screens/Produtos";
import { CadastroProduto } from "../screens/CadastroProduto";
import { Home } from "../screens/Home";
import { Favoritos } from "../screens/Favoritos";
import { Carrinho } from "../screens/Carrinho";
import { EdicaoProduto } from "../screens/EdicaoProduto";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Produtos"
    >
      <Screen name="Login" component={Login} />
      <Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} />
      <Screen name="Produtos" component={Produtos} />
      <Screen name="CadastroProduto" component={CadastroProduto} />
      <Screen name="Home" component={Home} />
      <Screen name="Favoritos" component={Favoritos} />
      <Screen name="Carrinho" component={Carrinho} />
      <Screen name="EdicaoProduto" component={EdicaoProduto} />
    </Navigator>
  );
}

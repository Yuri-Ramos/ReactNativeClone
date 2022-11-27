import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import AlterarCategoria from '../screens/AlterarCategoria';
import AlterarProduto from '../screens/AlterarProduto';
import AlterarSenha from '../screens/AlterarSenha';
import Cadastro from "../screens/Cadastro";
import CadastroCategoria from '../screens/CadastroCategoria';
import CadastroProduto from '../screens/CadastroProduto';
import Carrinho from '../screens/Carrinho';
import ConfirmacaoCadastro from '../screens/ConfirmacaoCadastro';
import ConfirmacaoSenhaAlterada from '../screens/ConfirmacaoSenhaAlterada';
import EsqueciMinhaSenha from "../screens/EsqueciMinhaSenha";
import Favoritos from '../screens/Favoritos';
import Home from '../screens/Home';
import Login from "../screens/Login";
import Produtos from '../screens/Produtos';
import SplashScreen from '../screens/SplashScreen';
const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator screenOptions={{
                headerShown: false,
            }}>
            <Screen name="Login" component={Login}/>

            <Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha}/>

            <Screen name="AlterarSenha" component={AlterarSenha}/>
              <Screen name="ConfirmacaoSenhaAlterada" component={ConfirmacaoSenhaAlterada} />
            <Screen name="Cadastro" component={Cadastro}/>
            <Screen name="SplashScreen"  component={SplashScreen} />
            <Screen name="ConfirmacaoCadastro" component={ConfirmacaoCadastro}/>

            <Screen name="Home"component={Home}/>
            <Screen name="Produtos" component={Produtos}/>
            <Screen name="Favoritos" component={Favoritos}/>
            <Screen name="Carrinho"  component={Carrinho}/>
            <Screen name="CadastroCategoria" component={CadastroCategoria}/>
            <Screen name="CadastroProduto"  component={CadastroProduto}/>
            <Screen name="AlterarCategoria" component={AlterarCategoria}/>
            <Screen name="AlterarProduto"  component={AlterarProduto}/>
        </Navigator>
    )

}
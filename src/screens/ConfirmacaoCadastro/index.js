import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";
import loja from "../../../assets/loja.png";
import { Gradient } from "../../components/Gradient";
import { Container, LoginButton, LoginText, Logo, Loja, MensageText } from "./styles";
export default function ConfirmacaoCadastro() {
  
  const navigation = useNavigation();
  
  function screenLogin() {
    navigation.navigate("Login");
  }

  function screenMarketplace() {
    navigation.navigate("Marketplace");
  }



   return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <MensageText>Usuário cadastrado com sucesso!</MensageText>
      
    
      <LoginButton onPress={screenLogin}>
        <LoginText>LOGIN</LoginText>
      </LoginButton>

        <TouchableOpacity onPress={screenMarketplace}>
        <Loja source={loja}/>
        </TouchableOpacity>
      
      
      <StatusBar style="auto" />
    </Container>
  );
}





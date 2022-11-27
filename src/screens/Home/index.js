import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { TouchableOpacity } from "react-native";
import categorias from "../../../assets/categorias.png";
import criadores from "../../../assets/criadores.png";
import logo from "../../../assets/logo.png";
import nextbutton from "../../../assets/nextbutton.png";
import { Gradient } from "../../components/Gradient";
import { Categorias, Container, Criadores, IntroText, Logo, Nextbutton, Subtitulo, Title } from "./styles";



export default function Home() {
  
  
  const navigation = useNavigation();
  
  function screenProdutos() {
    navigation.navigate("Produtos");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      
      
      <Title>Marketplace</Title>
        
        <TouchableOpacity onPress={screenProdutos}>
        <Nextbutton source={nextbutton}/>
        </TouchableOpacity>
      
      <Subtitulo>Sobre nós...</Subtitulo>
         
          <IntroText>   
          okdjfosajfoidjfoijdosfjojdfojsdoifjodsijfoijsdofisudhfiusdf
          ojfhsduhfiudshifuhdsiufhdsihfiusdhfiuhisduf
          sdkfjoisdjfoisdoijfoidsfsaasdsadsdsaasdasd
          spdjfoisdjfoijsdoifjoidsjfojdsofijodsf
          sdkfjoidsjfojsdoifjoidsjfojsdojfosdf
          </IntroText>
     
 
      <Subtitulo>Categorias</Subtitulo>
      
          <Categorias source={categorias}/>
      
      <Subtitulo>Criadores</Subtitulo>
      
            <Criadores source={criadores}/>
      
      
     
      <StatusBar style="auto" />
    </Container>
  );
}


       
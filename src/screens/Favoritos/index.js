
import { StatusBar } from "expo-status-bar";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Container, Logo, Title } from "./styles";

export default function Favoritos() {
  

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Favoritos</Title>
      
      <StatusBar style="auto" />
    </Container>
  );
}



import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import colors from "../../themes/colors.js";
import {Container} from "./styles.js";

export const Footer = () => {

    const navigation = useNavigation();

    function openHome() {
        navigation.navigate("Home");
    }

    function openProdutos() {
        navigation.navigate("Produtos");
    }

    function openFavoritos() {
        navigation.navigate("Favoritos");
    }

    function openCarrinho() {
        navigation.navigate("Carrinho");
    }

    return (
        <Container>
            <TouchableOpacity onPress={openHome}>
            <MaterialCommunityIcons
          name="home-outline"
          size={40}
          color={colors.footerIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openProdutos}>
            <MaterialCommunityIcons
          name="shopping"
          size={30}
          color={colors.footerIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openFavoritos}>
            <MaterialCommunityIcons
          name="star"
          size={35}
          color={colors.footerIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openCarrinho}>
            <MaterialCommunityIcons
          name="cart"
          size={35}
          color={colors.footerIcons} />
            </TouchableOpacity>
        </Container>
    )
}
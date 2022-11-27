import colors from "../../themes/colors.js";
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Gradient} from "../../components/Gradient";
import { FlatList, View, TouchableOpacity } from "react-native";
import {PlusButton, Container, CardsContainer, Card, CardImagem, Title, Descricao, BoxContainer, Box, Texto, MiddleBox, IconContainer } from "./styles.js";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";

const Lista = [
    {
        id: 1,
        imagem: require("../../../assets/1.jpg"),
        nome: "Produto 1",
        preco: "Preço R$ 25,00",
        estoque: "10 Unidades em estoque",
        quantidade: "2",
        favorito: "star-outlined"
    },
    {
        id: 2,
        imagem: require("../../../assets/2.png"),
        nome: "Produto 2",
        preco: "Preço R$ 50,00",
        estoque: "1 Unidades em estoque",
        quantidade: "0",
        favorito: "star"
    },
    {
        id: 3,
        imagem: require("../../../assets/3.jpg"),
        nome: "Produto 3",
        preco: "Preço R$ 30,00",
        estoque: "5 Unidades em estoque",
        quantidade: "0",
        favorito: "star-outlined"
    },
    {
        id: 4,
        imagem: require("../../../assets/4.jpg"),
        nome: "Produto 4",
        preco: "Preço R$ 100,00",
        estoque: "15 Unidades em estoque",
        quantidade: "1",
        favorito: "star-outlined"
    },
    {
        id: 5,
        imagem: require("../../../assets/5.jpg"),
        nome: "Produto 5",
        preco: "Preço R$ 40,00",
        estoque: "20 Unidades em estoque",
        quantidade: "1",
        favorito: "star"
    },
    {
        id: 6,
        imagem: require("../../../assets/6.jpg"),
        nome: "Produto 6",
        preco: "Preço R$ 70,00",
        estoque: "8 Unidades em estoque",
        quantidade: "0",
        favorito: "star"
    },
];

export const Produtos = () => {

    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate("CadastroProduto")
    }

    function openScreen2() {
        navigation.navigate("EdicaoProduto")
    }

    const Item = ({imagem, nome, preco, estoque, quantidade, favorito}) => (
        <View>
            <Card>
                <CardImagem source={imagem} />
                <View>
                    <Title>{nome}</Title>
                    <Title>{preco}</Title>
                    <Descricao>{estoque}</Descricao>
                </View>
                <BoxContainer>
                    <Box>
                        <Texto>-</Texto>
                    </Box>
                    <MiddleBox>
                        <Texto>{quantidade}</Texto>
                    </MiddleBox>
                    <Box>
                        <Texto>+</Texto>
                    </Box>
                    <AntDesign name="check" size={18} color={colors.secondary} />
                    <Entypo name={favorito} size={20} color={colors.secondary} />
                </BoxContainer>
            </Card>
            <IconContainer>
                <MaterialIcons name="delete-outline" size={20} color="red" />    
                <TouchableOpacity onPress={openScreen2}>
                    <AntDesign name="edit" size={20} color={colors.secondary} />
                </TouchableOpacity>
            </IconContainer>
        </View>
    );

    const renderItem = ({item}) => (
        <Item
        imagem={item.imagem}
        nome={item.nome}
        preco={item.preco}
        estoque={item.estoque}
        quantidade={item.quantidade}
        favorito={item.favorito}
        />
    );

    return (
        <Container>
            <Gradient />
            <Header title="Produtos" />
            <PlusButton onPress={openScreen}>
                <AntDesign name="plus" size={24} color={colors.secondary} />
            </PlusButton>
            <CardsContainer>
                <FlatList
                data={Lista}
                renderItem={renderItem}
                keyExtractor={(item)=> item.id}
                numColumns={2}
                />
            </CardsContainer>
            <Footer />
        </Container>

    )
}
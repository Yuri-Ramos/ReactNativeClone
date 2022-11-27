import logo from "../../../assets/logo.png";
import colors from "../../themes/colors.js";
import {AntDesign} from "@expo/vector-icons";
import {Container, Title, Logo} from "./styles.js"

export const Header = ({title}) => {
    return (
        <Container>
            <AntDesign
        name="logout"
        size={24}
        color={`${colors.secondary}`} />
        <Title>{title}</Title>
        <Logo source={logo} />
        </Container>
    )
}
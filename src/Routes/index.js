import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack";

 export  const Routes =() => {
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
 }
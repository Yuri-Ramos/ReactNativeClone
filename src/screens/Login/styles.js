import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 100.125px;
  margin-top: -200px;
`;

export const LoginText = styled.Text`
  font-family: sans-serif;
  text-align: center;
  color: #120a8f;
  font-weight: bold;
  position: absolute;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 33px;
  width: 131px;
  border: 2px solid #00ffff;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Recover = styled.Text`
  color: #120a8f;
  font-family: sans-serif;
  font-size: 12px;
`;

export const InputLogin = styled.TextInput`
  height: 31px;
  width: 188px;
  border: 2px solid #00ffff;
  border-radius: 5px;
  padding-left: 5px;
  font-family: sans-serif;
  margin-top: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const InputPassword = styled.TextInput`
    height: 31px;
    width: 188px;
    border: 2px solid #00FFFF;
    border-radius: 5px;
    padding-left: 5px;
    font-family: sans-serif;
    margin-bottom: 5px;
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
`;

export const Title = styled.Text`
  color: #120a8f;
  font-weight: 800;
  font-size: 18px;
  margin-top: 42px;
`;

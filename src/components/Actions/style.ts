import styled from "styled-components/native";
import Icons from "react-native-vector-icons/Ionicons"

export const Container = styled.ScrollView`

max-height: 84px;
padding-left: 14px;
padding-right: 14px;
margin: 18px;
`;

export const Content = styled.TouchableOpacity`
/* margin-left: 22px;
width: 44px;
height: 44px;
justify-content: center;
align-items: center;
background-color: #dadada;
border-radius: 44px;
flex-direction: row; */


align-items: center;
margin-right: 32px;
`;

export const AreaButton = styled.View`
background-color: #dadada;
height: 60px;
width: 60px;
border-radius: 30px;
justify-content: center;
align-items: center;
`;

export const TitleButton = styled.Text`
margin-top: 4px;
text-align: center;
font-weight: bold;
`;


export const IconActions = styled(Icons)`

`;
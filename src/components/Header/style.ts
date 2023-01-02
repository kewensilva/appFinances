
import styled from "styled-components/native";

import Icon from "react-native-vector-icons/FontAwesome";

export const Container = styled.View`
    align-items: center;
    background-color:#1c1b;
    height: 16%;
    flex-direction: row;
    padding-inline-start: 16em;
    padding-inline-end: 16em;
    justify-content: space-between ;
`;

export const Content = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
justify-content: space-between; 
padding: 12px;
`;

export const UserName = styled.Text`
margin-top: auto;
font-size: 18px;
color: #000;
font-weight:bold;
`;

export const Profile = styled.TouchableOpacity`
width: 44px;
height: 44px;
background-color: rgba('255,255,255, 0.5');
justify-content: center;
align-items: center;
border-radius: 44px;
`;

export const IconProfile = styled(Icon)`
size: 48px;
color: #000;
`;
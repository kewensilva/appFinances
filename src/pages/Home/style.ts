import { FlatList } from "react-native";
import styled from "styled-components/native";
import { IMov } from './index'

export const Container = styled.View`
    flex: 1;
    background-color: #fafafa;
`;

export const Content = styled.Text`
    margin-left: 22px;
    margin-right: 22px;
    font-size: 18px;
    margin-top: 18px;
    font-weight: bold;
    `;

export const ListContent = styled(FlatList as new () => FlatList<IMov>)`
padding:22px;
`;
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    flex: 1;
    margin-bottom: 18px;
    border-bottom-color: #dadada;
`;
export const Content = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2px;
    margin-bottom: 8px;
`;

export const Title = styled.Text`
    font-weight:bold;
    font-size: 18px;
`;

export const Price = styled.Text`
    font-size: 18px;
    color: #1c1b;
    font-weight: bold;
`;

export const Expense = styled.Text`
    font-size: 18px;
    color: #f00;
    font-weight: bold;
`;

export const Date = styled.Text`
    color: #dadada;
    font-weight: bold;
`;

export const HidePrice = styled.View`
    margin-top: 6px;
    width: 80px;
    height: 10px;
    background-color: #dadada;
    border-radius: 8px;
`;
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #fff;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 12px;
    padding-right: 12px;
    margin-top: -24px;
    margin-left: 22px;
    margin-right: 22px;
    border-radius: 5px;
    padding-top: 22px;
    padding-bottom: 22px;
    z-index: 99;
`;

export const Item = styled.View`

`;

export const ItemTitle = styled.Text`
    color: #d1d1d1;
    font-size: 16px;
    font-weight: bold;
`;

export const Content = styled.View`
    flex-direction: row;
`;

export const CurrentSymbol = styled.Text`
    color: #d1d1d1;
    font-size: 16px;
    font-weight: bold;
`;
export const BalanceCurrent = styled.Text`
    color: #1c1;
    font-size: 16px;
    font-weight: bold;
`; 

export const BalanceExpenses = styled.Text`
color: #f00;
font-size: 16px;
font-weight: bold;
`
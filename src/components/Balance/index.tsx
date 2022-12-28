import React from "react";
import { BalanceCurrent, BalanceExpenses, Container, Content, CurrentSymbol, Item, ItemTitle } from "./style";

interface Props {
    balanceCurrent: string,
    balanceExpenses: string
}

export function Balance({ balanceCurrent, balanceExpenses }: Props) {
    return (
        <Container>
            <Item>
                <ItemTitle> Saldo </ItemTitle>
                <Content>
                    <CurrentSymbol> R$ </CurrentSymbol>
                    <BalanceCurrent> {balanceCurrent} </BalanceCurrent>
                </Content>
            </Item>

            <Item>
                <ItemTitle> Gastos </ItemTitle>
                <Content>
                    <CurrentSymbol> R$ </CurrentSymbol>
                    <BalanceExpenses> {balanceExpenses} </BalanceExpenses>
                </Content>
            </Item>
        </Container>
    )
}
import React from "react";
import { Balance } from "../../components/Balance";
import { Header } from "../../components/Header";
import { Container, Content, ListContent } from "./style";



export interface IMov {
    id: string,
    titulo: string,
    price: string,
    date: string,
    type: boolean
}
const Mov = [
    {
        id: 1,
        titulo: 'boletos',
        price: '200,00',
        date: '18/10/2022',
        type: 0
    },
    {
        id: 2,
        titulo: 'salário',
        price: '200,00',
        date: '18/10/2022',
        type: 1
    },
    {
        id: 3,
        titulo: 'contas',
        price: '200,00',
        date: '18/10/2022',
        type: 0
    },
]

export function Home() {
    return (
        <Container>
            <Header name="Kewen Macedo Silva" />

            <Balance balanceCurrent="200.000" balanceExpenses="30.000" />
            <Content>
                Últimas Movimentações
            </Content>
            <ListContent
                data={Mov}
                keyExtractor={(item: IMov) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=> <Content>{item.titulo}</Content>}
            />
        </Container>
    )
}
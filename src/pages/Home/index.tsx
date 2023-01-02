import React from "react";
import { Balance } from "../../components/Balance";
import { Header } from "../../components/Header";
import { Actions } from "../../components/Actions";

import { Moviments } from "../../components/Moviments";

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
        id: "1",
        titulo: 'Transferências',
        price: '20,00',
        date: '20/12/2022',
        type: 0
    },
    {
        id: "2",
        titulo: 'Recebimentos',
        price: '30,00',
        date: '02/12/2022',
        type: 1
    },
    {
        id: "3",
        titulo: 'Pagamentos',
        price: '150,00',
        date: '28/12/2022',
        type: 0
    },
]

export function Home() {
    return (
        <Container>
            <Header name="Kewen Macedo Silva" />

            <Balance balanceCurrent="200.000" balanceExpenses="30.000" />
            <Actions></Actions>
            <Content>
                Últimas Movimentações
            </Content>
            <ListContent
                data={Mov}
                keyExtractor={(item: IMov) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Moviments data={item} />}
            />
        </Container>
    )
}
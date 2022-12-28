import React from "react";
import { Balance } from "../../components/Balance";
import { Header } from "../../components/Header";
import { Container } from "./style";

export function Home() {
    return (
        <Container>
            <Header name="Kewen Macedo Silva" />

            <Balance balanceCurrent="200.000" balanceExpenses="30.000" />
        </Container>
    )
}
import React from "react";
import { Container, Content, IconActions, TitleButton } from "./style";


export function Actions() {
    return (
        <Container horizontal={true} showsHorizontalScrollIndicator={false}>
            <Content>
                <IconActions
                    name="wallet"
                    size={32}
                />
                <TitleButton>Carteira</TitleButton>
            </Content>
            <Content>
                <IconActions
                    name="pricetag"
                    size={32}
                />
                <TitleButton>Compras</TitleButton>
            </Content>
            <Content>
                <IconActions
                    name="barcode"
                    size={32}
                />
                <TitleButton>Pagamentos</TitleButton>
            </Content>
            <Content>
                <IconActions
                    name="scan"
                    size={32}
                />
                <TitleButton>Leitor de Código </TitleButton>
            </Content>
            <Content>
                <IconActions
                    name="settings"
                    size={32}
                />
                <TitleButton>Conta</TitleButton>
            </Content>
        </Container>
    )
}
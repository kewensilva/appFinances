import React, { useState } from "react";
import { Container, Content, Date, HidePrice, Price, Title } from "./style";

interface Props {
    data: string
}
export function Moviments({ data }: Props) {

    const [showPrice, setShowPrice] = useState(false);

    return (
        <Container onPress={() => setShowPrice(!showPrice)}>
            <Content>
                <Title>
                    {data.titulo}
                </Title>
                {showPrice ? (
                    <Price> {data.price}</Price>
                ) : (<HidePrice />)}

            </Content>
            <Date>{data.date}</Date>
        </Container>
    )
}
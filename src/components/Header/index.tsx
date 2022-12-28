import React from "react";
import { Container, Content, Profile, UserName } from "./style";
import { Feather } from "@expo/vector-icons"

interface Props {
    name: string
}

export function Header({name}: Props){
    return (
        <Container>
            <Content>
                <UserName>{name}</UserName>
                <Profile>
                    <Feather name="user" size={32} color={"#000"} />
                </Profile>
            </Content>
        </Container>
    )
}
import React from "react";
import { Container, Content, IconProfile, Profile, UserName } from "./style";
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
                    <IconProfile name="user-plus" />
                </Profile>
            </Content>
        </Container>
    )
}
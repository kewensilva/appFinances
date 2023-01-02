import React from "react";
import { Container, Content, IconProfile, Profile, UserName } from "./style";

interface Props {
    name: string
}

export function Header({name}: Props){
    return (
        <Container>
            <Content>
                <UserName>{name}</UserName>
                <Profile>
                    <IconProfile name="person" size={32} />
                </Profile>
            </Content>
        </Container>
    )
}
import React from "react";
import { Home } from "./src/pages/Home";
import { Container, Content } from "./src/pages/Home/style";


export default function App() {
  return (
    <Container>
      <Home name="Kewen Macedo Silva" />
      <Content>Hello World</Content>
    </Container>
  )
}
import { NextPage } from "next";
import { PropsWithChildren } from "react";
import { Header } from "../Header/Header";
import styled from "styled-components";

export const Layout: NextPage<PropsWithChildren> = (props) => {
    const { children } = props
    return (
        <div>
            <Container>
                <Header />
                <Main>{children}</Main>
            </Container>

        </div>
    )

}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center:
padding: 20px;
`

const Main = styled.div`
width: 100%;
padding-botton: 10px;
overflow: hidden;
`
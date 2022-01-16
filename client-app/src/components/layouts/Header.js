import React from "react";
import styled from "styled-components";



export default function Header() {
    const HeaderWrap = styled.header`
    height: 100px;
    border: 1px solid;
    width: 100%;
    background-color: #9d9dab;
    `;
    const Heading = styled.h1`
    padding: 10px 30px;
    `;
    return <HeaderWrap>
 <Heading> WILL E. CO.</Heading>
    </HeaderWrap>
}
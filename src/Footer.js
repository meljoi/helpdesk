import React from "react";
import styled from "styled-components";

const FooterBottom = styled.footer`
    z-index: 4;
    width: 100%;
    flex: none;
    display: block;
    font-weight: 300;
    background-color: #E0CEC6;
    color: #6A7152;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
    height: 60px;
    @media only screen and (max-width: 767px) {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        height: 100px;
        padding-left: 0;
    }
`;
const Copyright = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-left: 20px;
    text-transform: uppercase;
    font-size: 0.8rem;
    span {
        padding-top: 0px;
        font-size: 20px;
        color: white;
    }
`;




const FooterPage = () => {
    return (
        <>
            <FooterBottom>
                <Copyright className="type">
                    Copyright © Made by Melu · All Rights Reserved
                </Copyright>

            </FooterBottom>
        </>
    );
};
export default FooterPage;

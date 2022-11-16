import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';




export const Nav = styled.nav`
    position: sticky;
    width: 100%;
    height: 95px;
    left: 0px;
    top: 0px;
    background: #FCFCFF;
    flex-wrap: wrap;
    display: flex;
    
`;

export const NavLogo = styled.div`
    position: absolute;
    width: 180px;
    height: 36px;
    left: 96px;
    top: 29px;
    background: #FCFCFF;
    cursor: pointer;
    
    
`


export const NavMenu = styled.div`
    position: absolute;
    height: 26px;
    left: 514px;
    top: 34px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #434358;
    display: flex;
    align-items: center;




    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const NavLink = styled(Link)`
    list-style: none;
    padding: 20px;
    text-decoration: none;
    color: #434358;
    font-family: inherit;
    letter-spacing: 1.5px;
    flex-wrap: wrap;
    

    &.active {
        color: #000080;
        font-weight: 700;
    }

    &:hover {
        transition: all ease-in-out 0.3s;
        scale: calc(1.1);
    }
`;

export const MobileIcon = styled.div`
    display: none;
    color: #fff;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;



export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;


    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 6px;
    gap: 8px;
    color: #ffff;
    position: absolute;
    width: 78px;
    height: 42px;
    margin-right: 96px;
    top: 26px;
    background: #000080;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 700;

    &:hover {
        transform: scale(1.1);
    }
`
;




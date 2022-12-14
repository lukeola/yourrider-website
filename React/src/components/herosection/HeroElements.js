import styled from "styled-components";



export const HeroContainer = styled.div`
    background: rgba(0, 0, 128, 0.74);
    height: 800px;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    
    @media screen and (max-width: 720px) {
        height: 500px;
        width: 100%;
    }
`
export const HeroBgImage = styled.div`
    position: absolute;
    width: 100%;
    z-index: -1;
    height: 800px;
    right: 18px;
    flex-wrap: nowrap;
`

export const HeroHeader = styled.div`
    position: relative;
    width: 50%;
    height: 174px;
    left: 30%;
    top: 10%;
    align-items:center;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 87px;
    color: #FCFCFF;

    @media screen and (max-width: 720px) {
        position: absolute;
        width: 70%;
        left: 20%;
        height: auto;
        align-items:center;
        margin-top: 66px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 180%;
        line-height: 29px;

        color: #FFFFFF;
        
    }
`

export const HeroText = styled.div`
    position: absolute;
    width: 60%;
    height: 156px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 52px;
    text-align: center;
    color: #FFFFFF;
    left: 20%;
    top: 53%;

    @media screen and (max-width: 720px) {
        position: relative;
        width: 99%;
        height: auto;
        top: 45%;
        left: 0;
        line-height: 32px;
    }
`

export const TrackingBox = styled.div`
    position: absolute;
    width: 460px;
    height: 64px;
    left: 569px;
    top: 555px;
    background: #FCFCFF;
    border-radius: 4px;
`

export const TrackingBtn = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 18px;
    gap: 8px;
    width: 148px;
    height: 42px;
    left: 301px;
    top: 11px;
    background: #000080;
    border-radius: 4px;
    color: #ffff;
    border-style: none;
    cursor: pointer;
`

export const HeroNav = styled.div`
    position: absolute;
    top: 820px;
    width: 100%;
    height: 139px;
    display: flex;
    justify-content: center;
  

`
export const HeroNavItems = styled.div`
    width: 294px;
    height: 260px;
    left: 96px;
    top: 744px;
    background: #FCFCFF;
    border-radius: 32px;
    margin: 0 35px;
    box-shadow: 0px 8px 46px rgba(0, 0, 198, 0.3);
`
export const HeroNavIcon = styled.div`
    position: relative;
    width: 64px;
    height: 64px;
    left: 116px;
    top: 62px;
    color:#000080;
    font-size: 50px;

    
`
export const HeroNavText = styled.p`
    position: relative;
    left: 61px;
    top: 120px;
    font-weight: 400;
    font-size: 24px;
    display: flex;
  
    color: #000080;

`
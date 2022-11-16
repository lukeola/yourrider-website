import styled  from "styled-components";
import Google from '../../images/googleplay.png'
import Apple from '../../images/appstore.png'
export const FooterContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 472px;
    background: #000080;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const FooterColumnOne = styled.div`
    width: 231px;
    height: 130px;
    left: 96px;
    top: 160px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FCFCFF;
`
export const ColumnOneLogo = styled.div`
    position: absolute;
    width: 230.76px;
    height: 36px;
    left: 96px;
    top: 100px;
`
export const ColumnOneText = styled.div`
    position: absolute;
    width: 231px;
    height: 130px;
    left: 96px;
    top: 160px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FCFCFF;
`

export const FooterColumnTwo = styled.div`
    position: absolute;
    width: 100px;
    left: 378px;
    top: 105px;
    

`
export const ColumnTwoHeading = styled.div`
    width: 88px;
    height: 26px;
    left: 378px;
    top: 105px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 6px;
    color: #FCFCFF;
`
export const ColumnTwoLinks = styled.li`
    width: 95px;
    height: 24px;
    left: 378px;
    top: 164px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 44px;
    list-style: none;
    color: #fff;

`

export const FooterColumnThree = styled.div`
    position: absolute;
    width: 300px;
    height: 26px;
    left: 612px;
    top: 100px;
`

export const ColumnThreeHeading = styled.div`
    width: 246px;
    height: 26px;
    left: 612px;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: #FCFCFF;
`

export const ColumnThreeIcons = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    font-size: 30px;
    margin-right: 10px;
`

export const FooterColumnFour = styled.div`

    width: 383px;
    height: 44px;
    margin-right: 90px;
    margin-top: 96px;
    justify-content: flex-end;
`
export const ColumnFourText = styled.div`
    width: 383px;
    height: 44px;
    left: 940px;
    top: 96px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FCFCFF;
`
export const ColumnFourLogo = styled.div`
    width: auto;
    display: flex;
    margin-top: 15px;
    cursor: pointer;
    `
export const Logoitem1 = styled.video`
    margin-right: 15px;
    width: 181px;
    border-radius: 6px;
    height: 53px;
    background-color: aliceblue;
    background-image: url(${Google});
    background-repeat: no-repeat;
    cursor: pointer;
 
`

export const Logoitem2 = styled.video`
    border-radius: 6px;
    width: 181px;
    height: 53px;
    background-color: aliceblue;
    background-image: url(${Apple});
    background-repeat: no-repeat;
    `
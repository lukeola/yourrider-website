import styled, {createGlobalStyle} from "styled-components";


export const Globalstyle = createGlobalStyle`
    body {
        font-family: 'Inter';
    }
`

export const SectionSevenContainer = styled.div`
    width: 100%;
    height: 780px;
    background: #F8F8FF;
`
export const SectionSevenHeader = styled.div`
    position: absolute;
    width: 321px;
    height: 48px;
    margin-left: 609px;
    margin-top: 86px;
   
    font-weight: 800;
    font-style: normal;
    font-size: 44px;
    color: #434358;
`
export const SectionSevenHeadertext = styled.p`
    position: absolute;
    width: 147px;
    height: 24px;
    margin-left: 646px;
    margin-top: 150px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    text-align: center;
    text-transform: lowercase;

    color: #898888;

`
export const ColumnOneIcons = styled.div`
    color:#434358 ;
    font-size: 28px;
    margin-right: 28px;
`
export const LocationWrapper = styled.div`
    position: absolute;
    margin-left: 125px;
    margin-top: 216px;
    margin-bottom: 6.25%;
    color: #434358;
    font-size: 18px;
    display: flex;
    width: 504px;
    line-height: 34px;
    align-items: center;
    margin-bottom: 52px;
`

export const PhoneWrapper = styled.div`
    position: absolute;
    margin-left: 125px;
    margin-right: 15.62%;
    margin-top: 333px;
    margin-bottom: 1.25%;
    color: #434358;
    font-size: 16px;
    display: flex;
    margin-bottom: 52px;
    align-items: center;
`
export const MailWrapper = styled.div`
    position: absolute;
    margin-left: 125px;
    margin-right: 15.62%;
    margin-top: 425px;
    color: #434358;
    font-size: 18px;
    display: flex;
    align-items: center;
`

export const SectionSevenForms = styled.form`
    position: absolute;
    width: 718px;
    height: 58px;
    margin-left: 704px;
    margin-top: 216px;
    background: #FCFCFF;
    border-radius: 16px;
`
export const FormInput =styled.input`
    width: 718px;
    height: 43px;
    background-color: #EDEDF1;
    border-radius: 16px;
    margin-bottom: 20px;
    border: none;
    padding: 15px;
    font-size: 16px;
`

export const  FormTextArea = styled.textarea`
    width: 718px;
    height: 194px;
    background-color: #EDEDF1;
    border-radius: 16px;
    margin-bottom: 20px;
    border: none;
    font-size: 16px;
    padding: 15px;

`

export const FormButton = styled.button`
    position: absolute;
    width: 718px;
    height: 58px;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 700;
    background: #EDEDF1;
    color: #000080;
    border: 2px solid #EDEDF1;
    border-radius: 16px;
    padding: 15px;
    cursor: pointer;

    &:hover {
        background-color: #000080;
        color: #fff;
    }
`

export const FormError = styled.div`
    color: red;
    font-weight: 700;
    position: relative;
    margin-left: 300px;
    justify-content: center;
`
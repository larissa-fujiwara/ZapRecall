import styled from 'styled-components';
import logo from '../assets/logo.png';


export default function Header() {
    return (
        <HeaderApp>
                <img src={logo} alt="logo" />
                ZapRecall
        </HeaderApp>
    )
}

const HeaderApp = styled.header`
    font-family: 'Righteous', sans-serif;
    color: #FFFFFF;
    width: 100%;
    height: 92px;
    font-size: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FB6B6B;
    padding: 8px;
    
    img{
    height: 3.75rem;
    width: 3.25rem;
    max-height: 60px;
    max-width: 52px;
    margin-right: 1rem;
    }
`
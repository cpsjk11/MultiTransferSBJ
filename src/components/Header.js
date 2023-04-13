import React from 'react'
import styled from 'styled-components'
import BPMGLogo from '../assets/images/BPMG.png'


import { metaMaskLogin } from '../web3/web3'


function Header() {

    const ConnetWalletHandle = async () => {
        metaMaskLogin();
    }
    

  return (
    <BackGround>
        <BPMGLogoImg src={BPMGLogo} alt="BPMG Logo"/> 
        <ConnectButton onClick={ConnetWalletHandle}>Connet Wallet</ConnectButton>
    </BackGround>
  )
}

export default Header


const BackGround = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    
`

const BPMGLogoImg = styled.img`
    width: 200px;
    cursor: pointer;
`

const ConnectButton = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`
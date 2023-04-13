import React from 'react'
import stlyed from 'styled-components'
import { AiFillCaretDown } from "react-icons/ai";

function Main() {



  return (
    <BackGround>
        <CenterBox>
            <ChainBox>
                <ChainTitle>Connect Chain</ChainTitle>
                <ChainSelect>Klaytn </ChainSelect>
            </ChainBox>
            <TokenBox>
                <TokenTitle>Select Token</TokenTitle>
                <TokenSelect>Gemhub <AiFillCaretDown /> </TokenSelect>
            </TokenBox>
        </CenterBox>

    </BackGround>
  )
}

export default Main

const BackGround = stlyed.div`
    background-color: #f5f5f5;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CenterBox = stlyed.div`
    width: 800px;
    height: 800px;
    background-color: #fff;
    border-radius: 10px;
`

const ChainBox = stlyed.div`
    width: 100%;
    height: 120px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 50px;
    
`

const ChainTitle = stlyed.div`
    font-size: 30px;
    font-weight: 600;
    
`

const ChainSelect = stlyed.div`
    width: 90%;
    // border: 1px solid #000;
    padding: 10px 0;
    font-size: 20px;
    font-weight: 600;
    justify-content: space
    
`

const TokenBox = stlyed.div`
    width: 100%;
    height: 120px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 50px;
    `

const TokenTitle = stlyed.div`
    font-size: 30px;
    font-weight: 600;
`

const TokenSelect = stlyed.div`
    width: 90%;
    // border: 1px solid #000;
    padding: 10px 0;
    font-size: 20px;
    font-weight: 600;
    justify-content: space
`
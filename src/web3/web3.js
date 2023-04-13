import Web3 from "web3"
const Caver = require("caver-js")
const caver = new Caver("https://api.baobab.klaytn.net:8651/")

let web3
let account

export const metaMaskLogin = async () => {
    const web3js = window.ethereum

    if (web3js) web3 = new Web3(window.ethereum)

    else if (window.confirm("Please install MetaMask to use this service.")) return window.open("https://metamask.io/download.html", "_blank")

    window.ethereum.enable()

    account = () => {
        return new Promise((resolve, reject) => {
            web3.eth.getAccounts((err, accounts) => {
                if (err) reject(err)
                resolve(accounts[0])
            })
        })
    }
}
 
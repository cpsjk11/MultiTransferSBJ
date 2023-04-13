const XLSX = require('xlsx')

const workbook = XLSX.readFile('./GXA_EVENT_WINNER.xlsx')

const account = []
const airDropAmount = []

const sheetLen = workbook.SheetNames.length
for (let i = 0; i < sheetLen; i++) {
    const sheetName = workbook.SheetNames[i]
    const sheet = workbook.Sheets[sheetName]

    for (let cell in sheet) {
        const cellAddress = XLSX.utils.decode_cell(cell)
        const col = cellAddress.c
        if (col === 0) {
            const address = sheet[cell].v
            account.push(address)
        }
        if (col === 1) {
            const amount = sheet[cell].v
            let test = amount.replace(/\s/g, "").match(/\d+/g)
            const number = test.join("")
            airDropAmount.push(number)
        }
    }
}

console.log(account.length)
console.log(airDropAmount.length)


function getInputValue(inputId){
    const InputField = document.getElementById(inputId)
    
    const inputAmountText = InputField.value

    const inputAmount = parseFloat(inputAmountText)

    // clear input field 
    InputField.value = ''

    return inputAmount
}


document.getElementById('deposite-button').addEventListener('click',function(){

    const depostiAmount = getInputValue('deposite-input')

    // get current deposte
    const depositTotal = document.getElementById('deposit-total')
    const depositTotalText = depositTotal.innerText
    const previousDepositTotal = parseFloat(depositTotalText)
    depositTotal.innerText = previousDepositTotal + depostiAmount

    // update balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previousBalanceTotal + depostiAmount

})

//  withdraw button 

document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawAmount = getInputValue('withdraw-input')

    //  withdraw Total
    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(withdrawTotalText)
    withdrawTotal.innerText = withdrawAmount +  previousWithdrawTotal

    // balance update after withdraw
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousbalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previousbalanceTotal - withdrawAmount 

})
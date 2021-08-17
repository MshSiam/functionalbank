document.getElementById('deposite-button').addEventListener('click',function(){
    
    const depositInput = document.getElementById('deposite-input')
    
    const depositAmountText = depositInput.value

    const depostiAmount = parseFloat(depositAmountText)


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


    // clear input field 
    depositInput.value = ''
    


})


//  withdraw button 

document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value
    const withdrawAmount = parseFloat(withdrawAmountText)


    //  withdraw Total

    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText

    const previousWithdrawTotal = parseFloat(withdrawTotalText)

    withdrawTotal.innerText = withdrawAmount +  previousWithdrawTotal


    // clear withdraw input 
    withdrawInput.value = ''



    // balance update after withdraw
    const balanceTotal = document.getElementById('balance-total')

    const balanceTotalText = balanceTotal.innerText
    const previousbalanceTotal = parseFloat(balanceTotalText)

    balanceTotal.innerText = previousbalanceTotal - withdrawAmount 

 
    


})
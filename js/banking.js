
function getInputValue(inputId){
    const InputField = document.getElementById(inputId)
    
    const inputAmountText = InputField.value

    const inputAmount = parseFloat(inputAmountText)

    // clear input field 
    InputField.value = ''

    return inputAmount
}


function updateTotalField(totalfieldId ,Amount){
    const totalElement = document.getElementById(totalfieldId)
    const TotalText = totalElement.innerText
    const previousTotal = parseFloat(TotalText)
    totalElement.innerText = previousTotal + Amount
}



function updateBalance(amount,isAdd){
 
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousbalanceTotal = parseFloat(balanceTotalText)
     
    if(isAdd == true){
        balanceTotal.innerText = previousbalanceTotal + amount 
    }else{
        balanceTotal.innerText = previousbalanceTotal - amount 
    }
}




document.getElementById('deposite-button').addEventListener('click',function(){

    const depositAmount = getInputValue('deposite-input')

    // get current deposte

    updateTotalField('deposit-total' ,depositAmount)

    // update balance
    updateBalance(depositAmount, true)

})

//  withdraw button 

document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawAmount = getInputValue('withdraw-input')

    updateTotalField('withdraw-total', withdrawAmount)

    
    // balance update after withdraw
 
    updateBalance(withdrawAmount)

})
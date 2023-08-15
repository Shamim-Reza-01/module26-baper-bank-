document.getElementById('btn').addEventListener('click',function(){
    const input1 = document.getElementById('input-1');
    const inputValueString = input1.value
    const inputValue = parseFloat(inputValueString)

    const depositElement = document.getElementById('depositValue')
    const depositString = depositElement.innerText
    const deposit = parseFloat(depositString);
    
    const depositTotal = deposit + inputValue ;
    depositElement.innerText = depositTotal ;
    const balanceInput = document.getElementById('balanceValue');
    const balanceInputString = balanceInput.innerText
    const balance = parseFloat(balanceInputString);
    const balanceTotal = balance + inputValue
    balanceInput.innerText = balanceTotal
    input1.value = ''
})
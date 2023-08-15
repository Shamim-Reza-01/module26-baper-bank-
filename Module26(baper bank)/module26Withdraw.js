document.getElementById("btn-2").addEventListener('click',function(){
    // 
    const inputWithdraw = document.getElementById("input-2");
    const inputWithdrawString = inputWithdraw.value
    const withdraw = parseFloat(inputWithdrawString)
    // console.log(withdraw)
    const previesWithdraw = document.getElementById('withdrawValue');
    // console.log(previesWithdraw)
    const withdrawString = previesWithdraw.innerText
    const withdrawValue = parseFloat(withdrawString)
    const withdrawTotalValue = withdrawValue + withdraw
    previesWithdraw.innerText = withdrawTotalValue ;

    const balanceInput = document.getElementById('balanceValue');
    const balanceInputString = balanceInput.innerText
    const balance = parseFloat(balanceInputString);
    const balanceTotal = balance - withdraw
    balanceInput.innerText = balanceTotal
    inputWithdraw.value = ''
    // console.log(withdrawTotalValue)
})
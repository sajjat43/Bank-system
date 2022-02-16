document.getElementById('deposite-btn').addEventListener('click', function() {
    const depositeInput = document.getElementById('deposite');

    const depositeAmount = depositeInput.value;
    const newDepositeAmount = parseFloat(depositeAmount);

    const depositeTotal = document.getElementById('depositamount');

    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newDepositTotal = previousDepositeAmount + newDepositeAmount;
    depositeTotal.innerText = newDepositTotal;

    const balance = document.getElementById('total');
    const balanceText = balance.innerText;
    const previousBalance = parseFloat(balanceText);
    const newBalance = previousBalance + newDepositeAmount;

    balance.innerText = newBalance;

    depositeInput.value = '';
})

document.getElementById('withraw-btn').addEventListener('click', function() {

    const withdrawInput = document.getElementById('withraw');
    const withDrawText = withdrawInput.value;
    const newWithDrawAmount = parseFloat(withDrawText);
    // console.log(newWithDrawAmount);

    const depositeWithDraw = document.getElementById('amo');
    const widthDrowDeposite = depositeWithDraw.innerText;
    const DepositeValue = parseFloat(widthDrowDeposite);

    const totoalValanceWithDrow = DepositeValue + newWithDrawAmount;



    depositeWithDraw.innerText = totoalValanceWithDrow;

    const totalAmountValance = document.getElementById('total')
    const ValanceTotalText = totalAmountValance.innerText;
    const ValanceTotal = parseFloat(ValanceTotalText);

    const valacneResult = ValanceTotal - newWithDrawAmount;

    totalAmountValance.innerText = valacneResult;






    withdrawInput.value = '';

})
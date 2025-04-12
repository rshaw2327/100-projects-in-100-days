function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value

    interestRateValue = document.getElementById("interest-rate").value

    MonthsToPayValue = document.getElementById("months-to-pay").value

    interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue

    MonthlyPayment = (loanAmountValue / MonthsToPayValue + interest)

    document.getElementById("payment").innerHTML = `Monthly Payemnt: ${MonthlyPayment}`

}

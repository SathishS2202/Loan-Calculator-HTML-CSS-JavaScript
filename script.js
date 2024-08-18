function Calculateloan() {
    var Amount = document.getElementById("amount").value;
    var Interest = document.getElementById("interest").value;
    var Months = document.getElementById("months").value;
    
    var InterestAmount = (Amount * (Interest * 0.01)) / Months;
    var total = (Amount / Months) + InterestAmount;
    
    document.getElementById("result").innerHTML = total.toFixed(2);
    document.getElementById("amount").value = '';
    document.getElementById("interest").value = '';
    document.getElementById("months").value = '';

}

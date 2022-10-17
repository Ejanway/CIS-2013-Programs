var $ = function (id) 
{
    return document.getElementById(id);
}

/*
 *start
   declare floatMonthlyPayment, intLoanTerm, floatTotalCost
   get floatMonthlyPayment
   get intLoanTerm
   calculate floatTotalCost = floatMonthlyPayment * intLoanTerm
   output floatTotalCost
  end
*/
 var calculate = function()
 {
  var floatMonthlyPayment, intYearsPayment, floatTotalHouseCost;  
    floatMonthlyPayment= parseFloat($("monthly_payment").value);
    intYearsPayment= parseInt($("years_of_payment").value);
    floatTotalHouseCost= parseFloat(floatMonthlyPayment * intYearsPayment);
    $("total_house_cost").value= floatTotalHouseCost;
 }
 
 window.onload = function () 
{
    $("years_of_payment").value = "years_of_payment";
    $("total_cost").value = "total_house_cost";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
}

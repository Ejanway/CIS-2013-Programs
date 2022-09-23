var= floatAge, floatDays, intWeeks, floatMonths, intFortnights
floatAge= ("Enter age in years") 
floatDays = parseFloat(floatAge*365.25);
floatMonths = prompt(floatAge*12);
intWeeks = parseFloat(floatDays/7);
intFortnights = parseFloat(floatDays/14).toFixed(2);
alert("Age"+ "Days"+ "Weeks"+"Months"+"Fortnights");  

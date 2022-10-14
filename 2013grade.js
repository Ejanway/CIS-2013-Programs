//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Plase enter final Midterm pts (0-35):"));

floatFinPts = parseFloat(prompt("Please enter final exam pts (0-35)"));

floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

intGradeOption = parseInt(prompt("inter 1 for pass fail or 2 for letter grade"));

if(intGradeOption ===1)
{
    if(floatTotalPoints>=80) 
    {
        stringFinalGrade= "pass";
    }
    else 
    {
        stringFinalGrade= "fail";    
    }
}
else 
{
    if(floatTotalPts>=80 && floatTotalPts<90);
}
    stringFinalGrade= "B"
    {
        if(floatTotalPts>=90);
    }
        stringFinalGrade= "A"
        {
            if(floatTotalPts>=70 && floatTotalPts<80);
        }
            stringFinalGrade= "C"

            alert("Your final grade is: " +stringFinalGrade);

        

//For year
var year;
var month;
year =  1921;//testing
month = "september";
//Checking Leap year
if((year%4)==0){
    
    console.log("Ran Leap year");
    isLeapYear(year,month)
    
}else{
    console.log("Ran NonLeap year");
    isNoramlYear(year,month)
}

//---------------------------------------------------------------------------------------------------
//function for leap Year
function isLeapYear(yearProp,monthProp){
    //For Prev year
var prevYear = yearProp -1;

//for Thousandplace calc
var thousandCalc;
//For hundread cal
var hundreadCalc;
//Hundread odd Days
var hundreadOddDays;
// For tens Calc
var tensCalc;
//final tens odd days
var finalTens;
//Calculated final tens
var calcFinalPartOddDay;


       console.log("prevYear",prevYear);

    //Filtering Hundreadth place 
    hundreadCalc = prevYear%400;
    console.log("hundreadCalc",hundreadCalc);
    //Calculating odd Days according to [100,200,300]
    if (hundreadCalc > 300) {
        hundreadOddDays = 1;
        tensCalc = hundreadCalc - 300;
        console.log("300ran");
      } else if (hundreadCalc > 200) {
        hundreadOddDays = 3;
        tensCalc = hundreadCalc - 200;
        console.log("200ran");
      } else if (hundreadCalc > 100) {
        hundreadOddDays = 5;
        tensCalc = hundreadCalc - 100;
        console.log("100ran");
      } else {
        hundreadOddDays = 0;
        tensCalc = hundreadCalc;
        console.log("400ran");
      }

             //test
              console.log("tensCalc",tensCalc)
             //
    finalTens= tensCalc / 4;
    //test
  console.log("finalTens",finalTens)
    //
  const integerPart = Math.trunc(finalTens);//interger part
  //test
  console.log("integerPart",integerPart)
  //
  calcFinalPartOddDay = (tensCalc + integerPart) % 7
  console.log("calcFinalPartOddDay",calcFinalPartOddDay);

// <--------------------------------Tens Calculation Over Now Next year Will Start AKA Current----------------------------------------------------->
// <--------------------------------Data For Leap year Start----------------------------------------------------->
//oddDay will give me current 1 day of month data
var year_Data = {
    january: {
        days: 31,
        oddDay: 0,//prev odd day +1 = jan 1
    },
    february: {
        days: 29,
        oddDay: 3,//3+1
    },
    march: {
        days: 31,
        oddDay: 4,//3+1+1
    },
    april: {
        days: 30,
        oddDay: 7,//3+1+3+1
    },
    may: {
        days: 31,
        oddDay: 9,//3+1+3+2+1
    },
    june: {
        days: 30,
        oddDay: 12,//3+1+3+2+3+1
    },
    july: {
        days: 31,
        oddDay: 14,//3+1+3+2+3+2+1
    },
    august: {
        days: 31,
        oddDay: 17,//3+1+3+2+3+2+3+1
    },
    september: {
        days: 30,
        oddDay: 20,//3+1+3+2+3+2+3+3+1
    },
    october: {
        days: 31,
        oddDay: 22,//3+1+3+2+3+2+3+3+2+1
    },
    november: {
        days: 30,
        oddDay: 25,//3+1+3+2+3+2+3+3+2+3+1
    },
    december: {
        days: 31,
        oddDay: 27,//3+1+3+2+3+2+3+3+2+3+2+1
    },

}


switch (monthProp) {
    case "january":
        console.log("running jan");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "february":
        console.log("running feb");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "march":
        console.log("running march");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "april":
        console.log("running apr");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "may":
        console.log("running may");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "june":
        console.log("running june");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "july":
        console.log("running july");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "august":
        console.log("running aug");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "september":
        console.log("running sep");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "october":
        console.log("running oct");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "november":
        console.log("running nov");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "december":
        console.log("running dec");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
}

function calcDays(yearData,calcFinalPartOddDay){
let firstDate = 1;
    var arrr = [];
    //Array for storing sorting days
    var monday = []
    var tuesday = []
    var wednesday = []
    var thursday = []
    var friday = []
    var saturday = []
    var sunday = []
    for (let i = 0; i <yearData.days; i++) {
        // var sum = n + oddDay_Data;
        var sum = (firstDate + calcFinalPartOddDay + yearData.oddDay);
        if (sum > 7) {
            sum = sum % 7;
        }
        arrr.push(sum);
        switch (sum) {
            case 0:
                sunday.push(firstDate);
                break;
            case 1:
                monday.push(firstDate);
                break;
            case 2:
                tuesday.push(firstDate);
                break;
            case 3:
                wednesday.push(firstDate);
                break;
            case 4:
                thursday.push(firstDate);
                break;
            case 5:
                friday.push(firstDate);
                break;
            case 6:
                saturday.push(firstDate);
                break; 

        }
        firstDate++;
    }
    console.log(arrr);
    console.log("sun", sunday);
    console.log("monday", monday);
    console.log("tu", tuesday);
    console.log("wed", wednesday);
    console.log("thu", thursday);
    console.log("fri", friday);
    console.log("sat", saturday);
    for(let i=0;i<=5;i++){
        document.getElementById(`mon${i}`).innerText = monday[i];
        document.getElementById(`tue${i}`).innerText = tuesday[i];
        document.getElementById(`wed${i}`).innerText = wednesday[i];
        document.getElementById(`thu${i}`).innerText = thursday[i];
        document.getElementById(`fri${i}`).innerText = friday[i];
        document.getElementById(`sat${i}`).innerText = saturday[i];
        document.getElementById(`sun${i}`).innerText = sunday[i];
        if(monday[i]==undefined){
            document.getElementById(`mon${i}`).innerText = "";
        }
        if(tuesday[i]==undefined){
            document.getElementById(`tue${i}`).innerText = "";
        }
        if(wednesday[i]==undefined){
            document.getElementById(`wed${i}`).innerText = "";
        }
        if(thursday[i]==undefined){
            document.getElementById(`thu${i}`).innerText = "";
        }
        if(friday[i]==undefined){
            document.getElementById(`fri${i}`).innerText = "";
        }
        if(saturday[i]==undefined){
            document.getElementById(`sat${i}`).innerText = "";
        }
        if(sunday[i]==undefined){
            document.getElementById(`sun${i}`).innerText = "";
        }
    }
    
}

}


// <--------------------------------Data For Leap year Over----------------------------------------------------->

















































// <--------------------------------Data For Non Leap year Start----------------------------------------------------->
//function for Non leap Year
function isNoramlYear(yearProp,monthProp){
    //For Prev year
var prevYear = yearProp -1;

//for Thousandplace calc
var thousandCalc;
//For hundread cal
var hundreadCalc;
//Hundread odd Days
var hundreadOddDays;
// For tens Calc
var tensCalc;
//final tens odd days
var finalTens;
//Calculated final tens
var calcFinalPartOddDay;

console.log("prevYear",prevYear);

    //Filtering Hundreadth place 
    hundreadCalc = prevYear%400;
    console.log("hundreadCalc",hundreadCalc);
    //Calculating odd Days according to [100,200,300]


             if (hundreadCalc > 300) {
                hundreadOddDays = 1;
                tensCalc = hundreadCalc - 300;
                console.log("300ran");
              } else if (hundreadCalc > 200) {
                hundreadOddDays = 3;
                tensCalc = hundreadCalc - 200;
                console.log("200ran");
              } else if (hundreadCalc > 100) {
                hundreadOddDays = 5;
                tensCalc = hundreadCalc - 100;
                console.log("100ran");
              } else {
                hundreadOddDays = 0;
                tensCalc = hundreadCalc;
                console.log("400ran");
              }

             //test
              console.log("tensCalc",tensCalc)
             //
    finalTens= tensCalc / 4;
    //test
  console.log("finalTens",finalTens)
    //
  const integerPart = Math.trunc(finalTens);//interger part
  //test
  console.log("integerPart",integerPart)
  //
  calcFinalPartOddDay = (tensCalc + integerPart) % 7
  console.log("calcFinalPartOddDay",calcFinalPartOddDay);

// <--------------------------------Tens Calculation Over Now Next year Will Start AKA Current----------------------------------------------------->
// <--------------------------------Data For Leap year Start----------------------------------------------------->
//oddDay will give me current 1 day of month data
var year_Data = {
    january: {
        days: 31,
        oddDay: 0,//prev odd day +1 = jan 1
    },
    february: {
        days: 29,
        oddDay: 3,//3+1
    },
    march: {
        days: 31,
        oddDay: 3,//3+1+1
    },
    april: {
        days: 30,
        oddDay: 6,//3+1+3+1
    },
    may: {
        days: 31,
        oddDay: 8,//3+1+3+2+1
    },
    june: {
        days: 30,
        oddDay: 11,//3+1+3+2+3+1
    },
    july: {
        days: 31,
        oddDay: 13,//3+1+3+2+3+2+1
    },
    august: {
        days: 31,
        oddDay: 16,//3+1+3+2+3+2+3+1
    },
    september: {
        days: 30,
        oddDay: 19,//3+1+3+2+3+2+3+3+1
    },
    october: {
        days: 31,
        oddDay: 21,//3+1+3+2+3+2+3+3+2+1
    },
    november: {
        days: 30,
        oddDay: 24,//3+1+3+2+3+2+3+3+2+3+1
    },
    december: {
        days: 31,
        oddDay: 26,//3+1+3+2+3+2+3+3+2+3+2+1
    },

}


switch (monthProp) {
    case "january":
        console.log("running jan");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "february":
        console.log("running feb");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "march":
        console.log("running march");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "april":
        console.log("running apr");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "may":
        console.log("running may");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "june":
        console.log("running june");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "july":
        console.log("running july");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "august":
        console.log("running aug");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "september":
        console.log("running sep");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "october":
        console.log("running oct");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "november":
        console.log("running nov");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
    case "december":
        console.log("running dec");
        calcDays(year_Data[monthProp],calcFinalPartOddDay);
        break;
}

function calcDays(yearData,calcFinalPartOddDay){
let firstDate = 1;
    var arrr = [];
    //Array for storing sorting days
    var monday = []
    var tuesday = []
    var wednesday = []
    var thursday = []
    var friday = []
    var saturday = []
    var sunday = []
    for (let i = 0; i <yearData.days; i++) {
        // var sum = n + oddDay_Data;
        var sum = (firstDate + calcFinalPartOddDay + yearData.oddDay);
        if (sum > 7) {
            sum = sum % 7;
        }
        arrr.push(sum);
        switch (sum) {
            case 0:
                sunday.push(firstDate);
                break;
            case 1:
                monday.push(firstDate);
                break;
            case 2:
                tuesday.push(firstDate);
                break;
            case 3:
                wednesday.push(firstDate);
                break;
            case 4:
                thursday.push(firstDate);
                break;
            case 5:
                friday.push(firstDate);
                break;
            case 6:
                saturday.push(firstDate);
                break; 

        }
        firstDate++;
    }
    console.log(arrr);
    console.log("sun", sunday);
    console.log("monday", monday);
    console.log("tu", tuesday);
    console.log("wed", wednesday);
    console.log("thu", thursday);
    console.log("fri", friday);
    console.log("sat", saturday);
    for(let i=0;i<=5;i++){
        document.getElementById(`mon${i}`).innerText = monday[i];
        document.getElementById(`tue${i}`).innerText = tuesday[i];
        document.getElementById(`wed${i}`).innerText = wednesday[i];
        document.getElementById(`thu${i}`).innerText = thursday[i];
        document.getElementById(`fri${i}`).innerText = friday[i];
        document.getElementById(`sat${i}`).innerText = saturday[i];
        document.getElementById(`sun${i}`).innerText = sunday[i];
        if(monday[i]==undefined){
            document.getElementById(`mon${i}`).innerText = "";
        }
        if(tuesday[i]==undefined){
            document.getElementById(`tue${i}`).innerText = "";
        }
        if(wednesday[i]==undefined){
            document.getElementById(`wed${i}`).innerText = "";
        }
        if(thursday[i]==undefined){
            document.getElementById(`thu${i}`).innerText = "";
        }
        if(friday[i]==undefined){
            document.getElementById(`fri${i}`).innerText = "";
        }
        if(saturday[i]==undefined){
            document.getElementById(`sat${i}`).innerText = "";
        }
        if(sunday[i]==undefined){
            document.getElementById(`sun${i}`).innerText = "";
        }
    }
}

}



















// <--------------------------------Displaying on Cells--------------------------------------------------------->


function getHistory(){
  return document.getElementById("history-value").innerText;//gets the user inputted history
}

function printHistory(num){
  document.getElementById("history-value").innerText = num;//so whatever history is inputted wil be printed cox of this
}
//printHistory("9*8+8");// testing
function getOutput(){
  return document.getElementById("output-value").innerText;
}

function printOutput(num){
  if(num==""){                                                                      //@34
    document.getElementById("output-value").innerText=num;
  }
  else{
      document.getElementById("output-value").innerText = getNumbersWithComma(num);
  }

}

//printOutput("88");// testing

//now we need the result to be separated by  commas//
function getNumbersWithComma(num){
  if(num=="-"){
    return""; // 107
  }
  var n=Number(num); //NUmber(num) means making sure its a NUmber
  var value=n.toLocaleString("en");// toLocaleString() method returns a string with a language sensitive representation of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function.//
  return value;
 }

//printOutput("8888");//testing

//printOutput(""); if we give unfortunately the displayed op wil be shown as 0 when we clear and not blank and clear space so we add a if clause above                             @14


//now we need to convert comma separated number to original number//

function ReverseCommaNumber(num){
  return Number(num.replace(/,/g,'')); //the character you wish to replace specify that between slash and slashg in this case its comma//
}

//alert(ReverseCommaNumber(getOutput())); testing

//now operators

var operator = document.getElementsByClassName("operator"); //observe its Elements for multiple and classname instead of id
for(var i=0; i<operator.length;i++){
operator[i].addEventListener('click',function(){
  if(this.id=="clear"){
    printHistory("");
    printOutput("");
  }
  else if(this.id=="backspace"){
    var output=ReverseCommaNumber(getOutput()).toString(); //first we convert it to num format as its backspace,then we need to convert it to string as we need to remove the last character using substring function. so i think if commas were at the end itl delete that instead so we convert to num
    if(output){
      output=output.substr(01,output.length-1);
      printOutput(output);
    }
  }

  else{                                                     // code for the other operators
    var output = getOutput();
    var history = getHistory();
    if(output==""&&history!=""){                        //Test case2 scenario counter and we add or condition to next if clause at line 73
      if(isNaN(history[history.length-1])){
        history=history.substr(0,history.length-1);
      }
    }
    if(output!="" || history!=""){
      output = output==""?
      output:ReverseCommaNumber(output);                                        // initial condition but to satisfy test case 2 we change it slightly  using conditionalstmt D lil             output=ReverseCommaNumber(output);
      history=history+output; //coz when we click on say - first history should be printed
      if(this.id=="="){
        var result=eval(history); //eval is built in function
        printOutput(result);
        printHistory("");
      }
      else{
        history=history+this.id;
        printHistory(history);
        printOutput(""); //so if we click on say 8 then * then 9 the output and the operator is added to history and when we click = it gets evaluated and line 67 is followed meaning for rest of the operators this condition applies and not for = op
      }
    }
  }
//  alert("The operator clicked:"+this.id);//testing
})
}


var number = document.getElementsByClassName("number"); //observe its Elements for multiple and classname instead of id
for(var i=0; i<number.length;i++){
number[i].addEventListener('click',function(){
  var output = ReverseCommaNumber(getOutput());  //   D           //ok without this or even if we use commafunction after 4-5digits it doeant concatenate  ..oohh i think isNan wont work wihtout ReverseCommaNumber coz toLocale makes it a string @111

  if(output!=NaN){ //meaning it is infact a number
  output=output+this.id; //concatenates
  printOutput(output); //uff so i think ReverseCommaNumber we used to escape is!=Nan den printoutput adds final commas
  }
//  alert("The operator clicked:"+this.id);//testing
})
}


//now when we click on numbers output should get concatenated right.      @58


//now clear button code @ 97


//Test case1: If we try backspacing a negative number we get NaN error to counter this we add a if clause in getCommasNUmber function @28

//Test Case2: if we try to change/replace operator we cannot and during this the history wil be there and output blank  @ 73

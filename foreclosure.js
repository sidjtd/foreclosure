// Step 1
'use strict';
var steve;  //Happy Variables
var stevesLoans;
var month = 0;
var monthsUntilEvicted;

//START CODE#######################################################

function loan(){ // THIS IS A HAPPY FUNCTION

  var account = {         //THIS IS A VARIABLE THAT HAS AN OBJECT ASSOCIATED WITH IT
    borrowed: 550000,
    balance: 286000,
    monthlyPayment: 1700,
    defaulted: 0,
    defaultsToForeclose: 5,
    foreclosed: false               
  };

  //VAR OBJECT-----------------------------------

// Step 2
  function missPayment() {          //This is a function
    account.defaulted = account.defaulted + 1;    

                         //Add 1 to default on account object
    
      /* 2.2 */
    if(account.defaulted >= account.defaultsToForeclose) { 
        account.foreclosed = true;
    }    
  } // function missPayment }}}}}}

  // Step 3
  return {
    getBalance: function(){
        return account.balance;
        //3.1.1
    },// 3.2
    recievePayment: function(amount){
        if (amount < account.monthlyPayment) {
            missPayment();
        }
            account.balance = account.balance - amount;
    },
    getMonthlyPayment: function(){
        return account.monthlyPayment;
    },
    isForeclosed: function(){
        return account.foreclosed;
    }
  };// return bracket }}}}}}}
} 
function borrower(loan){
  var account = {
    monthlyIncome : 1350,
    funds: 2000,
    loan: loan.getMonthlyPayment()
  };
  return {
    getFunds: function(){
        return account.funds;
    },
        makePayment: function(){
            if(account.funds > account.loan){
                account.funds = account.funds - account.loan;
                loan.recievePayment(account.loan);
            }else{
                loan.recievePayment(account.funds);
                account.funds = 0;
            }
        },
        payDay: function(){
            account.funds = account.funds + account.monthlyIncome;                    
        }
  };
}//THIS IS THE BRACKET THAT CLOSES THE ENTIRE LOAN FUNCTION }}}}}}


stevesLoans = loan();
steve = borrower(stevesLoans);

while(stevesLoans.isForeclosed()===false){
  steve.payDay();
  steve.makePayment();
  month++;
}

monthsUntilEvicted = month;
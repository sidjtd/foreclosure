// Step 1
"use strict";
var steve;  //Happy Variables
var steveLoans;
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

    function borrower(loan){
        var account = {
            monthlyIncome : 1350,
            funds: 2000,
            loan: loan
        };
        return {
            getFunds: function(){
                return account.funds;
        },
            makePayment: function(){
                if(account.funds > loan.getMonthlyPayment()){
                    account.funds = account.funds - loan.getMonthlyPayment();
                    loan.recievePayment(loan.getMonthlyPayment());
                }else{
                    loan.recievePayment(account.funds);
                    account.funds = 0;
                }
            }
            payDay: function(){
                account.funds += account.monthlyIncome;                    
            }
    };

// Step 2
    function missPayment(){          //This is a function
/*2.1*/ account.defaulted += 1;                         //Add 1 to default on account object
        /* 2.2 */
        if(account.defaulted>=account.defaultsToForeclose){ 
            account.foreclosed = true;

        }else{
        }
            
    } // function missPayment }}}}}}

    // Step 3
    return {
        getBalance: function(){
            return account.balance;
            // not done!!!!!!!!  3.1.1
        },
        // 3.2
        recievePayment: function(amount){
            if (amount<account.monthlyPayment){
                missPayment();
                account.balance -= amount;
            }
        },

        getMonthlyPayment: function(){
            return account.monthlyPayment;
        },
        isForeclosed: function(){
            return account.foreclosed;
        }
    };// return bracket }}}}}}}
}//THIS IS THE BRACKET THAT CLOSES THE ENTIRE LOAN FUNCTION }}}}}}

var stevesLoan = loan();
var steve = borrower(stevesLoan)

while(steveLoans.isForeclosed){
    steve.payDay();
    steve.makePayment();
    month += 1;
}


//[]

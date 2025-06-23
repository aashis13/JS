let menuinput;
let balance = 17;
let deposit, withdraw;
let transactionhistory = [];
let agree = prompt("You tryna get to us? (y/n): ");

if (agree != "y") {
  console.log("Thik xa hajur, dhanyabad \n");
  // process.exit(0);
  //   return ;
} else {
  console.log("Welcome to Gucci da bank \n");

  do {
    console.log("");
    console.log("");
    menuinput = parseInt(
      prompt(
        "And you'd like to? : \n \n1. Check the monayy \n 2. Deposit the monayy \n 3. Withdraw the monayy \n 4. Exit from the me and you 😏"
      )
    );

    switch (menuinput) {
      case 1:
        console.log("");
        console.log("Tapai ko khaata ma " + balance + "Rs cha \n");
        break;
      case 2:
        deposit = parseInt(prompt("How much you want to Deposite?? : "));
        console.log("");
        console.log("You have deposited " + deposit + "Rs \n");

        balance += deposit;
        transactionhistory.push("Type: Deposit Amount: " + deposit);
        break;
      case 3:
        withdraw = parseInt(prompt("How much you want to withdraw the cash? : "));
        if (withdraw > balance) {
          console.log("");
          console.log("You did't have insufficient banlance \n");
          break;
        } else {
          balance -= withdraw;
          console.log("");
          console.log("You have withdrawn " + withdraw + "Rs \n");
          transactionhistory.push("Type: Withdraw Amount: " + withdraw);
        }
        break;

      case 4:
        console.log("");
        console.log("Thank you! \n");
        break;

      default:
        console.log("");
        console.log("K dhabaunu bhako? Feri try garnuhos! \n");
        break;
    }
  } while (menuinput != 4);
  console.log("Transaction history: \n");
  console.log(transactionhistory);
//   document.getElementById("history1").innerHTML =
//     "Transaction history: \n" + transactionhistory;
}

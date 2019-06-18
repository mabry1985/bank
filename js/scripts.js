//back-end logic

//accountArr logic

function AccountArr() {
  this.accounts = [],
  this.currentId = 0;
}

AccountArr.prototype.addAccount = function (account) {
  account.id = this.assignId();
  this.accounts.push(account);
};

AccountArr.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

AccountArr.prototype.findAccount = function (id) {
  for (i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i]) {
      if (this.accounts[i].id == id) {
        return this.accounts[i];
      }
    }
  };

  return false;
};

//account logic

function Account(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}

Account.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};

Account.prototype.findBalance = function () {
  return this.balance
}













//front-end logic

var accountArr1 = new AccountArr();

var account1 = new Account('Josh', 'Mabry', 0);
var account2 = new Account('Daniel', 'Hongel', 50);
accountArr1.addAccount(account1);
accountArr1.addAccount(account2);



function showBalance() {
  $('#balance').text(this.balance);
}

$(document).ready(function() {
  $('form.form-one').submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $('input#first-name').val();
    var inputtedLastName = $('input#last-name').val();
    var inputtedInitialDeposit = $('input#initial-deposit').val();
    $('input#first-name').val('');
    $('input#last-name').val('');
    $('input#initial-deposit').val('');
    console.log(inputtedFirstName);
    var newAccount = new Account(inputtedFirstName, inputtedLastName, inputtedInitialDeposit);
    accountArr1.addAccount(newAccount);
    $('#balance').text('$' + inputtedInitialDeposit);
  })
});

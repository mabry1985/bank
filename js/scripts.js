//back-end logic
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

function Account(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}

Account.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};

function MasterBank() {
	this.account = [];
	this.accountID = 0;
}

function BankAccount(userName, balance) {
	this.userName = userName;
	this.currentBalance = balance;
	this.accountId;
}

BankAccount.prototype.makeDeposit = function(amount) {
	this.currentBalance += amount;
};

BankAccount.prototype.makeWithdrawal = function(amount) {
	this.currentBalance -= amount;
};

BankAccount.prototype.getBalance = function() {
	return this.currentBalance;
};

$(document).ready(function() {
	console.log('JavaScipt is working');

	//on click function
	$('form').submit(function(event) {
		event.preventDefault();
		console.log('click');
	});
});

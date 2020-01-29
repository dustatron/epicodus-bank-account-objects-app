// ----------- main bank database
function MasterBank() {
	this.accounts = [];
	this.numberOfAccounts = 0;
}
//Take account and push it too the accounts database
MasterBank.prototype.addAccount = function(accountObject) {
	this.accounts.push(accountObject);
	return accountObject.accountId;
};

MasterBank.prototype.findById = function(id) {
	for (let i = 0; i < this.accounts.length; i++) {
		if ((this.accounts[i].accountId = id)) {
			return this.accounts[i];
		}
	}
};

// ------------- The bank account object
function BankAccount(userName, balance) {
	this.userName = userName;
	this.currentBalance = balance;
	this.accountId = this.makeAccountId();
}

BankAccount.prototype.makeAccountId = function() {
	return (masterBank.numberOfAccounts += 1);
};

BankAccount.prototype.makeDeposit = function(amount) {
	this.currentBalance += amount;
	return this.currentBalance;
};

BankAccount.prototype.makeWithdrawal = function(amount) {
	this.currentBalance -= amount;
	return this.currentBalance;
};

BankAccount.prototype.getBalance = function() {
	return this.currentBalance;
};

function createAccount(name, deposit) {
	console.log(name);
	var bankAccount = new BankAccount(name, deposit);
	return masterBank.addAccount(bankAccount);
}

function printBalance(account) {
	$('#current-balance').text(account.currentBalance);
}

// instantiate bank DB
var masterBank = new MasterBank();

$(document).ready(function() {
	//on click function
	$('#new-account').submit(function(event) {
		event.preventDefault();
		console.log('newAccount');

		var userName = $('#name').val();
		var firstDeposit = parseInt($('#startingDepositAmount').val());
		var title = $('#new-account-heading');
		var idNumber = createAccount(userName, firstDeposit);
		$('#depositAccountId').val(idNumber);
		$('#withdawalAccountId').val(idNumber);
		title.html('Your account number is ' + idNumber);
		printBalance(masterBank.findById(idNumber));
	});

	$('#deposit').submit(function(event) {
		event.preventDefault();
		var accountNumber = parseInt($('#depositAccountId').val());
		var depositAmount = parseInt($('#depositAmount').val());
		var userAccount = masterBank.findById(accountNumber);
		userAccount.makeDeposit(depositAmount);
		printBalance(masterBank.findById(accountNumber));
	});

	$('#withdrawal').submit(function(event) {
		event.preventDefault();
		var accountNumber = parseInt($('#withdawalAccountId').val());
		var withdrawalAmount = parseInt($('#withdrawalAmount').val());
		var userAccount = masterBank.findById(accountNumber);
		userAccount.makeWithdrawal(withdrawalAmount);
		printBalance(masterBank.findById(accountNumber));
	});
});

let balance = 1000;

function deposit() {
    let amt = Number(document.getElementById("amount").value);
    balance += amt;
    document.getElementById("balance").innerText = balance;
}

function withdraw() {
    let amt = Number(document.getElementById("amount").value);
    balance -= amt;
    document.getElementById("balance").innerText = balance;
}

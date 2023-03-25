let billamount = document.getElementById("billamount");
let percentagetip = document.getElementById("percentagetip");
let tipamount = document.getElementById("tipamount");
let totalamount = document.getElementById("total");
let errormsg = document.getElementById("text");

function fun() {
    let billamountvalue = billamount.value;
    let percentagetipvalue = percentagetip.value;

    if (billamountvalue === "") {
        errormsg.textContent = "enter valid input";
    } else if (percentagetipvalue === "") {
        errormsg.textContent = "enter valid input";
    } else {
        errormsg.textContent = "";
        let enterdbill = parseInt(billamountvalue);
        let enterdtip = parseInt(percentagetipvalue);
        let calculatetipvalue = (enterdtip / 100) * enterdbill;
        let calulatedtotalvalue = enterdbill + calculatetipvalue;
        tipamount.value = calculatetipvalue;
        totalamount.value = calulatedtotalvalue;
    }

}
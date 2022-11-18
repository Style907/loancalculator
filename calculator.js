window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  values = {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
  
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 25000
  document.getElementById("loan-years").value = 5
  document.getElementById("loan-rate").value = 4.5
  document.getElementById('monthly-payment').innerText = "$466.07"
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  getCurrentUIValues();
  calculateMonthlyPayment(values)
  updateMonthly(monthly)

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const arr = Object.values(values)
  let p = arr[0]
  let n = arr[1] * 12
  let i = (arr[2]/100) / 12
  let x = Math.pow((1 + i), -n)
  let num = (p*i) / (1-x)
  let total = Math.floor(num*100)/100
  monthly ={
    payment: total
  }
  return total
 
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const arr = Object.values(monthly).toString()
  const payment = document.getElementById('monthly-payment')
  payment.innerText = "$" + arr
}

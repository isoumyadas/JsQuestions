const tipForm = document.querySelector("#tipForm");
const billAmount = document.querySelector("#billAmountInput");
const tipPercentInput = document.querySelector("#tipPercentInput");
const submitBtn = document.querySelector("#submitBtn");
const dis = document.querySelector("#dis");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const tipam = Number(tipPercentInput.value);
  const billam = Number(billAmount.value);

  const tipAmount = (billam * tipam) / 100;
  console.log(typeof tipAmount);
  let totalAmount = billam + tipAmount;
  console.log(typeof totalAmount);

  dis.innerHTML = `
  
  <p> Tip Amount: ${tipAmount.toFixed(2)} </p>

  <p> Total Amount: ${totalAmount.toFixed(2)} </p>
  
  `;
});

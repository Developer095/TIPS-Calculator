// alert("YO");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("calculate");
  const total = document.getElementById("result");
  const billInput = document.getElementById("valueIn");
  const tipInput = document.getElementById("tipIn");

  btn.addEventListener("click", () => {
    const bill = document.getElementById("valueIn").value;
    const tip = document.getElementById("tipIn").value;

    if (isNaN(bill) || isNaN(tip) || bill < 0 || tip < 0) {
      total.textContent = "Please enter valid positive numbers!";
      return;
    }

    console.log(bill);
    console.log(tip);
    total.innerHTML = `Total tip is: $ ${tipPrice(bill, tip)}`;

    console.log(tipPrice(bill, tip));

    setTimeout(() => {
      billInput.value = "";
      tipInput.value = "";
      total.textContent = "";
    }, 1500);
  });

  function tipPrice(bill, tip) {
    let value = (tip / 100) * bill;
    return value;
  }
});

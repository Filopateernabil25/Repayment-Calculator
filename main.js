function Add() {
  let Mortgage_Amount = parseInt(
    document.getElementById("Mortgage_Amount").value
  );
  let Mortgage_Term = parseInt(document.getElementById("Mortgage_Term").value);
  let Interest_Rate = parseInt(document.getElementById("Interest_Rate").value);
  let h2 = document.getElementById("h2");
  let h3 = document.getElementById("h3");
  let h4 = document.getElementById("h4");
  let Rat = Interest_Rate * 0.01;
  const result_rate = Rat * Mortgage_Term * Mortgage_Amount;
  const result_Total = Mortgage_Amount + result_rate;
  const Months = Mortgage_Term * 12;
  const one_Month = result_Total / Months;

  h2.innerHTML = `The Interest Rate:<span> ${result_rate} %</span>`;
  h3.innerHTML = `The Total:<span> ${result_Total}</span>`;
  h4.innerHTML = `The Monthly installment:<span> ${one_Month}</span>`;
  let img = document.getElementsByTagName("img")[1];
  img.removeAttribute("src");
}

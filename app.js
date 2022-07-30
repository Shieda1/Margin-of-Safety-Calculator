// https://calculator.swiftutors.com/margin-of-safety-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const marginofSafetyRadio = document.getElementById('marginofSafetyRadio');
const budgetedSalesRadio = document.getElementById('budgetedSalesRadio');
const breakEvenSalesRadio = document.getElementById('breakEvenSalesRadio');

let marginofSafety;
let budgetedSales = v1;
let breakEvenSales = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

marginofSafetyRadio.addEventListener('click', function() {
  variable1.textContent = 'Budgeted Sales';
  variable2.textContent = 'Break Even Sales';
  budgetedSales = v1;
  breakEvenSales = v2;
  result.textContent = '';
});

budgetedSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Margin of Safety';
  variable2.textContent = 'Break Even Sales';
  marginofSafety = v1;
  breakEvenSales = v2;
  result.textContent = '';
});

breakEvenSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Margin of Safety';
  variable2.textContent = 'Budgeted Sales';
  marginofSafety = v1;
  budgetedSales = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(marginofSafetyRadio.checked)
    result.textContent = `Margin of Safety = ${computeMarginofSafety().toFixed(2)} %`;

  else if(budgetedSalesRadio.checked)
    result.textContent = `Budgeted Sales = ${computeBudgetedSales().toFixed(2)}`;

  else if(breakEvenSalesRadio.checked)
    result.textContent = `Break Even Sales = ${computeBreakEvenSales().toFixed(2)}`;
})

// calculation

function computeMarginofSafety() {
  return ((Number(budgetedSales.value) - Number(breakEvenSales.value)) / Number(budgetedSales.value)) * 100;
}

function computeBudgetedSales() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeBreakEvenSales() {
  return Number(budgetedSales.value) - ((Number(marginofSafety.value) / 100) * Number(budgetedSales.value));
}
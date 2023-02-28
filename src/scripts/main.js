'use strict';

import companies from '../scripts/companies';
import getAmount from '../scripts/getAmount';

let storage = 0;
let transfer = 0;
const scale = 6;
const amountsOfAll = {};

const backblaze = document.getElementById('backblazeCosts');
const bunny = document.getElementById('bunnyCosts');
const scaleway = document.getElementById('scalewayCosts');
const vultr = document.getElementById('vultrCosts');

const backblazeGraph = document.getElementById('backblazeGraph');
const bunnyGraph = document.getElementById('bunnyGraph');
const scalewayGraph = document.getElementById('scalewayGraph');
const vultrGraph = document.getElementById('vultrGraph');

const storageRange = document.getElementById('storageRange');
const transferRange = document.getElementById('transferRange');
const storageValue = document.getElementById('storageValue');
const transferValue = document.getElementById('transferValue');

const radioButtonsHddSdd = document.querySelectorAll('input[name="bunny"]');
const radioButtonsMultiSingle = document.querySelectorAll('input[name="scaleway"]');

radioButtonsMultiSingle[1].checked = true;
radioButtonsHddSdd[0].checked = true;

storageValue.innerText = `${storageRange.value} GB`;
transferValue.innerText = `${transferRange.value} GB`;

function getColor(companyName) {
  const index = companies.findIndex(el => el.name === companyName);

  return companies[index].color;
};

function renderGraph() {
  companies.forEach((company) => {
    const amount = +getAmount(company, storage, transfer);
    amountsOfAll[company.name] = amount;
  });

  const values = Object.values(amountsOfAll);
  const minAmount = Math.min(...values);

  for (const key in amountsOfAll) {
    eval(key).innerText = `${amountsOfAll[key]}$`;
    eval(`${key}Graph`).style.width =
      Math.trunc(amountsOfAll[key] * scale) + 'px';

    (amountsOfAll[key] === minAmount)
      ? eval(`${key}Graph`).style.backgroundColor = getColor(key)
      : eval(`${key}Graph`).style.backgroundColor = 'lightgrey';
  }
};

const onChangeRange = (event) => {
  const target = event.currentTarget;
  if (target.id === 'storageRange') {
    storageValue.innerText = `${event.currentTarget.value} GB`;
    storage = +event.currentTarget.value;
  } else {
    transferValue.innerText = `${event.currentTarget.value} GB`;
    transfer = +event.currentTarget.value;
  }

  renderGraph();
};

const onChangeButtonHddSdd = (e) => {
  companies[1].option = (radioButtonsHddSdd[1].checked) ? true : false;
  renderGraph();
};

const onChangeButtonMultiSingle = (e) => {
  companies[2].option = (radioButtonsMultiSingle[1].checked) ? true : false;
  renderGraph();
};

window.onload = (e) => {
  renderGraph();
};

storageRange.addEventListener('input', onChangeRange);
transferRange.addEventListener('input', onChangeRange);

radioButtonsHddSdd.forEach((elem) => {
  elem.addEventListener('change', onChangeButtonHddSdd);
});

radioButtonsMultiSingle.forEach((elem) => {
  elem.addEventListener('change', onChangeButtonMultiSingle);
});

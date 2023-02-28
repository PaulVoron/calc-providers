'use strict';

function getAmount(company, storage, transfer) {
  let amount = 0;
  let amountStorage = 0;
  let amountTransfer = 0;

  if (!company.option) {
    amountStorage = (storage > company.storageFree1)
      ? (storage - company.storageFree1) * company.storagePrice1
      : 0;

    amountTransfer = (transfer > company.transferFree1)
      ? (transfer - company.transferFree1) * company.transferPrice1
      : 0;

  } else {
    amountStorage = (storage > company.storageFree2)
      ? (storage - company.storageFree2) * company.storagePrice2
      : 0;

    amountTransfer = (transfer > company.transferFree2)
      ? (transfer - company.transferFree2) * company.transferPrice2
      : 0;
  }

  amount = amountStorage + amountTransfer;
  amount = (amount < company.minPayment) ? company.minPayment : amount;

  amount = (company.maxPayment && amount > company.maxPayment)
    ? company.maxPayment
    : amount;

  return amount.toFixed(2);
}

export default getAmount;

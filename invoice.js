let washCarBtn = document.getElementById("btn-wash-car");
let mowLawnBtn = document.getElementById("btn-mow-lawn");
let pullWeedsBtn = document.getElementById("btn-pull-weeds");
let sendInvoiceBtn = document.getElementById("btn-send-invoice");

let servicesRequestedContainerEl = document.getElementById(
  "services-requested-container"
);
let totalContainerEl = document.getElementById("total-container-el");
let totalAmountEl = document.getElementById("total-amount-el");

let servicesRequested = [];
let totalAmount = 0;

let isWashCarAlive = true;
let isMowLawnAlive = true;
let isPullWeedsAlive = true;

washCarBtn.addEventListener("click", function () {
  if (isWashCarAlive) {
    servicesRequested.unshift({ description: "Wash Car", price: 10 });
    totalAmount += servicesRequested[0].price;
    isWashCarAlive = false;
    renderServicesRequested();
  } else {
    alert("you already have this on your list");
  }
});

mowLawnBtn.addEventListener("click", function () {
  if (isMowLawnAlive) {
    servicesRequested.unshift({ description: "Mow Lawn", price: 20 });
    totalAmount += servicesRequested[0].price;
    isMowLawnAlive = false;
    renderServicesRequested();
  } else {
    alert("you already have this on your list");
  }
});

pullWeedsBtn.addEventListener("click", function () {
  if (isPullWeedsAlive) {
    servicesRequested.unshift({ description: "Pull Weeds", price: 30 });
    totalAmount += servicesRequested[0].price;
    isPullWeedsAlive = false;
    renderServicesRequested();
  } else {
    alert("you already have this on your list");
  }
});

sendInvoiceBtn.addEventListener("click", function () {
  alert("Invoice sent!");
  resetInvoice();
});

function renderTotalAmount() {
  totalAmountEl.innerHTML = `<td class="note">We accept cash, credit card, or Paypal</td>
             <td class="total-amount">$${totalAmount}</td>`;
}

function renderServicesRequested() {
  let listOfServices = "";
  for (let i = 0; i < servicesRequested.length; i++) {
    listOfServices += `<tr><td>${servicesRequested[i].description}<button id="btn-remove">Remove</button></td>
                <td><span class="dollar-sign">$</span>${servicesRequested[i].price}</td></tr>`;
  }

  servicesRequestedContainerEl.innerHTML = listOfServices;
  renderTotalAmount();
  activateRemoveBtn();
}

function activateRemoveBtn() {
  let removeBtn = document.getElementById("btn-remove");
  removeBtn.addEventListener("click", function () {
    totalAmount -= servicesRequested[0].price;
    servicesRequested.shift();

    renderServicesRequested();
    renderTotalAmount();
  });
}

function resetInvoice() {
  servicesRequested = [];
  totalAmount = 0;
  isWashCarAlive = true;
  isMowLawnAlive = true;
  isPullWeedsAlive = true;
  servicesRequestedContainerEl.innerHTML =
    "<tr><td><em>Click a button to add services</em></td></tr>";
  totalAmountEl.innerHTML = `<td class="note"></td>
                <td class="total-amount"><span id="total-amount">$${totalAmount}</span></td>`;
}

// TO DO:

// render confirmation + order summary in alert
// change alert to new page with confirmation?
// remove button

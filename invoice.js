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
    servicesRequested.push({ description: "Wash Car", price: "10" });
    totalAmount += 10;
    isWashCarAlive = false;
    renderServicesRequested();
    renderTotalAmount();
  } else {
    alert("you already have this on your list");
  }
});

mowLawnBtn.addEventListener("click", function () {
  if (isMowLawnAlive) {
    servicesRequested.push({ description: "Mow Lawn", price: "20" });
    totalAmount += 20;
    isMowLawnAlive = false;
    renderServicesRequested();
    renderTotalAmount();
  } else {
    alert("you already have this on your list");
  }
});

pullWeedsBtn.addEventListener("click", function () {
  if (isPullWeedsAlive) {
    servicesRequested.push({ description: "Pull Weeds", price: "30" });
    totalAmount += 30;
    isPullWeedsAlive = false;
    renderServicesRequested();
    renderTotalAmount();
  } else {
    alert("you already have this on your list");
  }
});

function renderTotalAmount() {
  totalAmountEl.innerHTML = `<td class="note">We accept cash, credit card, or Paypal</td>
             <td class="total-amount">$${totalAmount}</td>`;
}

function renderServicesRequested() {
  let listOfServices = "";
  for (let i = 0; i < servicesRequested.length; i++) {
    listOfServices += `<tr><td>${servicesRequested[i].description}<button class="btn-remove">Remove</button></td>
                <td><span class="dollar-sign">$</span>${servicesRequested[i].price}</td></tr>`;
  }

  servicesRequestedContainerEl.innerHTML = listOfServices;
}

sendInvoiceBtn.addEventListener("click", function () {
  alert("Invoice sent! This is what you requested: ");
});
// TO DO:

// reset after invoice sent
// render confirmation + order summary in alert
// change alert to new page with confirmation?
// remove button
// envelope icon for invoice button

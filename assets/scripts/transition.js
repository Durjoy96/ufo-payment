const transactionsHistory = getElement("transactionsHistory");
const noTransactionText = getElement("noTransactionText");

function setCashInHistory(amount) {
    noTransactionText.classList.add("hidden");
     const item = `<li class="p-3 border border-green-100 rounded-lg bg-green-50 flex gap-2 items-center">
                        <div class="bg-green-200 inline-block w-10 h-10 rounded-full relative">
                            <img class="max-w-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src="assets/icons/cashin.png" alt="cashin">
                        </div>
                        <div>
                            <p class="text-green-900 text-xl font-bold">+$${amount}</p>
                        </div>
                    </li>`;
    transactionsHistory.innerHTML = item + transactionsHistory.innerHTML;
};

function setCashOutHistory(amount) {
    noTransactionText.classList.add("hidden");
     const item = ` <li class="p-3 border border-red-100 rounded-lg bg-red-50 flex gap-2 items-center">
                        <div class="bg-red-200 inline-block w-10 h-10 rounded-full relative">
                            <img class="max-w-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src="assets/icons/cashout.png" alt="cashin">
                        </div>
                        <div>
                            <p class="text-red-900 text-xl font-bold">-$${amount}</p>
                        </div>
                    </li>`;
    transactionsHistory.innerHTML = item + transactionsHistory.innerHTML;
};
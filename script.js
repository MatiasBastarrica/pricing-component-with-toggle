const checkbox = document.querySelector("input[type='checkbox']");
const monthlyPrices = document.querySelectorAll(".monthly-price");
const annuallyPrices = document.querySelectorAll(".annually-price");

function toggleBillingCycle() {
  monthlyPrices.forEach((monthlyPrice) => {
    monthlyPrice.classList.toggle("hide");
  });

  annuallyPrices.forEach((annuallyPrice) => {
    annuallyPrice.classList.toggle("hide");
  });
}

checkbox.addEventListener("click", () => {
  toggleBillingCycle();
});

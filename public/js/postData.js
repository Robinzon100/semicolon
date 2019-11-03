const utilityName = document.querySelector("#utilityName");
const utilityPrice = document.querySelector("#utilityPrice");
const inputBtn = document.querySelector("#inputBtn");
const userId = document.querySelector("#userId");

inputBtn.addEventListener("click", () => {
  const Name = utilityName.value;
  const Price = utilityPrice.value;

  console.log(Name, Price);
});

let number = 1;

function less() {
  number = number - 1;
  display();
}
function addition() {
  number = number + 1;
  display();
}

function display() {
  const p = document.querySelector(".quant");
  p.innerHTML = number;
}

display();

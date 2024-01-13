let counter = 1;

function increment() {
  if (counter < 99) {
    counter++;
    updateCounter();
  }
  updateButtons();
}

function decrement() {
  if (counter > 1) {
    counter--;
    updateCounter();
  }
  updateButtons();
}

function updateCounter() {
  document.getElementById("counter").innerText = counter;
}

function updateButtons() {
  const decrementButton = document.querySelector("button:nth-child(1)");
  const incrementButton = document.querySelector("button:nth-child(2)");

  if (counter === 1) {
    decrementButton.disabled = true;
  } else {
    decrementButton.disabled = false;
  }

  if (counter === 99) {
    incrementButton.disabled = true;
  } else {
    incrementButton.disabled = false;
  }
}
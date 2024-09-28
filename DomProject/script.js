const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
const state = document.getElementById("status");

let currentValue = 0;

// Increment Button
incBtn.addEventListener('click', function () {
    currentValue++;
    state.innerHTML = `<p>Your Current Count is: ${currentValue}</p>`;
});

// Decrement Button
decBtn.addEventListener('click', function () {
    if (currentValue === 0) {
        state.innerHTML = `<p>Count Value cannot go below 0</p>`;
        state.style.color = "red"; // Change text color to red
    } else {
        currentValue--;
        state.innerHTML = `<p>Your Current Count is: ${currentValue}</p>`;
    }
});

// Reset Button
resetBtn.addEventListener('click', function () {
    currentValue = 0;
    state.innerHTML = `<p>Your Current Count is: ${currentValue}</p>`;
});

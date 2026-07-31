let boardingOpen = true;

function toggleBoarding() {
    const button = document.getElementById("boardingButton");
    const status = document.getElementById("boardingStatus");

    boardingOpen = !boardingOpen;

    if (boardingOpen) {
        button.textContent = "⚓ NOW BOARDING";
        status.textContent = "Passenger registration is currently OPEN.";
    } else {
        button.textContent = "🚫 BOARDING CLOSED";
        status.textContent = "Passenger registration is currently CLOSED.";
    }
}

let boardingOpen = true;

function toggleBoarding() {
    const button = document.getElementById("boardingButton");
    const status = document.getElementById("boardingStatus");

    if (boardingOpen) {
        button.innerHTML = "🚫 BOARDING CLOSED";
        status.innerHTML = "Passenger registration is currently CLOSED.";
    } else {
        button.innerHTML = "⚓ NOW BOARDING";
        status.innerHTML = "Passenger registration is currently OPEN.";
    }

    boardingOpen = !boardingOpen;
}

const db = window.db;
const { doc, onSnapshot, updateDoc } = window;

const boardingRef = doc(db, "system", "boarding");

const button = document.getElementById("boardingButton");
const status = document.getElementById("boardingStatus");

let boardingOpen = false;

// Escuchar cambios en tiempo real
onSnapshot(boardingRef, (snapshot) => {

    if (!snapshot.exists()) return;

    boardingOpen = snapshot.data().open;

    if (boardingOpen) {
        button.innerHTML = "⚓ NOW BOARDING";
        status.innerHTML = "Passenger registration is currently OPEN.";
    } else {
        button.innerHTML = "🚫 BOARDING CLOSED";
        status.innerHTML = "Passenger registration is currently CLOSED.";
    }

});

// Cambiar estado
window.toggleBoarding = async function () {

    await updateDoc(boardingRef, {
        open: !boardingOpen
    });

};

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#booking-form");
    const tableBody = document.querySelector("#booking-table tbody");

    loadBookings();

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const field = document.querySelector("#field").value.trim();
        const date = document.querySelector("#date").value;
        const time = document.querySelector("#time").value;

        if (!name || !field || !date || !time) {
            alert("Please fill out all fields.");
            return;
        }

        const booking = { name, field, date, time };
        saveBooking(booking);

        addBookingToTable(booking);

        form.reset();
        alert("Booking successfully submitted!");
    });

    function saveBooking(booking) {
        const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(booking);
        localStorage.setItem("bookings", JSON.stringify(bookings));
    }

    function loadBookings() {
        const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.forEach((booking) => addBookingToTable(booking));
    }

    function addBookingToTable(booking) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${booking.name}</td>
            <td>${booking.field}</td>
            <td>${booking.date}</td>
            <td>${booking.time}</td>
        `;
        tableBody.appendChild(row);
    }
});

'use strict';

const container = document.getElementById('screen-container');

const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const movieSelected = document.getElementById('movie');
const count = document.getElementById('count');
const total = document.getElementById('total');
let ticketPrice = movieSelected.value;

// Function
const updateSelecteds

// event listeners for movie selectors
movieSelected.addEventListener('change', (e) => {
  ticketPrice = Number(e.target.value);
});

container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    count.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length* ticketPrice
  }
});

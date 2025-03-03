let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parking) {
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }

  parking.forEach((e) => {
    e.forEach((plaza) => {
      if (plaza == 1) {
        state.totalSlots++;
        state.occupiedSlots++;
      } else if (plaza == 2) {
        state.totalSlots++;
        state.availableSlots++;
      }
    })
  });

  return state;
}

console.log(getParkingLotState(parkingState))

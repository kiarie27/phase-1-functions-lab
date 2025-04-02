// Code your solution in this file!
// Calculate the distance from Headquarters (42nd street) in blocks
function distanceFromHqInBlocks(street) {
    // Calculate the absolute difference from 42
    return Math.abs(street - 42);
  }

  // Calculate the distance from Headquarters in feet (1 block = 264 feet)
  function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
  }

  // Calculate the distance travelled in feet between two streets
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }

  // Calculate the fare price based on the distance travelled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }

  // Export functions for testing purposes
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
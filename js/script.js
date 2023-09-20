function getShippingCost(country) {
  let message;
  // Change code below this line

  switch (
    country // Change this line
  ) {
    case 'China': // Change this line
      message = 'Shipping to China will cost 100 credits'; // Change this line
      break;

    case 'Chile': // Change this line
      message = 'Shipping to Chile will cost 250 credits'; // Change this line
      break;

    case 'Australia': // Change this line
      message = 'Shipping to Australia will cost 170 credits'; // Change this line
      break;

    case 'Jamaica': // Change this line
      message = 'Shipping to Jamaica will cost 120 credits'; // Change this line
      break;

    default: // Change this line
      message = 'Sorry, there is no delivery to your country'; // Change this line
  }

  // Change code above this line
  return message;
}

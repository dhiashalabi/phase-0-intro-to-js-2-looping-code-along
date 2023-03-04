// Code your solutions in this file

function writeCards(names, eventName) {
  const thankYouCards = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    thankYouCards.push(message);
  }

  return thankYouCards;
}

function countDown(number) {
  let i = number;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}

countDown(10);
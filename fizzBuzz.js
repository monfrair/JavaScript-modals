// fizz buzz for fun exercise in JS had been doing in python
for (let i = 1; i < 101; i++)
  if (i % 3 === 0 && i % 5 === 0) {
    console.log([i], '🎉🎉_________FizzBuzz /3 and 5');
  } else if (i % 3 === 0) {
    console.log([i], '🥤_________Fizz /3');
  } else if (i % 5 === 0) {
    console.log([i], '💥_________Buzz /5');
  } else {
    console.log([i], 'NADA');
  }

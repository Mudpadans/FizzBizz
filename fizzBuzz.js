// Write your solution below this line:
for (i = 1; i < 51; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log('fizz');
    } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i);
    }
  }
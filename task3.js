function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  

  const num = 5;
  const result = factorial(num);
  console.log(result); // 120
  
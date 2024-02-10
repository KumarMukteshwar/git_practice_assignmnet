function identifyPrime(num) {
    // Write code here
   for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i != 0) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");

}

    function calculate() {
      const num1 = parseInt(document.getElementById("num1").value);
      const num2 = parseInt(document.getElementById("num2").value);   


      // Calculate sum, product, difference, and remainder
      const sum = num1 + num2;
      const product = num1 * num2;
      const difference = num1 - num2;
      const remainder = num1 % num2;

      // Display the results
      document.getElementById("result").innerHTML = `
        Sum: ${sum}<br>
        Product: ${product}<br>
        Difference: ${difference}<br>
        Remainder: ${remainder}
      `;
    }
 
function emicalculator() {
    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("rate").value);
    const tenure = parseFloat(document.getElementById("tenure").value);
  
    if (isNaN(principal) || isNaN(interestRate) || isNaN(tenure)) {
      document.getElementById("result").textContent = "Please enter valid input.";
      return;
    }
  
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
  
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  
    document.getElementById("result").innerHTML = "EMI: " + emi.toFixed(2);

  }
  
 
  
      

const calculateBMI = () => {
  const weight = document.getElementById("weightInput").value;
  const height = document.getElementById("heightInput").value / 100; // Convert cm to m
  const bmi = weight / (height * height);
  document.getElementById("result").textContent = `Your BMI is ${bmi.toFixed(
    2
  )}.`;
};

document.getElementById("calculateBtn").addEventListener("click", calculateBMI);

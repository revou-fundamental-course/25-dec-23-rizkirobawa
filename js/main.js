function calculate() {
  var sideA = parseFloat(document.getElementById("sideA").value);
  var sideB = parseFloat(document.getElementById("sideB").value);
  var sideC = parseFloat(document.getElementById("sideC").value);

  // Hitung luas segitiga menggunakan Rumus Heron
  var s = (sideA + sideB + sideC) / 2;
  var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

  // Hitung keliling segitiga
  var perimeter = sideA + sideB + sideC;

  // Tampilkan hasil
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Luas Segitiga: " + area.toFixed(2) + "<br>Keliling Segitiga: " + perimeter.toFixed(2);
}
function reset() {
  document.getElementById("formSegitiga").reset();
  document.getElementById("result").innerHTML = "";
}
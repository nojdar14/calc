document.getElementById("btn").addEventListener("click", click);

function click() {
  let num1 = Number(document.getElementById("in1").value);

  let round1 = num1.toFixed(2);
  round1 = Number(round1);

  let num2 = Number(document.getElementById("in2").value);

  let s1 = round1.toFixed(2);
  document.getElementById("s1").innerHTML = "$" + s1;

  let s2 = (round1 * num2).toFixed(2);
  document.getElementById("s2").innerHTML = "$" + s2;

  let s3 = (round1 * num2 * 2).toFixed(2);
  document.getElementById("s3").innerHTML = "$" + s3;

  let s4 = (round1 * num2 * 4.34524).toFixed(2);
  document.getElementById("s4").innerHTML = "$" + s4;

  let s5 = (round1 * num2 * 52.1429).toFixed(2);
  document.getElementById("s5").innerHTML = "$" + s5;
}

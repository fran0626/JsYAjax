// Palíndromo
function checkPalindrome() {
  const input = document.getElementById("palindromeInput").value.replace(/\s+/g, '').toLowerCase();
  const result = input === input.split('').reverse().join('') ? 'Es un palíndromo' : 'No es un palíndromo';
  document.getElementById("palindromeResult").innerText = result;
}

// Comparar números
function compareNumbers() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  let result = '';
  if (n1 > n2) result = `El mayor es ${n1}`;
  else if (n2 > n1) result = `El mayor es ${n2}`;
  else result = 'Ambos son iguales';
  document.getElementById("compareResult").innerText = result;
}

// Mostrar vocales
function findVowels() {
  const input = document.getElementById("vowelInput").value.toLowerCase();
  const vocales = input.match(/[aeiouáéíóú]/gi);
  document.getElementById("vowelResult").innerText = vocales ? vocales.join(', ') : 'No se encontraron vocales';
}

// Contar vocales
function countVowels() {
  const input = document.getElementById("countInput").value.toLowerCase();
  const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (const char of input) {
    if (counts.hasOwnProperty(char)) counts[char]++;
  }
  const result = Object.entries(counts).map(([v, c]) => `${v}: ${c}`).join(', ');
  document.getElementById("countResult").innerText = result;
}

// AJAX
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("urlInput").value = window.location.href;
});

function loadContent() {
  const url = document.getElementById("urlInput").value;
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    const states = ["No iniciada", "Conexión establecida", "Recibido", "Procesando", "Completada"];
    document.getElementById("ajaxState").innerText = states[xhr.readyState] || "Desconocido";

    if (xhr.readyState === 4) {
      document.getElementById("ajaxContent").innerText = xhr.responseText;
      document.getElementById("ajaxHeaders").innerText = xhr.getAllResponseHeaders();
      document.getElementById("ajaxStatus").innerText = `${xhr.status} ${xhr.statusText}`;
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}

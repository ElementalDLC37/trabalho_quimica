window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  if (e.results[0].isFinal) {
    if (text.includes("é hora do show")) {
      window.location.href = "http://localhost:8080/home.php"
    }

    if (text.includes("acidente")) {
      window.location.href = "http://localhost:8080/pre_acidente.php"
    }

    if (text.includes("conhecendo a tragédia")) {
      window.location.href = "http://localhost:8080/pos_acidente.php"
    }

    if (text.includes("conhecendo os numeros")) {
      window.location.href = "http://localhost:8080/estatisticas_e_consequencias.php"
    }

    if (text.includes("conhecendo mais a fundo")) {
      window.location.href = "http://localhost:8080/mais_a_fundo.php"
    }

    if (text.includes("conhecendo o presente")) {
      window.location.href = "http://localhost:8080/fukushima_na_atualidade.php"
    }

    if (text.includes("bara")) {
      window.location.href = "https://www.youtube.com/watch?v=RNssmVzgsjE"
    }
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();


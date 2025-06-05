document
  .getElementById("formHeroi")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nomeHeroi").value;
    const vitorias = parseInt(document.getElementById("vitorias").value);
    const derrotas = parseInt(document.getElementById("derrotas").value);

    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }

    const resultado = `O Herói ${nome} tem saldo de ${saldoVitorias} e está no nível de ${nivel}.`;
    document.getElementById("resultado").textContent = resultado;
  });

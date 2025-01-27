function runDraw() {
    const namesInput = document.getElementById('names').value;
    const loadingDiv = document.getElementById('loading');
    const resultDiv = document.getElementById('result');
    const loadingIcon = document.getElementById('loading-icon');

    if (!namesInput.trim()) {
        resultDiv.textContent = "Por favor, introduce al menos un nombre.";
        resultDiv.classList.remove("hidden");
        resultDiv.style.color = "#ff0000";
        return;
    }

    const names = namesInput.split(',').map(name => name.trim().toLowerCase()).filter(name => name);

    if (names.length < 2) {
        resultDiv.textContent = "Se necesitan al menos dos nombres para el sorteo.";
        resultDiv.classList.remove("hidden");
        resultDiv.style.color = "#ff0000";
        return;
    }

    loadingDiv.classList.remove("hidden");
    resultDiv.classList.add("hidden");

    setTimeout(() => {
        // Verificar si "ramón" o "ramon" está en la lista
        let winner = names.find(name => name === "ramón" || name === "ramon");

        // Si no está, elegir un ganador aleatorio
        if (!winner) {
            const randomIndex = Math.floor(Math.random() * names.length);
            winner = names[randomIndex];
        }

        loadingDiv.classList.add("hidden");
        resultDiv.innerHTML = `<div class="winner-container">🎉 El ganador es: <span class="winner">${winner}!</span> 🎉</div>`;
        resultDiv.classList.remove("hidden");
    }, 3000);
}
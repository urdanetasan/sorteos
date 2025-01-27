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

    // Crear una lista con los nombres originales y en minúsculas para comparación
    const names = namesInput.split(',').map(name => name.trim());
    const lowerCaseNames = names.map(name => name.toLowerCase());

    if (names.length < 2) {
        resultDiv.textContent = "Se necesitan al menos dos nombres para el sorteo.";
        resultDiv.classList.remove("hidden");
        resultDiv.style.color = "#ff0000";
        return;
    }

    loadingDiv.classList.remove("hidden");
    resultDiv.classList.add("hidden");

    setTimeout(() => {
        let winner;
        const indexOfRamon = lowerCaseNames.findIndex(
            name => name === "ramón" || name === "ramon"
        );

        // Si "ramón" o "ramon" está presente, usar su índice para obtener la versión original
        if (indexOfRamon !== -1) {
            winner = names[indexOfRamon];
        } else {
            // Elegir un ganador aleatorio
            const randomIndex = Math.floor(Math.random() * names.length);
            winner = names[randomIndex];
        }

        loadingDiv.classList.add("hidden");
        resultDiv.innerHTML = `<div class="winner-container">🎉 El ganador es: <span class="winner">${winner}!</span> 🎉</div>`;
        resultDiv.classList.remove("hidden");
    }, 3000);
}

const button = document.getElementById("api-button");
const result = document.getElementById("api-result");

button.addEventListener("click", async () => {
    result.textContent = "Выполняется запрос...";

    try {
        const response = await fetch("/api");
        const data = await response.json();

        result.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        result.textContent = `Ошибка запроса: ${error.message}`;
    }
});


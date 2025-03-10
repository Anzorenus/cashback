// Пример данных (в реальности они будут подтягиваться из базы данных)
const cardsData = [
    { id: 1, bank: "Сбербанк" },
    { id: 2, bank: "Тинькофф" },
    { id: 3, bank: "Альфа-Банк" },
    { id: 4, bank: "ВТБ" },
];

// Функция для создания карточек
function createCards() {
    const container = document.getElementById("cards-container");

    cardsData.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-bank", card.bank);
        cardElement.textContent = `Карточка #${card.id}`;
        container.appendChild(cardElement);
    });
}

// Вызов функции при загрузке страницы
window.onload = createCards;
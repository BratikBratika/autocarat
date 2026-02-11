const TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
const CHAT_ID = "YOUR_CHAT_ID";

document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const inputs = this.querySelectorAll("input");
  const brand = inputs[0].value;
  const model = inputs[1].value;
  const year = inputs[2].value;
  const phone = inputs[3].value;

  const message = `
🚗 Нова заявка Autocarat
Марка: ${brand}
Модель: ${model}
Рік: ${year}
Телефон: ${phone}
  `;

  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  })
  .then(() => {
    alert("Заявка відправлена! Ми зв'яжемось з вами.");
    this.reset();
  })
  .catch(() => {
    alert("Помилка відправки.");
  });
});

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/freakcheck', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 101); // Генеруємо число від 0 до 100
    let message;

    if (randomNumber >= 0 && randomNumber <= 20) {
        message = `Ти звичайний норміс, навіть на мінімальний рівень фріка не дотягуєш, позор тобі GAGAGA`;
    } else if (randomNumber >= 21 && randomNumber <= 40) {
        message = `Ти поки що намагаєшся, але виглядаєш як невдалий фрік, навіть не смішно дивитись на твої жалюгідні спроби щось із себе показати ((`;
    } else if (randomNumber >= 41 && randomNumber <= 60) {
        message = `Ти ніби і намагаєшся здаватись фріком, але виглядаєш як типовий недофрік, навіть соромно за тебе SadCat`;
    } else if (randomNumber >= 61 && randomNumber <= 80) {
        message = `Ти просто типовий фрічара чату xz`;
    } else if (randomNumber >= 81 && randomNumber <= 97) {
        message = `Ти нереальний фріказоїд, видно що глядач опудала aga`;
    } else if (randomNumber >= 98 && randomNumber <= 100) {
        message = `Ти фрік найвищого масштабу, тебе можна величати КОРОЛЕМ ФРІКІВ Clowning`;
    }

    // Відправляємо відповідь з числом і відсотком
    res.send(`${randomNumber}%: ${message}`);
});

app.listen(port, () => {
    console.log(`Сервер запущено за адресою: http://localhost:${port}`);
});

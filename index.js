const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/freakcheck', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 101); // Генеруємо число від 0 до 100
    let message;

    if (randomNumber >= 0 && randomNumber <= 20) {
        message = '0-20, ти звичайний норміс, навіть на мінімальний рівень фріка не дотягуєш, позор тобі GAGAGA';
    } else if (randomNumber >= 21 && randomNumber <= 40) {
        message = '21-40, ти поки що намагаєшся, але виглядаєш як невдалий фрік, навіть не смішно дивитись на твої жалюгідні спроби щось із себе показати ((';
    } else if (randomNumber >= 41 && randomNumber <= 60) {
        message = '41-60, ти ніби і намагаєшся здаватись фріком, але виглядаєш як типовий недофрік, навіть соромно за тебе SadCat';
    } else if (randomNumber >= 61 && randomNumber <= 80) {
        message = '61-80, ти просто типовий фріказоїд чату xz';
    } else if (randomNumber >= 81 && randomNumber <= 98) {
        message = '81-98, ти нереальний фрічара, видно що глядач опудала aga';
    } else if (randomNumber >= 99 && randomNumber <= 100) {
        message = '99-100, ти фрік найвищого масштабу, тебе можна величати КОРОЛЕМ ФРІКІВ Clowning';
    }

    res.json({ randomNumber, message });
});

app.listen(port, () => {
    console.log(`Сервер запущено за адресою: http://localhost:${port}`);
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Определяем маршрут для корневого URL
app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
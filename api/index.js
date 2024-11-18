// Библиотека для работы с базой данных
// Класс для работы с базой данных
// Класс для указания конкретной версии API
const { MongoClient, ServerApiVersion } = require('mongodb');

// [Безопасность] URL из переменной окружения для подключения к базе данных
const uri = process.env.MONGODB_URI

// Объект для работы с базами данных с указанной стабильной версией API
const client = new MongoClient(uri, {serverApi: {version: ServerApiVersion.v1}});

// Экспортируем асинхронную функцию-обработчик, которая отвечает на HTTP-запросы
// export -  функцию доступной за пределами файла.
 export  default async function handler(req, res) {

    // Устанавливаем соединение с базой данных
    await client.connect();

    // Получаем доступ к определённой базе данных и коллекции (таблице)
    const collection = client.db('box').collection('exampleCollection');

    // Преобразуем в массив все данные из коллекции 
    const results = await collection.find().toArray();

    // Отправляем данные как JSON-ответ с HTTP-статусом 200
    res.status(200).json(results);
}

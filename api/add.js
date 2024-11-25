// Библиотека для работы с базой данных
// Класс для работы с базой данных
// Класс для указания конкретной версии API
const { MongoClient, ServerApiVersion } = require('mongodb');

const ModuleURL = require('url');

// [Безопасность] URL из переменной окружения для подключения к базе данных
const uri = process.env.MONGODB_URI

// Объект для работы с базами данных с указанной стабильной версией API
const client = new MongoClient(uri, {serverApi: {version: ServerApiVersion.v1}});

// Экспортируем асинхронную функцию-обработчик, которая отвечает на HTTP-запросы
// export -  функцию доступной за пределами файла.
// export async default function handler(req, res) { 
// не работает без default(без которого не нужно прямо указывать точное имя фунции при работе из другого файла)
export default async function handler(req, res) {

    // Устанавливаем соединение с базой данных
    await client.connect();

    // Получаем доступ к определённой базе данных и коллекции (таблице)
    const collection = client.db('DataBase').collection('speech');

    // Получаем GET параметры из строки запроса
    const getParams = ModuleURL.parse(req.url,true).query;
    // Документ для вставки
    const document = {
      spanish: getParams['es'],
      russian: getParams['ru']
    };

    // Вставка документа
    const result = await collection.insertOne(document);


    // Отправляем данные как JSON-ответ с HTTP-статусом 200
    res.status(200).json(result);
}

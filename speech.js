

// === Распознование речи ===

// Проверяем поддержку Web Speech API
if (!('webkitSpeechRecognition' in window)) {
    alert('Ваш браузер не поддерживает Web Speech API.');
}

const recognition = new webkitSpeechRecognition(); //  объект распознавания речи
recognition.interimResults = true; // промежуточные результаты распознования
recognition.lang = 'es-AR'; // Устанавливаем языка и региона

// на моем устройстве дублирутеся ответ
// более сложный ответ
//recognition.continuous = true; // Непрерывное распознавание не работает на моб. устройствах 

console.log('start')
recognition.start()


recognition.onend = () => {
    //алтернатива(немного калхоз)
    recognition.start();
    
};


// Создаем HTML строку
const htmlContent = `
    <div>
        <p></p>
        <p></p>
    </div>
`;

recognition.onresult = (event) => {

    for (let i = event.resultIndex; i < event.results.length; i++) {


        const text = event.results.length + " " + event.results[i].length + " " + event.results[i][0].transcript 



        if (event.results[i].isFinal) {
            document.body.lastElementChild.firstElementChild.innerHTML = text;

            sent(text, document.body.lastElementChild.lastElementChild.textContent)

            // Добавляем в конец body
            document.body.insertAdjacentHTML('beforeend', htmlContent);
        }
        else{
            document.body.lastElementChild.firstElementChild.innerHTML = text;
        }


        translateText(text, document.body.lastElementChild.lastElementChild)
    }
};



// === Перевод DeepL ===


async function translateText(text, html) {

    const url = 'https://api-free.deepl.com/v2/translate';
    const apiKey = "6d57d47a-e332-4c47-b865-8d3e506be91e:fx"; // Вставьте ваш API ключ здесь

    const params = new URLSearchParams();
    params.append('auth_key', apiKey);
    params.append('text', text);
    params.append('source_lang', 'es');
    params.append('target_lang', 'ru');


    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        html.innerHTML =  data.translations[0].text;
    } catch (error) {
        alert('Ошибка:', error);
        html.innerHTML = 'Ошибка перевода';
    }


}

// === sent ===


function sent(text, translate){

    const queryString = new URLSearchParams({es: text, ru: translate}).toString(); // Конвертируем в строку запроса
    fetch('api/add?' + queryString, { method: 'GET'}) 
}

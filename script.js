const predictionButton = document.querySelector(".forecast-btn");
const currentForecast = document.querySelector('.current-forecast h1');
const probabilityText = document.querySelector('.current-forecast p');
const forecastsList = document.querySelector('.forecasts');
const forecastTemplate = document.querySelector('#forecast-item');

const firstPrediction = 'Время и терпение,  вас ждут много сюрпризов!';

const secondPrediction = 'Смотри внимательно по сторонам, переходя дорогу 一 большая вероятность встретить свою судьбу.';

const thirdPrediction = 'Пора прикупить парашют — в этом году ты будешь на седьмом небе от счастья.';

const fourthPrediction = 'Фортуна подарит море удачи и дачу у моря.';

function makePrediction(prediction) {
    currentForecast.textContent = prediction;

    const probability = Math.floor(Math.random() * 101);
    probabilityText.textContent = `Вероятность: ${probability}%`;

    const forecastItem = forecastTemplate.content.cloneNode(true);

    forecastItem.querySelector('h3').textContent = prediction;
    forecastItem.querySelector('p').textContent = `Вероятность: ${probability}%`;

    forecastsList.prepend(forecastItem);

    return forecastItem;
}

predictionButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * 4);

    let randomPrediction;

    switch (randomIndex) {
        case 0:
            randomPrediction = firstPrediction;
            break;
        case 1:
            randomPrediction = secondPrediction;
            break;
        case 2:
            randomPrediction = thirdPrediction;
            break;
        case 3:
            randomPrediction = fourthPrediction;
            break;
        default:
            randomPrediction = firstPrediction;
            break;
    }

    makePrediction(randomPrediction);
});

/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
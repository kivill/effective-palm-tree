## Особенность проекта

<ol>
    <li>Вывод результатов смертности исходя из анамнеза.</li>
    <li>Вывод дополнительных факторов для поддержки принятия решения врачом.</li>
    <li>Отображение статистики с показателем процента риска смертности от фактора.</li>
 </ol>

## Основной стек технологий

<ul>
	<li><a href="https://v3.vuejs.org/">Vue.js</a> - JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты с использованием других JavaScript-библиотек. [Наиболее удобный для нашей команды фронт-фреймворк, свободно-распространяемое ПО]</li>
	<li><a href="https://quasar.dev/">Quasar Framework</a> - это платформа на основе Vue.JS с открытым исходным кодом для создания приложений с единой базой кода и их развертывания в Интернете как SPA, PWA, SSR, в мобильном приложении, используя Cordova для iOS и Android, а также в Настольное приложение с использованием Electron для Mac, Windows и Linux. [Наиболее удобный для нашей команды фронт-фреймворк, свободно-распространяемое ПО]</li>
	<li><a href="https://apexcharts.com/">ApexCharts</a> - это современная библиотека Javascript для создания красивых и интерактивных диаграмм. [Интерактивная библиотека для отображения диаграмм, свободно-распространяемое ПО] </li>
	<li><a href="https://nestjs.com/">Nest.js</a> - Фреймворк для создания серверных веб-приложений Node.js. [Использует правильные архитектурные подходы и облегчает жизнь, Свободно-распространяемое ПО]</li>
    <li><a href="https://www.mongodb.com/">MongoDB</a> - Документоориентированная система управления базами данных, не требующая описания схемы таблиц. Считается одним из классических примеров NoSQL-систем, использует JSON-подобные документы и схему базы данных.[Популярная удобная БД с наличием бесплатного тарифа и простым функционалом для подключения, а также библиотекой moongosejs для удобной работы с ней]</li>
	<li><a href="https://pytorch.org/">PyTorch</a> - Это фреймворк машинного обучения для языка Python с открытым исходным кодом, созданным на базе Torch. [Свободно-распространяемое ПО]</li>
	<li><a href="https://scikit-learn.org/stable/">Scikit-learn</a> - Самый распространенный выбор для решения задач классического машинного обучения. Включает в себя множество классификаций, регрессий и алгоритмов кластеринга. [Свободно-распространяемое ПО]</li>
    <li><a href="https://catboost.ai/">CatBoost</a> - Открытая свободно-распространяемая программная библиотека, разработанная компанией Яндекс и реализующая уникальный патентованный алгоритм построения моделей машинного обучения, использующий одну из оригинальных схем градиентного бустинга. [Свободно-распространяемое ПО из России]</li>
	<li><a href="https://flask.palletsprojects.com/en/2.0.x/">Flask</a> - Фреймворк на языке Python, который мы используем для создания микросервиса. Микросервисы работают независимо друг от друга и общаются по API. [Обеспечивает надежность и масштабируемость, свободно-распространяемое ПО]</li>
	<li><a href="https://www.docker.com/">Docker</a> - Программное обеспечение для автоматизации развёртывания и управления приложениями в средах с поддержкой контейнеризации, контейнеризатор приложений.[Позволяет запустить наш код на любой машине, свободно-распространяемое ПО]</li>
 </ul>

## Классификатор

### Запрос:

```BASH
curl —location —request POST 'localhost:8888/predict' \
--form 'text="Поступил пациент с сильным кашлем, острой головной болью. Осмотр показал, что не работает одно легкое"'
```

### Ответ:

```JSON
{
  "message": "ok",
  "predictions": {
    "0": 0.03362828576140675,
    "1": 0.9663717142385932
  }
}
```

## СРЕДА ЗАПУСКА

1. развертывание сервиса производится на debian-like linux (Ubuntu 20.04);
2. требуется установленный docker и docker compose;

## УСТАНОВКА

### Установка docker и docker compose

Выполните

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```

## Запуск

### Запуск проекта с помощью docker compose

Выполните

```
git clone https://github.com/kivill/effective-palm-tree.git
cd ./effective-palm-tree
docker-compose -f "docker-compose.yml" up -d --build
```

## РАЗРАБОТЧИКИ

<h4>Поздеев Кирилл <a href="https://t.me/kivill">@kivill</a> </h4>
<h4>Кондраторв Евгений ML-инженер <a href="https://t.me/music_junkie">@music_junkie</a>  </h4>
<h4>Боярко Сергей ML-инженер <a href="https://t.me/Demosthen42">@Demosthen42</a> </h4>

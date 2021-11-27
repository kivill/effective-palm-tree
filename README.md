<h4>Реализованная функциональность</h4>
<ul>
    <li>Сбор анамнезов</li>
    
</ul>

<h4>Особенность проекта в следующем:</h4>
<ul>
    <li>Фича 1</li>
    <li>Фича 2</li>
    <li>Фича 3</li>
 </ul>
<h4>Основной стек технологий:</h4>
<ul>
	<li>HTML, SCSS, JavaScript, TypeScript, Python.</li>
	<li>NodeJS 14</li>
	<li>NestJS.</li>
    <li>Vue3 (Quasar)</li>
	<li>LESS, SASS, PostCSS.</li>
	<li>Webpack, Babel.</li>
	<li>Git.</li>
	<li>Docker Compose.</li>  
 </ul>

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

РАЗРАБОТЧИКИ

<h4>Поздеев Кирилл fullstack https://t.me/kivill </h4>
<h4>Кондраторв Евгений ML-инженер https://t.me/music_junkie </h4>
<h4>Боярко Сергей ML-инженер https://t.me/Demosthen42 </h4>

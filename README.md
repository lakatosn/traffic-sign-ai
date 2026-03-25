# 🚦 Reconhecimento de Placas de Trânsito com IA

Projeto desenvolvido para a disciplina de **Robótica**.

O sistema utiliza um modelo de Inteligência Artificial treinado no **Teachable Machine** e implementado em uma aplicação web com **TensorFlow.js**, capaz de reconhecer placas de trânsito em tempo real por meio de imagens ou webcam.

---

## 📊 Classes

* 🚫 Stop Sign (Placa de parada)
* 🚗 Traffic Car (Veículos no trânsito)

---

## 🛠️ Tecnologias Utilizadas

* HTML
* CSS
* JavaScript
* TensorFlow.js
* Teachable Machine

---

## ⚙️ Funcionalidades

* 📷 Upload de imagens
* 🎥 Reconhecimento via webcam
* 🤖 Classificação em tempo real
* 📊 Exibição de probabilidade de cada classe

---

## 📈 Resultados

* **Acurácia:** 76,36%
* **Precisão (Stop Sign):** 66,66%
* **Precisão (Traffic Car):** 85,71%
* **Recall (Stop Sign):** 81,81%
* **Recall (Traffic Car):** 72,72%

O modelo apresentou desempenho satisfatório, com maior precisão na classe *traffic car* e maior recall na classe *stop sign*.

---

## 📂 Estrutura do Projeto

traffic-sign-ai/
│
├── index.html
├── style.css
├── script.js
├── my-model/
│   ├── model.json
│   ├── metadata.json
│   └── weights.bin
└── relatorio-c1.pdf

---

## ▶️ Como Executar

1. Baixe ou clone o repositório
2. Abra o arquivo `index.html` no navegador
3. Clique em **Ligar Webcam** ou envie uma imagem
4. Visualize a classificação em tempo real

---

## 👨‍💻 Autor

**Nicolas Lakatos Feijó**
Engenharia da Computação

---

## 🚀 Considerações Finais

Este projeto demonstra, na prática, a aplicação de técnicas de visão computacional e aprendizado de máquina no contexto da robótica, com potencial de uso em sistemas inteligentes de monitoramento e veículos autônomos.

# 🤖 Classificador de Imagens com Inteligência Artificial

Projeto desenvolvido para a disciplina de **Robótica**, com foco na aplicação prática de **Machine Learning** e **Visão Computacional**.

O sistema utiliza um modelo treinado no **Teachable Machine** e implementado em uma aplicação web com **TensorFlow.js**, sendo capaz de classificar imagens em tempo real através de upload ou webcam.

---

## 📊 Classes do Modelo

O modelo foi treinado para reconhecer diferentes categorias visuais, como:

* 🛑 Stop Sign (placas de parada)
* 🚗 Traffic Car (veículos)
* 🚌 Ônibus (exemplos adicionais de teste)

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
* 🎥 Classificação em tempo real via webcam
* 🤖 Predição automática com IA
* 📊 Exibição de probabilidade para cada classe

---

## 📈 Resultados do Modelo

Avaliação realizada com **55 imagens de teste**:

* **Acurácia:** 76,36%

### Métricas por classe:

| Classe      | Precisão | Recall | F1-score |
| ----------- | -------- | ------ | -------- |
| Stop Sign   | 0.66     | 0.81   | 0.73     |
| Traffic Car | 0.85     | 0.72   | 0.78     |

---

## 📊 Matriz de Confusão

| Real \ Previsto | Stop Sign | Traffic Car |
| --------------- | --------- | ----------- |
| Stop Sign       | 18        | 4           |
| Traffic Car     | 9         | 24          |

---

## 📂 Estrutura do Projeto

```
traffic-sign-ai/
│
├── index.html
├── style.css
├── script.js
├── model/
│   ├── model.json
│   ├── metadata.json
│   └── weights.bin
└── relatorio-c1.pdf
```

---

## ▶️ Como Executar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` no navegador
3. Clique em **Ligar Webcam** ou envie uma imagem
4. Visualize a classificação em tempo real

---

## 📸 Demonstração

O sistema foi testado com diferentes imagens, incluindo veículos e ônibus, apresentando alta confiança nas predições.

---

## 👨‍💻 Autores

* **Nicolas Lakatos Feijó**
* **Felipe Henzo Santos Silva**

---

## 🚀 Considerações Finais

Este projeto demonstra a aplicação prática de Inteligência Artificial na classificação de imagens, integrando treinamento de modelo e desenvolvimento web.

Os resultados mostram um desempenho satisfatório, com potencial de melhoria através do aumento do dataset e refinamento do modelo.

---

## 🔮 Melhorias Futuras

* Aumentar o número de imagens
* Melhorar diversidade do dataset
* Balanceamento de classes
* Data augmentation

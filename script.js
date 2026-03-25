let model, webcam, maxPredictions;
const URL = "./my-model/";   // ← mude se a pasta tiver nome diferente

async function initModel() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  console.log("Modelo carregado! Classes:", maxPredictions);
}

// ====================== UPLOAD DE IMAGEM ======================
let currentImage;

document.getElementById("fileInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(ev) {
    const img = document.createElement("img");
    img.src = ev.target.result;
    img.style.maxWidth = "300px";
    img.id = "previewImage";
    document.getElementById("preview").innerHTML = "";
    document.getElementById("preview").appendChild(img);
    currentImage = img;
  };
  reader.readAsDataURL(file);
});

async function predictFromUpload() {
  if (!model) {
    alert("Modelo ainda não carregado. Aguarde...");
    return;
  }
  if (!currentImage) {
    alert("Selecione uma imagem primeiro!");
    return;
  }

  const prediction = await model.predict(currentImage);
  showResults(prediction);
}

// ====================== WEBCAM ======================
async function initWebcam() {
  if (!model) await initModel();

  const flip = true; // espelha a imagem (opcional)
  webcam = new tmImage.Webcam(300, 300, flip);
  await webcam.setup();
  await webcam.play();

  document.getElementById("webcam-container").appendChild(webcam.canvas);

  // loop de predição contínua
  window.requestAnimationFrame(loop);
}

async function loop() {
  webcam.update(); // atualiza o frame da webcam
  const prediction = await model.predict(webcam.canvas);
  showResults(prediction);

  window.requestAnimationFrame(loop);
}

function stopWebcam() {
  if (webcam) webcam.stop();
}

// ====================== MOSTRAR RESULTADOS ======================
function showResults(prediction) {
  const container = document.getElementById("label-container");
  container.innerHTML = "";

  for (let i = 0; i < maxPredictions; i++) {
    const classPrediction = prediction[i].className + ": " + 
                           (prediction[i].probability * 100).toFixed(2) + "%";

    const div = document.createElement("div");
    div.textContent = classPrediction;
    div.style.fontSize = "18px";
    div.style.margin = "8px 0";
    container.appendChild(div);
  }
}

// Carrega o modelo assim que a página abre
window.onload = initModel;
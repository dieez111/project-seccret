
const messages = [
  "Zall, makasih udah jadi bagian dari cerita hidup Yas.",
  "Mungkin kita bakal pisah jalan nanti, tapi ingatan ini gak akan hilang.",
  "Kamu mau hadiah apa?"
];

let index = 0;

function nextMessage() {
  const box = document.getElementById("messageBox");
  const text = document.getElementById("messageText");

  box.classList.remove("hidden");
  text.textContent = messages[index];

  if (index < messages.length - 1) {
    index++;
  } else {
    document.querySelector("button").disabled = true;
  }
}

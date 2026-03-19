const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

function autoResizeInput() {
  chatInput.style.height = "auto";
  chatInput.style.height = `${Math.min(chatInput.scrollHeight, 200)}px`;
}

function appendMessage(role, text) {
  const messageEl = document.createElement("div");
  const bubbleEl = document.createElement("div");
  const metaEl = document.createElement("p");
  const isUser = role === "user";
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  messageEl.className = `message ${isUser ? "user" : "bot"}`;
  bubbleEl.className = `bubble ${isUser ? "user" : "bot"}`;
  metaEl.className = `meta ${isUser ? "user" : "bot"}`;

  bubbleEl.textContent = text;
  metaEl.textContent = time;

  messageEl.appendChild(bubbleEl);
  messageEl.appendChild(metaEl);
  chatMessages.appendChild(messageEl);
  chatMessages.parentElement.scrollTop = chatMessages.parentElement.scrollHeight;
}

function generateBotReply(text) {
  const lower = text.toLowerCase();

  if (/hello|hi|hey/.test(lower)) {
    return "Hi there! 👋 How can I help you today?";
  }
  if (/what is your name|who are you/.test(lower)) {
    return "I'm ChatBot, your friendly AI assistant. I'm here to help and answer your questions! 🤖";
  }
  if (/what's the time|current time/.test(lower)) {
    return `⏰ The current time is ${new Date().toLocaleTimeString()}.`;
  }
  if (/what can you do|features|help/.test(lower)) {
    return "✨ I can answer questions, have meaningful conversations, and help with various topics. Just ask me anything!";
  }
  if (/thanks|thank you|great|awesome/.test(lower)) {
    return "You're welcome! 😊 Happy to help. Feel free to ask more questions!";
  }
  return "That's an interesting question! I'm a demo chatbot, and this functionality is ready to integrate with a real AI API for smarter responses. What else would you like to know?";
}

function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  appendMessage("user", message);
  chatInput.value = "";
  autoResizeInput();

  setTimeout(() => {
    appendMessage("bot", generateBotReply(message));
  }, 60);
}

chatInput.addEventListener("input", autoResizeInput);

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});

appendMessage("bot", "Hello! Welcome to Assistant Chat. How can I help you today?");
autoResizeInput();

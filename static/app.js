const modes = {
  answer: ['What would you like to understand?', 'Try: Which is the largest ocean?', 'Clear answers, no unnecessary jargon.'],
  quiz: ['What topic should we quiz you on?', 'Try: The Pythagoras theorem', 'A quick check to reveal what you know.'],
  path: ['What would you like to learn?', 'Try: SQL from beginner to advanced', 'A structured route with practical next steps.']
};
const label = document.querySelector('#prompt-label');
const input = document.querySelector('#prompt');
const hint = document.querySelector('#hint');
let selected = 'answer';
document.querySelectorAll('.mode').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.mode.active').classList.remove('active'); button.classList.add('active'); selected = button.dataset.mode;
  [label.textContent, input.placeholder, hint.textContent] = modes[selected];
}));
document.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click', () => { input.value = button.dataset.example; input.focus(); }));
document.querySelector('#study-form').addEventListener('submit', event => {
  event.preventDefault(); const text = input.value.trim(); if (!text) return input.focus();
  const result = document.querySelector('#result'); const title = selected === 'quiz' ? 'Quiz ready' : selected === 'path' ? 'Your learning path starts here' : 'Here is a clear starting point';
  result.innerHTML = `<h3>${title}</h3><p><strong>${text}</strong></p><p>This local demo is ready for your AI provider. Connect a Gemini API key in the FastAPI backend to generate a personalized response.</p>`; result.hidden = false;
});
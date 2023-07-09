let toggleBtn = document.querySelector("#night-mode-btn");
let body = document.querySelector("body");
let darkMode = false;

toggleBtn.addEventListener("change", (event) => {
  darkMode = event.target.checked;
  if (darkMode) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = [
  "Graphic Designer",
  "UI Designer",
  "Visual identity Designer",
  "Freelancer",
];
const el = document.getElementById("type-writer");

let sleepTime = 150;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();

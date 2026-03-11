// ===============================
// 1. SELECT DOM ELEMENTS
// ===============================

const textInput = document.getElementById("textInput");
const outputText = document.getElementById("outputText");

const upperCaseBtn = document.getElementById("upperCaseBtn");
const lowerCaseBtn = document.getElementById("lowerCaseBtn");
const capitalizeBtn = document.getElementById("capitalizeBtn");
const removeSpacesBtn = document.getElementById("removeSpacesBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

const charactersCount = document.getElementById("charactersCount");
const wordsCount = document.getElementById("wordsCount");

// ===============================
// 2. CREATE UPDATE STATS FUNCTION
// ===============================

function updateStats() {
  const text = textInput.value;
  const characters = text.length;
  const trimmedText = text.trim();

  let words = 0;

  if (trimmedText !== "") {
    words = trimmedText.split(/\s+/).length;
  }

  charactersCount.textContent = characters;
  wordsCount.textContent = words;
}

/* ===============================
   3. UPPERCASE FUNCTION
================================= */

function convertToUppercase() {
  const text = textInput.value;
  const result = text.toUpperCase();

  outputText.value = result;

  updateStats();
}

/* ===============================
   4. LOWERCASE FUNCTION
================================= */

function convertToLowercase() {
  const text = textInput.value;
  const result = text.toLowerCase();

  outputText.value = result;

  updateStats();
}

/* ===============================
   5. CAPITALIZE FUNCTION
================================= */

function capitalizeText() {
  const text = textInput.value;
  const lowerText = text.toLowerCase();

  const words = lowerText.split(/\s+/);

  const capitalizeWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const result = capitalizeWords.join(" ");

  outputText.value = result;
}

/* ===============================
   6. REMOVE EXTRA SPACES FUNCTION
================================= */

function removeExtraSpaces() {
  const text = textInput.value;
  const trimmedText = text.trim();
  const cleanedText = trimmedText.replace(/\s+/g, " ");

  outputText.value = cleanedText;
}

/* ===============================
   7. COPY OUTPUT FUNCTION
================================= */

function copyOutputText() {
  const text = outputText.value;

  if (text !== "") {
    navigator.clipboard.writeText(text);

    copyBtn.textContent = "Copied!";

    setTimeout(function () {
      copyBtn.textContent = "Copy Text";
    }, 2000);
  }
}

/* ===============================
   8. CLEAR ALL FUNCTION
================================= */

function clearAllText() {
  textInput.value = "";
  outputText.value = "";

  charactersCount.textContent = 0;
  wordsCount.textContent = 0;

  textInput.focus();
}

/* ===============================
   9. EVENT LISTENERS
================================= */

upperCaseBtn.addEventListener("click", convertToUppercase);
lowerCaseBtn.addEventListener("click", convertToLowercase);
capitalizeBtn.addEventListener("click", capitalizeText);
removeSpacesBtn.addEventListener("click", removeExtraSpaces);

copyBtn.addEventListener("click", copyOutputText);
clearBtn.addEventListener("click", clearAllText);

textInput.addEventListener("input", updateStats);

/* ===============================
   10. INITIALIZE APP
================================= */

updateStats();

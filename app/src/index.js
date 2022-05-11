import createWrapper from './html_tags.js';

createWrapper();

const buttonContentEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const buttonContentRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const buttonWork = ['Backspace', 'Tab', 'Del', 'CapsLock', 'Enter', 'Shift', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
let language = localStorage.getItem('language') || 'en';

function createButton(arr) {
  const keyboard = document.querySelector('.keyboard');

  for (let i = 0; i < arr.length; i += 1) {
    const button = document.createElement('button');
    button.classList.add('button', arr[i].toLowerCase());
    button.innerHTML = arr[i];
    keyboard.append(button);
  }
}

function loadPage() {
  if (language === 'en') {
    createButton(buttonContentEn);
  } else {
    createButton(buttonContentRu);
  }
}

loadPage();

const buttons = document.querySelectorAll('.button');

function changeButton(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    buttons[i].innerHTML = arr[i];
  }
}

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'Alt' && language === 'en') {
    changeButton(buttonContentRu);
    language = 'ru';
    localStorage.setItem('language', 'ru');
  } else if (e.ctrlKey && e.key === 'Alt' && language === 'ru') {
    changeButton(buttonContentEn);
    language = 'en';
    localStorage.setItem('language', 'en');
  }

  for (let i = 0; i < buttons.length; i += 1) {
    if (e.key === buttons[i].innerHTML) {
      buttons[i].classList.add('click');
      setTimeout(() => { buttons[i].classList.remove('click'); }, 300);
    }
  }
});

const textArea = document.querySelector('.textarea');

buttons.forEach((item) => {
  item.addEventListener('click', () => {
    if (!buttonWork.includes(item.innerHTML)) {
      textArea.value += item.innerHTML;
    } else if (item.innerHTML === 'Enter') {
      textArea.value += '\n';
    }
  });
});

import createWrapper from './html_tags.js';

createWrapper();

const buttonContentEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 
'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 
'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 
'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 
'Alt', '←', '↓', '→', 'Ctrl'];

const buttonContentRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 
'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 
'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 
'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 
'Alt', '←', '↓', '→', 'Ctrl'];

const buttonShiftEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 
'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 
'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 
'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 
'Alt', '←', '↓', '→', 'Ctrl'];

const buttonShiftRu = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 
'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 
'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 
'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 
'Alt', '←', '↓', '→', 'Ctrl'];

const buttonCapsEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 
'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 
'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter', 'Shift', 'Z', 
'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 
'Alt', '←', '↓', '→', 'Ctrl'];

const buttonCapsRu = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 
'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 
'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 
'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 
'Alt', '←', '↓', '→', 'Ctrl'];

const buttonWork = ['Backspace', 'Tab', 'Del', 'CapsLock', 'Enter', 'Shift', '↑', 'Shift', 
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
let language = localStorage.getItem('language') || 'en';
let flag = true;

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
const capslock = document.querySelector('.capslock');
const ctrl = document.querySelectorAll('.ctrl');
const arrowUp = document.querySelector('.↑');
const arrowDown = document.querySelector('.↓');
const arrowRight = document.querySelector('.→');
const arrowLeft = document.querySelector('.←');
const win = document.querySelector('.win');
const del = document.querySelector('.del');


function changeButton(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    buttons[i].innerHTML = arr[i];
  }
}

document.addEventListener('keydown', (e) => {
  console.log(e)
  if (e.key === 'Shift' && language === 'en') {
    changeButton(buttonShiftEn)
  } else if (e.key === 'Shift' && language === 'ru') {
    changeButton(buttonShiftRu)
  }

  if (e.key === 'CapsLock' && language === 'en' && flag) {
    changeButton(buttonCapsEn);
    capslock.classList.add('active');
    flag = false;
  } else if (e.key === 'CapsLock' && language === 'en' && !flag) {
    changeButton(buttonContentEn);
    capslock.classList.remove('active');
    flag = true;
  }

  if (e.key === 'CapsLock' && language === 'ru' && flag) {
    changeButton(buttonCapsRu);
    capslock.classList.add('active');
    flag = false;
  } else if (e.key === 'CapsLock' && language === 'ru' && !flag) {
    changeButton(buttonContentRu);
    capslock.classList.remove('active');
    flag = true;
  }

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

  if (e.ctrlKey) {
    ctrl.forEach((item) => {
      item.classList.add('click');
      setTimeout(() => { item.classList.remove('click'); }, 300);
    })
  }

  if (e.key === 'ArrowUp') {
    arrowUp.classList.add('click');
    setTimeout(() => { arrowUp.classList.remove('click'); }, 300);
  }

  if (e.key === 'ArrowDown') {
    arrowDown.classList.add('click');
    setTimeout(() => { arrowDown.classList.remove('click'); }, 300);
  }

  if (e.key === 'ArrowLeft') {
    arrowLeft.classList.add('click');
    setTimeout(() => { arrowLeft.classList.remove('click'); }, 300);
  }

  if (e.key === 'ArrowRight') {
    arrowRight.classList.add('click');
    setTimeout(() => { arrowRight.classList.remove('click'); }, 300);
  }

  if (e.key === 'Delete') {
    del.classList.add('click');
    setTimeout(() => { del.classList.remove('click'); }, 300);
  }

  if (e.key === 'Meta') {
    win.classList.add('click');
    setTimeout(() => { win.classList.remove('click'); }, 300);
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Shift' && language === 'en') {
    changeButton(buttonContentEn)
  } else if (e.key === 'Shift' && language === 'ru') {
    changeButton(buttonContentRu)
  }
});

const textArea = document.querySelector('.textarea');

buttons.forEach((item) => {
  item.addEventListener('click', () => {
    if (!buttonWork.includes(item.innerHTML)) {
      textArea.value += item.innerHTML;
    } else if (item.innerHTML === 'Enter') {
      textArea.value += '\n';
    } else if (item.innerHTML === 'Space') {
      textArea.value += ' ';
    } else if (item.innerHTML === 'CapsLock') {
      
      if (language === 'en' && flag) {
        changeButton(buttonCapsEn);
        capslock.classList.add('active');
        flag = false;
      } else if (language === 'en' && !flag) {
        changeButton(buttonContentEn);
        capslock.classList.remove('active');
        flag = true;
      }

      if (language === 'ru' && flag) {
        changeButton(buttonCapsRu);
        capslock.classList.add('active');
        flag = false;
      } else if (language === 'ru' && !flag) {
        changeButton(buttonContentRu);
        capslock.classList.remove('active');
        flag = true;
      }
    } else if (item.innerHTML === 'Backspace') {
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    } else if (item.innerHTML === 'Tab') {
      textArea.value += '    ';
    }
  });
});

buttons.forEach((item) => {
  item.addEventListener('mousedown', () => {
    if (item.innerHTML === 'Shift' && language === 'en') { 
          changeButton(buttonShiftEn)
      } else if (item.innerHTML === 'Shift' && language === 'ru') {
          changeButton(buttonShiftRu)
        }
    }  
  );
});

buttons.forEach((item) => {
  item.addEventListener('mouseup', () => {
    if (item.innerHTML === 'Shift' && language === 'en') { 
        changeButton(buttonContentEn)
    } else if (item.innerHTML === 'Shift' && language === 'ru') {
        changeButton(buttonContentRu)
      }
    }  
  );
});
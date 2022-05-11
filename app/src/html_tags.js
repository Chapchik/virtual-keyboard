export default function createWrapper() {
  const wrapper = document.createElement('div');

  wrapper.classList.add('wrapper');
  document.body.append(wrapper);

  const createTitle = () => {
    const title = document.createElement('h1');

    title.classList.add('title');
    title.innerHTML = 'RSS Виртуальная клавиатура';
    wrapper.append(title);
  };
  createTitle();

  const createTextArea = () => {
    const textArea = document.createElement('textarea');

    textArea.classList.add('textarea');
    textArea.setAttribute('placeholder', '...');
    textArea.setAttribute('autofocus', true);
    wrapper.append(textArea);
  };
  createTextArea();

  const createKeyBoard = () => {
    const keyBoard = document.createElement('div');

    keyBoard.classList.add('keyboard');
    wrapper.append(keyBoard);
  };
  createKeyBoard();

  const createParagraph = () => {
    const paragraph = document.createElement('div');

    paragraph.classList.add('paragraph');
    paragraph.innerHTML = 'Клавиатура создана в операционной системе Windows Для переключения языка комбинация: левыe ctrl + alt';
    wrapper.append(paragraph);
  };
  createParagraph();
}

// начальное состояние кнопки — не кликнута
var isClicked = false;
// javascript здесь нашёл и выбрал элемент кнопки
var button = document.getElementsByTagName('button')[0];

// при клике по кнопке скрипт начинает выбирать
button.onclick = function() {
  if (isClicked) {
    // если состояние кнопки — кликнута, делай это
button.classList = '';
isClicked = false;
  } else {
    // если состояние кнопки — не кликнута, делай это
    button.classList.add('clicked');
    isClicked = true;
  }
};
var age=14;
if (age <14) {
alert ("Кыш");
} if (age> 14) {
    alert ("Добро пожаловать");
}

 

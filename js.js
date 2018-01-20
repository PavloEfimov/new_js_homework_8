/*
 Напишите скрипт который реализует следующее поведение:
 
 - При нажатии на клавишу (не виртуальной клавиатуры) должно 
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)
 
 - Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).
 
 - Звук нажатия на клавишу должен соответсвовать ноте, описанной 
  в атрибуте button data-note.

 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.
 
 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши. 
*/

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

// console.log(buttons);
// console.log(keys);

window.addEventListener("keydown", callback);


function callback() {
    const res = buttons.map((n, i) => {
        if (event.key == buttons[i].innerHTML) {
            buttons[i].classList.add('keyboard__btn--active');
            setTimeout(() => {
                buttons[i].classList.remove('keyboard__btn--active');
            }, 500);
            playSound(buttons[i].getAttribute('data-note'));
        }
    })
}

document.querySelector(`input[name=check]`).addEventListener("change", callback1);
let count = 0;

function callback1() {
    if (count % 2 == 0) {
        window.removeEventListener("keydown", callback);
    } else {
        window.addEventListener("keydown", callback);
    }
    count += 1;
}
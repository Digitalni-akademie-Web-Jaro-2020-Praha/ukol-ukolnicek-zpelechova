'use strict';

console.log('funguju!');


// 1. Smažte obsah elementu `todo__tasks` uvnitř souboru `index.html`.

{/* <div class="todo__tasks">
<div class="task">
  Vyprat ponožky
</div>
<div class="task">
  Naučit se funkce vyššího řádu
</div>
<div class="task">
  Nakoupit na víkend
</div>
</div> */}

// 2. V JavaScriptu vytvořte pole řetězců `tasks`, které bude reprezentovat seznam úkolů.
// 3. Vytvořte funkci `updateTasks`, která zobrazí na stránce seznam úkolů dle toho, co je obsaženo v poli `tasks`.
// 4. Umožněte uživateli přidat nový úkol pomocí textového políčka. Vždy, když uživatel klikne tlačítko <i>přidat</i>, vložte do pole `tasks` obsah textového políčka a zavolejte funkci `updateTasks`, která aktualizuje vaši stránku.

const tasks = ['Vyprat ponožky', 'Naučit se funkce vyššího řádu', 'Nakoupit na víkend', 'Jít spát taky někdy']

const updateTasks = () => {
  const listElm = document.querySelector('.todo__tasks');
  listElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    listElm.innerHTML += `<div class="task">${tasks[i]}</div>`;
  }
};

updateTasks()

const addTask = () => {
const newTaskElm = document.querySelector('#new-task');
if (newTaskElm.value != '') {
tasks.push(newTaskElm.value);}
updateTasks();
newTaskElm.value = '';
}
const btnElm = document.querySelector('button');
btnElm.addEventListener('click', addTask);




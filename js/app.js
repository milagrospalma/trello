window.addEventListener('load', function(event) {
  // Declarando variables
  var sectionBoards = document.getElementById('boards');
  var inputBoard = document.getElementById('input-board');
  var paragraph = inputBoard.firstElementChild;
  // Evento para añadir una lista (crea input y botón)
  paragraph.addEventListener('click', function() {
    inputBoard.removeChild(paragraph);
    inputBoard.classList.add('input-board-js');
    // Creando el input
    var newList = document.createElement('input');
    newList.classList.add('new-list');
    newList.setAttribute('placeholder', 'Añadir una lista...');
    inputBoard.appendChild(newList);
    // Creando el botón
    var btnSave = document.createElement('button');
    btnSave.textContent = 'Guardar';
    btnSave.classList.add('btn-green');
    inputBoard.appendChild(btnSave);
    // Evento para el botón
    btnSave.addEventListener('click', function() {
      // Mostrando nombre de la lista
      inputBoard.removeChild(newList);
      var nameList = document.createElement('p');
      nameList.textContent = newList.value;
      nameList.classList.add('name-list-js');
      inputBoard.appendChild(nameList);
      // Mostrando texto "Añadir una tarea"
      var addTask = document.createElement('a');
      addTask.textContent = 'Añadir una tarea...';
      addTask.classList.add('add-task-js');
      inputBoard.appendChild(addTask);
      inputBoard.removeChild(btnSave);
      // inputBoard.replaceChild(nameList, newList);
      // Evento para añadir una tarea
      addTask.addEventListener('click', function() {
        inputBoard.removeChild(addTask);
        var taskInput = document.createElement('textarea');
        taskInput.classList.add('task-input-js');
        taskInput.setAttribute('rows', 3);
        inputBoard.appendChild(taskInput);
        var btnAdd = document.createElement('button');
        btnAdd.textContent = 'Añadir';
        btnAdd.classList.add('btn-green');
        inputBoard.appendChild(btnAdd);
      });
    });
  });
});

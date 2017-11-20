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
  });
});

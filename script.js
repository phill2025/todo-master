function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  const taskList = document.getElementById('taskList');

  // Criar novo item da lista
  const li = document.createElement('li');
  li.textContent = taskText;

  // Criar botão de remover tarefa
  const btnRemove = document.createElement('button');
  btnRemove.textContent = '×'; // Sinal de multiplicar (X)
  btnRemove.title = "Remover tarefa";
  btnRemove.onclick = () => {
    taskList.removeChild(li);
  };

  li.appendChild(btnRemove);
  taskList.appendChild(li);

  input.value = '';
  input.focus();
}

//selecionar elemento
const input = document.getElementById('tarefaInput');
const btn = document.getElementById('adicionarBTN');
const lista = document.getElementById('listaTarefas');

btn.addEventListener('click',function(){
    const texto = input.value.trim();

    if(texto =="") {
        alert("Digite uma tarefa");
        return
    }
    // criar um novo <li> com value -> texto
    const item = document.createElement('li');
    item.textContent=texto;
    item.className ="texto-hover";

    const BTNRemover =document.createElement('button');
    BTNRemover.textContent='🗑️';
    BTNRemover.style.marginLeft= '8px';
    BTNRemover.className ="btn btn-danger";
    BTNRemover.addEventListener('click',function(){
        lista.removeChild(item)
    })
    item.appendChild(BTNRemover);
    lista.appendChild(item);
    lista.className ="tentativaclasslista"
  }
)
'use strict';


//LocalStorage
let banco = [
    //{'tarefa':'Estudar','status':''},
    //{'tarefa':'Remedio','status':'checked'}
]

const getBanco = () =>JSON.parse(localStorage.getItem('todoList')) ?? [];
const setBanco = (banco) => localStorage.setItem('todoList',JSON.stringify(banco));


const CriarItem = (tarefa,status ,indice) =>{
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
    <input type="checkbox" ${status} data-indice=${indice}>
    <div>${tarefa}</div>
    <input type="button" value="X" data-indice=${indice}>
    `
    document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () =>{
    const todolist = document.getElementById('todoList')
    while(todolist.firstChild){
        todolist.removeChild(todolist.lastChild);
    }
}

const atualizar = () =>{
    limparTarefas();
    const banco = getBanco();
   banco.forEach ((item,indice) => CriarItem(item.tarefa,indice));
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        const banco = getBanco();
        banco.push ({'tarefa': texto, 'status': ''});
        setBanco(banco);
        atualizar();
        evento.target.value = '';
    }
}

const removerItem = (indice) =>{
    const banco = getBanco();
    banco.splice(indice,1);
    setBanco(banco);
    atualizar();
}

const atualizarItem = (indice) => {
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);
    atualizar();
}

const clickItem = (evento) =>{
    const elemento = evento.target;
    if(elemento.type === 'button'){
      const indice = elemento.dataset.indice;
        removerItem(indice);
    }else if(elemento.type === 'ckeckbox'){
        const indice = elemento.dataset.indice;
        atualizarItem(indice);

    }

}

document.getElementById('newItem').addEventListener('keypress',inserirItem);
document.getElementById('todoList') .addEventListener('click',clickItem);

atualizar();
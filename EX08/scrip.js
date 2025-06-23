const listaUsuario = document.getElementById('lista-usuario')

async function carregarUsuarios(){
    try{
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users')
        const usuarios = await resposta.json();
        usuarios.forEach(usuario=>{
            adcionarUsuariosNaTela(usuario.name, usuario.email)
        });
    }catch(erro){
        console.erro('Erro ao carregar usuarios',erro)
    }
}
function adcionarUsuariosNaTela(nome,email){
    const li = document.createElement('li');
    li.textContent=`${nome} - ${email}`;
    listaUsuario.appendChild(li);
}
carregarUsuarios();
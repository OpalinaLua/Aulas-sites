const listaUsuario = document.getElementById('lista-usuario')
const form = document.getElementById('form-usuario')

async function carregarUsuarios(){
    try{
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users')
        const usuarios = await resposta.json();
        usuarios.forEach(usuario=>{
            adcionarUsuariosNaTela(usuario.name, usuario.email)
        });
    }catch(erro){
        console.error('Erro ao carregar usuarios',erro)
    }
}
function adcionarUsuariosNaTela(nome,email){
    const li = document.createElement('li');
    li.textContent=`${nome} - ${email}`;
    listaUsuario.appendChild(li);
}
form.addEventListener('submit',async(evento)=>{
    evento.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    const novoUsuario ={
        nome: nome,
        email: email,
    }
    try{
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(novoUsuario),
        });
        
        const usuariocriado= await resposta.json();
        adcionarUsuariosNaTela(usuariocriado.nome,usuariocriado.email);
        form.reset();
    }catch(erro){
        console.error('Erro ao carregar usuarios',erro)
    }
})
carregarUsuarios();
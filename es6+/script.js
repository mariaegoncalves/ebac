const alunos = [
    { nome: 'Maria', nota: 7 },
    { nome: 'João', nota: 5 },
    { nome: 'Ana', nota: 8 },
    { nome: 'Pedro', nota: 4 },
    { nome: 'Luiza', nota: 6 }
];

const alunosAprovados = (array) => {
    return array.filter(aluno => aluno.nota >= 6);
};

const aprovados = alunosAprovados(alunos);
const listaAprovados = document.getElementById('lista-aprovados');


aprovados.forEach(aluno => {
    const li = document.createElement('li');
    li.textContent = `${aluno.nome} - Nota: ${aluno.nota}`;
    listaAprovados.appendChild(li);
});

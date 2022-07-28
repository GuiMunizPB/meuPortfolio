const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p>',
                    '<p>CSS</p> <br> <p>É uma "folha de estilo" utilizada para definir a aparência de um documento web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação compilada e dinamicamente digitada. É uma das principais tecnologias do desenvolvimento web.</p> <br>',
                    '<p>ReactJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
                    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído. Bastante usado para registrar o histórico de edições de qualquer tipo de arquivo.</p> <br>',
                    '<p>Java</p> <br> <p>É uma linguagem de promagação compilada, interpretada e estaticamente digitada. Caracterizada pela sua independência de plataforma.</p> <br>',
                    '<p>Python</p> <br> <p>É uma linguagem de promagação compilada, interpretada e dinamicamente digitada. Caracterizada pelo seu enorme suporte de bibliotecas.</p> <br>',
]

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima da habilidade para ver a descrição */';
    } )
} );
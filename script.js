const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "O que é inteligência artificial?", 
    alternativas: [
        {
        texto: "()A Inteligência Artificial descreve um processo no qual as máquinas “aprendem” a aprender. Sistemas de computador imitam a inteligência humana, simulando um comportamento inteligente baseado em padrões especificados ou aprendidos", 
       afirmacao: " afirmacao "
        },
    
    ]
},
{
    enunciado: "Onde essa tecnologia está sendo usada já?",
    alternativas: [
        texto: "()Softwares. Firewalls, bloqueios de spam e filtros em conteúdos",
        afirmacao: "afirmacao"

   ]
},
{
    enunciado: "O que ela pode e não pode fazer?",
    alternativas: [
       texto: "()não são capazes de expressar emoções, empatia ou inteligência social.",
        afirmcao: "afirmacao"
   ]
},
{
    enunciado: "Como a Inteligência Artificial aprende?",
    alternativas: [
        texto: "()através de algoritmos e modelos que processam grandes volumes de dados",
       afirmacao:"afirmacao"]
},
{
    enunciado: "O que a Inteligência Artificial não é capaz de fazer?",
    alternativas: [
        texto: "()ajudar as máquinas a executar tarefas que antes precisavam de uma ação humana",
        afirmacao:"afirmacao"
        
   ]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
if(atual >= perguntas.lenght){
    mostraResultad();
    return;
}

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventlistener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);

    }
}
     function respostaSelecionada(opcaoselecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent =historiaFinal;
    caixaAlternativas.textContent="";
}
mostraPergunta();

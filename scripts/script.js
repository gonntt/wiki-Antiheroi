

window.onmouseover = function(){
    document.oncontextmenu = function()
    {
        alert("funçâo bloqueada");
        return false;
    }
}



function capturar() {
    var element = document.getElementById("comentario");
    element.classList.add("show-modal");
}
function capturar1(){
    var element = document.getElementById("comentario");
    element.classList.remove("show-modal");
}
function suporte(){
    var suporte = document.getElementById("suporte");

    var dados = JSON.parse(localStorage.getItem("dadosProduto"));
    if(dados == null){
        localStorage.setItem("dadosProduto","[]");
        dados = [];
    }
    var auxRegistro = {
        Comentario: suporte.value
    }
    dados.push(auxRegistro);
    localStorage.setItem("dadosProduto", JSON.stringify(dados));
}
const LocalStoragecomentarios = JSON.parse(localStorage
    .getItem('comentario'))
let transactions = localStorage
.getItem('comentario') !== null ? LocalStoragecomentarios : []

let perguntas =
[ 
    
    {
    ttitulo:'1. Qual é sua ambição?',
    alternativas:['Poder','Dinheiro','Amor','Justiça'],
    correta:0,
},
{
    ttitulo:'2. O mais importa pra Você?',
    alternativas:['Poder','Dinheiro','Amor','Justiça'],
    correta:3,
},
{
    ttitulo:'3. Pelo o quer, você pagaria qualquer preço?',
    alternativas:['Poder','Prazer','Amor','Ideologia(Sua verdade)'],
    correta:3,
},
{
    ttitulo:'4. Qual é o seu Talento?',
    alternativas:['Lutar','Planejar','Manipular','Treinar'],
    correta:0,
},
{
    ttitulo:'5. Os fins justificar os meios?',
    alternativas:['Sim','Não','Dentro dos Limites Morais','Dentro dos Limites Humanos'],
    correta:0,
},
{
    ttitulo:'6. A opinião das pessoas é:',
    alternativas:['Tudo','Importante','Lixo','Não sei'],
    correta:2,
}
]
let app = {
    start: function(){
    
        this.Atualpos = 0;
        this.Totalpontos = 0;
    
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element,index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },
    
    mostraquestao: function(q){
        this.qatual = q;
        // mostrando o titulo
        let titleDiv = document.getElementById('ttitulo');
        titleDiv.textContent = q.ttitulo;
        // mostrando as alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element,index){
            element.textContent = q.alternativas[index];
        })
    
    },
    
    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            this.Atualpos = 0;
        }
    },
    
    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correta")
            this.Totalpontos++;
            this.mostraresposta(true);
        }
        else{
            console.log("Errada")
            this.mostraresposta(false);
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },
    
    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        scoreDiv.textContent = `Sua pontuacao: ${this.Totalpontos}`;
    },
    
    mostraresposta: function (correto) {
        let resultDiv = document.getElementById('result');
        let result = '';
        // formate a mensagem a ser exibida
        if (correto) {
          result = 'Esse é o Caminho';
        }
        else {
          // obtenha a questão atual
          let pergunta = perguntas[this.Atualpos];
          // obtenha o índice da resposta correta da questão atual
          let cindice = pergunta.correta;
          // obtenha o texto da resposta correta da questão atual
          let ctexto = pergunta.alternativas[cindice];
          result = `Incorreto! Resposta Correta: ${ctexto}`;
        }
        resultDiv.textContent = result;
      },
    
    }
    app.start();
// por regra geral, Por regra geral use const para valores que não alteram o valor
// e let para variáveis que irão alterar de valor
// var é antigo e era usado até 2015, porém agora o let é usado no lugar para os novos navegadores

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d"); //contém propriedades para poder desenhar

let mouseEvent = "empty"; //criamos essa variável para controlar qual evento está ocorrendo na tela, no inicio, será vazio, sem evento
let lastPositionX, lastPositionY; //variáveis que terão as ultimas coordenadas de X e Y armazenadas
let color = "black"; //iniciando a variável color para black
let widthLine = 1; //iniciando a variável largura da linha para 1

canvas.addEventListener("mousedown", myMouseDown);//o addEventListener configura a função myMouseDown sempre que houver o evento de clique do mouse
function myMouseDown(e) {
    color = document.getElementById("color").value; //obtem a cor escolhida para desenhar
    widthLine = document.getElementById("widthLine").value; //obtem a largura da linha para desenhar
    mouseEvent = "mouseDown"; //altera a variável para o evento de mouseDown
}

canvas.addEventListener("mouseup", myMouseUp); //quando o botão do mouse é liberado
function myMouseUp(e) {
    mouseEvent = "mouseUP"; //alterando o evento da variável
}

canvas.addEventListener("mouseleave", myMouseLeave); //quando o mouse sai fora do elemento (canva)
function myMouseLeave(e) {
    mouseEvent = "mouseleave"; //alterando o evento da variável
}

canvas.addEventListener("mousemove", myMouseMove); //verifica se o mouse está se movendo
function myMouseMove(e) {
    let PositionMouseX = e.clientX - canvas.offsetLeft; //obtem a posição real do mouse em relação ao canvas no eixo x
    let PositionMouseY = e.clientY - canvas.offsetTop; //obtem a posição real do mouse em relação ao canvas no eixo y

    if (mouseEvent == "mouseDown") { //verifica se além  de o mouse estar se movendo, também o botão do mouse está sendo clicado, para dai sim, desenhar
        ctx.beginPath(); //diz ao canvas para começar a desenhar
        ctx.strokeStyle = color; //define a cor da linha
        ctx.lineWidth = widthLine; //define a largura da linha

        ctx.moveTo(lastPositionX, lastPositionY); // sempre armazenando as ultimas coordenadas dos eixos onde o mouse está clicando
        ctx.lineTo(PositionMouseX, PositionMouseY); //irá desenar a linha do moveTo até lineTo, ou seja, pega a ultima coordenada armazenada e vai desenhando até onde está o mouse atual
        ctx.stroke(); //para o formato ser de uma linha
    }
    
    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

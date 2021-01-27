//variáveis globais
var botao_adcionar = document.querySelector("#inserir_dados");
var campo_codigo = document.querySelector("input[ name='codigo']");
var campo_nome = document.querySelector("input[name='nome']");
var corpo_tabela = document.querySelector("tbody");


function Pedido(codigo, nome) {
	this.codigo = codigo;
	this.nome = nome;
	this.mostrar_dados = function () {
		console.log(this.codigo + " " + this.nome)
	}

	this.criar_linha_tabela = function () {

		//criar elementos

		var linha = document.createElement("tr");
		var campo_codigo = document.createElement("td");
		var campo_nome = document.createElement("td");

		//aplicar um estilo aos elementos

		campo_codigo.classCodigo = "bold";
		campo_nome.classNome = "bold";

		//criar nós

		var text_codigo = document.createTextNode(this.codigo);
		var text_nome = document.createTextNode(this.nome);
		//document.getElementById("corpo_tabela").appendChild(adicionar_linha);

		//vincular os nós aos elementos

		campo_codigo.appendChild(text_codigo);
		campo_nome.appendChild(text_nome);
		linha.appendChild(campo_codigo);
		linha.appendChild(campo_nome);

		//vincular os elemetnos ao documento

		corpo_tabela.appendChild(linha);
	}

};
//Funções

function inserir_dados(event) {
	event.preventDefault();
	var codigo_informado = campo_codigo.value;
	var codigo_informado = campo_nome.value;

	if (codigo_informado) {

		novo_pedido = new Pedido(campo_codigo.value, campo_nome.value);
		novo_pedido.criar_linha_tabela();

	} else {
		document.querySelector(".alerta").innerText = "Código Inválido";
	}



};
function adicionar_linha(event) {
	event.preventDefault();

}
this.criar_pelo_template = function () {
	var template = document.querySelector("#template1");
	lista_td = template.content.querySelectorAll("td");
	lista_td[0].textContent = this.codigo;
	lista_td[1].textContent = this.nome;

};

//Rotinas Principais

botao_adcionar.addEventListener('click', inserir_dados);
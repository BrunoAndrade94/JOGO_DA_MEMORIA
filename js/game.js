const grid = document.querySelector(".grid");

const personagens = [
	"beth",
	"jerry",
	"jessica",
	"morty",
	"pessoa-passaro",
	"pickle-rick",
	"rick",
	"summer",
	"meeseeks",
	"scroopy",
];

let primeira_carta = "";
let segunda_carta = "";

const limpar_cartas = () => {
	primeira_carta = "";
	segunda_carta = "";
};

const criar_elemeto = (tag, classe) => {
	const elemento = document.createElement(tag);
	elemento.className = classe;
	return elemento;
};

const se_jogo_acabou = () => {
	const cartas_desabilitadas = document.querySelectorAll("disabled__card");
	console.log(cartas_desabilitadas);
	if (cartas_desabilitadas.length === 2) {
		alert("PARABÉNS VOCÊS VENCEU, ESSE JOGO HARD!");
	}
};

const checar_carta = () => {
	const primeiro_personagem =
		primeira_carta.getAttribute("data-personagem");
	const segundo_personagem = segunda_carta.getAttribute("data-personagem");

	if (primeiro_personagem === segundo_personagem) {
		primeira_carta.firstChild.classList.add("disabled__card");
		segunda_carta.firstChild.classList.add("disabled__card");
		se_jogo_acabou();
		limpar_cartas();
	} else {
		setTimeout(() => {
			primeira_carta.classList.remove("reveal__card");
			segunda_carta.classList.remove("reveal__card");
			limpar_cartas();
		}, 500);
	}
};

const carta_revelada = ({ target }) => {
	if (target.parentNode.className.includes("reveal__card")) return;

	if (primeira_carta === "") {
		target.parentNode.classList.add("reveal__card");
		primeira_carta = target.parentNode;
	} else if (segunda_carta === "") {
		target.parentNode.classList.add("reveal__card");
		segunda_carta = target.parentNode;

		checar_carta();
	}
};

const criar_carta = (personagem) => {
	const carta = criar_elemeto("div", "card");
	const frente = criar_elemeto("div", "face front");
	const atras = criar_elemeto("div", "face back");

	frente.style.backgroundImage = `url(../images/${personagem}.png)`;

	carta.appendChild(frente);
	carta.appendChild(atras);

	carta.addEventListener("click", carta_revelada);
	carta.setAttribute("data-personagem", personagem);

	return carta;
};

const misturar_personagens = () => {
	const personagens_duplicados = [...personagens, ...personagens];
	const personagens_misturados = personagens_duplicados.sort(
		() => Math.random() - 0.5
	);
	return personagens_misturados;
};

const preview_cartas = (perso) => {};

const carregar_jogo = () => {
	const perso_mistu = misturar_personagens();

	perso_mistu.forEach((personagem) => {
		const carta = criar_carta(personagem);
		grid.appendChild(carta);
	});
};

carregar_jogo();

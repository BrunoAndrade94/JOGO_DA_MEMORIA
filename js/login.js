const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");
const form = document.querySelector(".login__form");

const validate_input = ({ target }) => {
	if (target.value.length < 3) {
		button.setAttribute("disabled", "");
		return;
	}
	button.removeAttribute("disabled");
};

const handle_submit = (event) => {
	event.preventDefault();
	localStorage.setItem("player", input.value);
	window.location = "../pages/game.html";
};

input.addEventListener("input", validate_input);
form.addEventListener("submit", handle_submit);

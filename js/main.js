document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});

	// Obtener los elementos de audio
	const correctSound = document.getElementById('correct-sound');
	const wrongSound = document.getElementById('wrong-sound');

	// Lista de mensajes para la respuesta incorrecta
	const incorrectMessages = [
		"¡Nooooooooooooooooooooo bebe triste!",
		"Te estas portando mal.",
		"¿Otra vez? pepis te hace cagaaar.",
		"mmmmmm que feo lo tuyo pepis no has a verme."
	];
	let incorrectCounter = 0;

	// Obtener elementos
	const tick = document.getElementById('tick');
	const cross = document.getElementById('cross');
	const correctResponse = document.getElementById('correct-response');
	const incorrectText = document.getElementById('incorrect-text');

	// Función al hacer clic en el tick
	tick.onclick = () => {
		correctResponse.classList.remove('hidden'); // Muestra el mensaje de respuesta correcta
		cross.classList.remove('move'); // Detiene la animación de la cruz si se estaba moviendo
		incorrectText.classList.add('hidden'); // Oculta el texto de respuesta incorrecta
		correctSound.play(); // Reproducir sonido correcto
	};

	// Función al hacer clic en la cruz
	cross.onclick = () => {
		cross.classList.add('move'); // Añade movimiento a la cruz
		incorrectText.classList.remove('hidden'); // Muestra el texto de respuesta incorrecta

		// Mostrar un nuevo mensaje cada vez
		incorrectText.textContent = incorrectMessages[incorrectCounter];
		incorrectCounter = (incorrectCounter + 1) % incorrectMessages.length; // Ciclo entre los mensajes
		wrongSound.play(); // Reproducir sonido incorrecto
	};
});




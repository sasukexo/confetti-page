addEventListener("DOMContentLoaded", () => {
	function showConstructionMessageAndOpenLink() {
		document.getElementById("back-link").style.display = "none";
		document.getElementById("constructionMessage").style.display = "block";

		setTimeout(change_init, 0);
		setTimeout(compiling, 5000);
		setTimeout(change_building, 10000);
		setTimeout(change_deployed, 20000);

		setTimeout(startConfetti, 21000);

		setTimeout(openLink, 30000); // Delay opening the link for 30 seconds
	}
	let dots = 0; // Initialize the number of dots

	function change_init() {
		// Add a dot to the text in "constructionMessage"
		const messageElement = document.getElementById("constructionMessage");
		messageElement.innerHTML = "Initializing" + ".".repeat(dots);

		// Increment the number of dots (up to a maximum of 3, for example)
		if (dots < 5) {
			dots++;
		} else {
			// exit the function
			dots = 0;
			return;
		}

		// Wait for 500 milliseconds and then call the function again
		setTimeout(change_init, 800);
	}

	function compiling() {
		// Add a dot to the text in "constructionMessage"
		const messageElement = document.getElementById("constructionMessage");
		messageElement.innerHTML = "Compiling Code" + ".".repeat(dots);

		// Increment the number of dots (up to a maximum of 3, for example)
		if (dots < 5) {
			dots++;
		} else {
			// exit the function
			dots = 0;
			return;
		}

		// Wait for 500 milliseconds and then call the function again
		setTimeout(compiling, 800);
	}

	function change_building() {
		// Add a dot to the text in "constructionMessage"
		const messageElement = document.getElementById("constructionMessage");
		messageElement.innerHTML = "Building" + ".".repeat(dots);

		// Increment the number of dots (up to a maximum of 3, for example)
		if (dots < 5) {
			dots++;
		} else {
			// exit the function
			dots = 0;
			return;
		}

		// Wait for 500 milliseconds and then call the function again
		setTimeout(change_building, 1800);
	}

	function change_deployed() {
		document.getElementById("constructionMessage").innerHTML = "Deployed!";
	}

	function openLink() {
		window.location.href = "https://pechacks.org"; // Redirect to the desired page
	}

	function startConfetti() {
		confetti.start();
		setTimeout(stopConfetti, 30000); // Stop confetti after 30 seconds (adjust as needed)
	}

	function stopConfetti() {
		confetti.stop();
	}
});

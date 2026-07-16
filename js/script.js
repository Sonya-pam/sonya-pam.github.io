const button = document.getElementById("startButton");

if (button) {

    button.addEventListener("click", () => {

        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = "welcome.html";

        }, 700);

    });

}

const continueButton = document.getElementById("continueButton");

if (continueButton) {

    continueButton.addEventListener("click", () => {

        document.body.style.opacity = "0";

        setTimeout(() => {

           window.location.href = "countries.html";

        }, 700);

    });

}

      function order() {
        let name = prompt("What is your name?");
        let option = prompt(
          "What type of Banh mi do you choose? Please answer either Chicken or Pork?"
        )
          .toLowerCase()
          .trim();

        let button = document.querySelector("button");

        if (option.includes("pork")) {
          button.innerHTML =
            "Hello, " +
            name +
            ". You've chosen Pork Banh mi.<br /> We will contact you back soon. 😆";
        } else if (option.includes("chicken")) {
          button.innerHTML =
            "Hello, " +
            name +
            ". You've chosen Chicken Banh mi.<br /> We will contact you back soon. 😆";
        } else {
          button.innerHTML =
            "Sorry, we don't have the type of Banh mi you asked. 😢";
        }
      }

      let orderButton = document.querySelector("button");
      orderButton.addEventListener("click", order);
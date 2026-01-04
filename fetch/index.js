    const idInput = document.getElementById("number");
    const btn = document.getElementById("btn");
    const userData = document.getElementById("phoneData");

    btn.addEventListener("click", () => {
      if (idInput.value < 1 || idInput.value > 10) {
        userData.innerHTML =
          "<p class='error'>Kérlek, 1 és 10 közötti számot adj meg.</p>";
        return;
      }

      userData.innerHTML = "Betöltés...";

      fetch(`https://surveys-5jvt.onrender.com/api/phones/${idInput.value}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((phone) => {
                console.log("ID:", phone.id);
                console.log("Márka:", phone.brand);
                console.log("Modell:", phone.model);
                console.log("NFC-képes?:", phone.nfc);
                console.log("Kamera:", phone.camera);

          userData.innerHTML = `
            <h2>${phone.model.toLowerCase().includes(phone.brand.toLowerCase()) ? phone.model : phone.brand + " " + phone.model}</h2>

            <p>ID: ${phone.id}</p>
            <p>Márka: ${phone.brand}</p>
            <p>Modell: ${phone.model}</p>
            <p>NFC-képes? ${phone.nfc ? "Igen" : "Nem"}</p>
            <p>Kamera: ${phone.camera}MPx</p>
          `;
        })
        .catch((error) => {
          console.error("Fetch hiba:", error);
          userData.innerHTML =
            "<p class='error'>Hiba történt az adatok lekérése során.</p>";
        });
    });
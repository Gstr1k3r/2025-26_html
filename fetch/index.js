    const idInput = document.getElementById("number");
    const btn = document.getElementById("btn");
    const userData = document.getElementById("userData");

    btn.addEventListener("click", () => {
      if (idInput.value < 1 || idInput.value > 10) {
        userData.innerHTML =
          "<p class='error'>Kérlek, 1 és 10 közötti számot adj meg.</p>";
        return;
      }

      userData.innerHTML = "Betöltés...";

      fetch(`https://jsonplaceholder.typicode.com/users/${idInput.value}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((user) => {
                console.log("ID:", user.id);
                console.log("Név:", user.name);
                console.log("Felhasználónév:", user.username);
                console.log("Email:", user.email);
                console.log("Telefon:", user.phone);
                console.log("Weboldal:", user.website);
                console.log("Cím:", user.address);
                console.log("Geolokáció:", user.address.geo);
                console.log("Cégadatok:", user.company);

          userData.innerHTML = `
            <h2>${user.name}</h2>

            <p>ID: ${user.id}</p>
            <p>Email: ${user.email}</p>
            <p>Telefon: ${user.phone}</p>
            <p>Weboldal: ${user.website}</p>

            <h3>Cím</h3>
            <p>${user.address.zipcode} ${user.address.city}</p>
            <p>${user.address.street} ${user.address.suite}</p>

            <h3>Geolokáció</h3>
            <p>Latitude: ${user.address.geo.lat}</p>
            <p>Longitude: ${user.address.geo.lng}</p>

            <h3>Cég</h3>
            <p>Név: ${user.company.name}</p>
            <p>Szlogen: ${user.company.catchPhrase}</p>
            <p>Tevékenység: ${user.company.bs}</p>
          `;
        })
        .catch((error) => {
          console.error("Fetch hiba:", error);
          userData.innerHTML =
            "<p class='error'>Hiba történt az adatok lekérése során.</p>";
        });
    });
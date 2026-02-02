let xanoUrl = new URL("https://x8ki-letl-twmt.n7.xano.io/api:IKGxdjTL/");

function getCars() {
  let request = new XMLHttpRequest();

  let url = xanoUrl.toString() + "cars";

  request.open("GET", url, true);

  request.onload = function () {
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      const cardContainer = document.getElementById("Cards-Container");

      data.forEach((car) => {
        const style = document.getElementById("samplestyle");
        const card = style.cloneNode(true);

        card.setAttribute("id", "");
        card.style.display = "block";

        card.addEventListener("click", function () {
          document.location.href = "/item?id=" + car.id;
        });

        //const img = card.getElementsByTagName('IMG')[0]
        //img.src = car.banner.url + "?tpl=big:box";

        const h3 = card.getElementsByTagName("H3")[0];
        h3.textContent = car.name;

        const p = card.getElementsByTagName("P")[0];
        p.textContent = `${car.description.substring(0, 240)}`;

        cardContainer.appendChild(card);
      });
    }
  };

  request.send();
}

(function () {
  getCars();
})();

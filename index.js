// Load six Data And Showing Them In cards Start
const loadSixData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        showSixData(data.data.tools.slice(0,6));
    } catch (err) {
        console.log(err);
    }
}
loadSixData();

const showSixData = data => {

    const parentCards = document.getElementById("cards");
    data.forEach(singleData => {
        console.log(singleData);
        const {image,features,name,published_in} = singleData;
        const apiDate = { date: published_in };
        const dateString = apiDate["date"];
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear() % 100;
        const formattedDate = `${day}/${month}/${year}`;
        const childDiv = document.createElement("div");
        childDiv.innerHTML = `
        <div class="col">
              <div class="card h-75">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-center">Features</h5>
                  <ol class = "mx-auto">
                  <li>${features[0]}</li>
                  <li>${features[1]}</li>
                  <li>${features[2]}</li>
                  </ol>
                  <hr>
                  <div class="d-flex justify-content-between">
                    <div>
                    <h5>${name}</h5>
                    <div class="d-flex gap-2 align-items-center">
                    <i class="fa-solid fa-calendar"></i>
                    <p class="my-2">${formattedDate}</p>
                    </div>
                    </div>
                    <div>
                    <i class="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `
        parentCards.appendChild(childDiv);
    });
}
// Load six Data And Showing Them In cards End
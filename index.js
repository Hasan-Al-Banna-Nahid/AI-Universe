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
        const {image} = singleData;
        const childDiv = document.createElement("div");
        childDiv.innerHTML = `
        <div class="col">
              <div class="card">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
        `
        parentCards.appendChild(childDiv);
    });
}
// Load six Data And Showing Them In cards End
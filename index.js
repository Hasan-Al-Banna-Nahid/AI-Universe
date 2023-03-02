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
    parentCards.innerHTML = '';
    data.forEach(singleData => {
        const {image,features,name,published_in,id} = singleData;
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
                  <li>${singleData.features && singleData.features.length > 2?singleData.features[2]:"No Data Found"}</li>
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
                    <button onclick="loadModalData('${id}')" class="rounded p-3 btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right" ></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `
        parentCards.appendChild(childDiv);
    });
}
document.getElementById("see-more-btn").addEventListener("click",function(){
    document.getElementById("see-more-btn").style.display = "none";
})
// Load six Data And Showing Them In cards End


// Load All Data And Showing Them In cards Start
const loadAllData = async () =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        showAllData(data.data.tools);
    }catch(err){
        console.log(err);
    }
}

const showAllData = data =>{
    const parentCards = document.getElementById("cards");
    parentCards.innerHTML = '';
    data.forEach(singleData => {
        const {image,features,name,published_in,id} = singleData;
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
                  <li>${singleData.features && singleData.features.length > 2?singleData.features[2]:"No Data Found"}</li>
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
                    <button onclick="loadModalData('${id}')" class="rounded p-3 btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right" ></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `
        parentCards.appendChild(childDiv);
    });
}
// Load All Data And Showing Them In cards End

// Showing Modal
const loadModalData = async(id) =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    try{
        const res = await fetch(url)
        const data = await res.json();
        displayModalData(data.data);
    }catch(err){
        console.log(err);
    }
}

const displayModalData = data =>{
    console.log(data);
    document.getElementById("exampleModalLabel").innerText = `${data.tool_name}`;
    const modalLeftPart = document.getElementById("modalLeftPart");
    modalLeftPart.innerHTML = `
    <h3>${data.description?data.description:"No Data Found"}</h3>
    <div class="d-flex justify-content-around align-items-center">
        <button class="btn btn-danger">${data.pricing[0].price?data.pricing[0].price:""} </br> ${data.pricing[0].plan}</button>
        <button class="btn btn-success">${data.pricing[1].price} </br> ${data.pricing[1].plan}</button>
        <button class="btn btn-warning">${data.pricing[2].price} </br> ${data.pricing[2].plan}</button>
    </div>
    <div class="d-flex justify-content-between align-items-center">
    <div>
    <h4 class="my-2">Features</h4>
    <ul class="my-2">
        <li>${data.features['1'].feature_name}</li>
        <li>${data.features['2'].feature_name}</li>
        <li>${data.features['3'].feature_name}</li>
    </ul>
    </div>
    <div>
    <h4 class="my-2">Integrations</h4>
    <ul class="my-2">
        <li>${data.integrations[0]}</li>
        <li>${data.integrations[1]?data.integrations[1]:"No Data Found"}</li>
        <li>${data.integrations[2]?data.integrations[2]:"No Data Found"}</li>
    </ul>
    </div>
    </div>
    </div>
    `
    
}
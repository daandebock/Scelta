const url = "https://cdn.contentful.com//spaces/xtaqaaxr98nh/environments/master/entries?access_token=Ee7XsWP5Law7VbBwq51BB3TEGPeOqTiluAIoT4yslUw"
async function api() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const main = document.querySelector("main");
    const createSection = document.createElement("section");
    createSection.classList.add("item");
    createSection.innerHTML = '<a href="' + data.items[0].fields.googleMapsLink + '">niets</a>';
    main.appendChild(createSection);



};

api();




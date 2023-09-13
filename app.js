const getBtn = document.querySelectorAll(".btn");
// const body = document.querySelector("body")
const mainDiv = document.querySelector(".main");
const mainContainer = document.querySelector(".main-container");
const loadBtn = document.querySelector(".load-btn");
const menuBtn = document.querySelector(".menu-btn");
const navbarList = document.querySelector("nav");
let isToggle = true;
// const pointer = document.querySelector(".pointer");


// body.addEventListener("mousemove", (e) =>{
//     pointer.style.left = e.x + "px";
//     pointer.style.top = e.y + "px";
// })

getBtn.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        getData(e, index);
    })
})

menuBtn.addEventListener("click", (e) =>{
    if(isToggle){
        navbarList.classList.add('show');
        menuBtn.style.fill="white";
        // e.srcElement = `<svg xmlns="http://www.w3.org/2000/svg" class="menu-btn" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>`
        isToggle = false;
    }
    else{
        navbarList.classList.remove('show');
        menuBtn.style.fill="black";
        // e.srcElement = `<svg xmlns="http://www.w3.org/2000/svg" class="menu-btn" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`
        isToggle = true;
    }
})

loadBtn.addEventListener("click", () => {
    const cardData = [
        {
            logoSrc: "company logo/apple-logo.svg",
            companyName: "Apple"
        },
        {
            logoSrc: "company logo/Microsoft-Logo.wine.svg",
            companyName: "Microsoft"
        },
        {
            logoSrc: "company logo/Infosys.png",
            companyName: "Infosys"
        },
        {
            logoSrc: "company logo/reliance-petroleum-vector-logo.svg",
            companyName: "Reliance"
        },
        {
            logoSrc: "company logo/State Bank Of India.svg",
            companyName: "State Bank of India"
        },
        {
            logoSrc: "company logo/IRCTC.png",
            companyName: "IRCTC"
        },
        {
            logoSrc: "company logo/Capgemini_201x_logo.svg",
            companyName: "Capgemini"
        },
        {
            logoSrc: "company logo/Adobe_Inc.-Logo.wine.svg",
            companyName: "Adobe"
        },
        // Add more card data objects as needed
    ];

    const createCard = document.createElement("div");
    createCard.classList.add("main");

    cardData.forEach((data) => {
        const cardDetail = document.createElement("div");
        cardDetail.classList.add("card");
        cardDetail.innerHTML = `
            <img src="${data.logoSrc}" alt="" class="company-logo">
            <h4>${data.companyName}</h4>
            <button class="btn">Get Data</button>
        `;

        // Add an event listener to the button
        const button = cardDetail.querySelector(".btn");
        button.addEventListener("click", () => {
            // Call another function and pass the h4 tag content
            getDataAnother(data.companyName);
        });

        createCard.appendChild(cardDetail);
    });

    // Assuming you have an element with an id to append createCard to, e.g., "container"
    // const container = document.getElementById("container");
    mainContainer.appendChild(createCard);
    dNone();
});



function getData(e) {
    // window.location.href = "https://colab.research.google.com/drive/1bantYWXNTD5ahWkDTk2gYtMgO_nL5f7Y?usp=sharing"
    const companyName = e.target.parentElement.querySelector("h4").innerText;
    switch (companyName) {
        case "Wipro":
            let link = "https://colab.research.google.com/drive/1o1TynxhWzpt4IvAXnW4s4n2sPZTHSMOE?usp=sharing";
            window.open(link, "_blank")
            break;
        case "Cognizant":
            let link1 = "https://colab.research.google.com/drive/1NrM6v1n9aeQTKIkP181oM8dqbln5_UsK?usp=sharing";
            window.open(link1, "_blank")
            break;
        case "TCS":
            let link2 = "https://colab.research.google.com/drive/196dfc5Y-jLNlp9x13Gtso9X5745d22Ec?usp=sharing";
            window.open(link2, "_blank")
            break;
        case "Amazon":
            let link3 = "https://colab.research.google.com/drive/10pFpTiKNcyZ48un4WkdpPEjsYJO010B8?usp=sharing";
            window.open(link3, "_blank")
            break;
        case "Apple":
            let link4 = "https://colab.research.google.com/drive/1IiUlYlWwmLeOFwdc-ECoIETAKJuin1mZ?usp=sharing";
            window.open(link4, "_blank")
            break;
        case "Microsoft":
            let link5 = "https://colab.research.google.com/drive/1hquBZy21xlk98EfbKf45Eqlkk5_OCz3b?usp=sharing";
            window.open(link5, "_blank")
            break;
        default:
            alert('No such Company');
            break;
    }
}
function getDataAnother(companyName){
    switch (companyName) {
        case "Wipro":
            let link = "https://colab.research.google.com/drive/1o1TynxhWzpt4IvAXnW4s4n2sPZTHSMOE?usp=sharing";
            window.open(link, "_blank")
            break;
        case "Cognizant":
            let link1 = "https://colab.research.google.com/drive/1NrM6v1n9aeQTKIkP181oM8dqbln5_UsK?usp=sharing";
            window.open(link1, "_blank")
            break;
        case "TCS":
            let link2 = "https://colab.research.google.com/drive/196dfc5Y-jLNlp9x13Gtso9X5745d22Ec?usp=sharing";
            window.open(link2, "_blank")
            break;
        case "Amazon":
            let link3 = "https://colab.research.google.com/drive/10pFpTiKNcyZ48un4WkdpPEjsYJO010B8?usp=sharing";
            window.open(link3, "_blank")
            break;
        case "Apple":
            let link4 = "https://colab.research.google.com/drive/1IiUlYlWwmLeOFwdc-ECoIETAKJuin1mZ?usp=sharing";
            window.open(link4, "_blank")
            break;
        case "Microsoft":
            let link5 = "https://colab.research.google.com/drive/1hquBZy21xlk98EfbKf45Eqlkk5_OCz3b?usp=sharing";
            window.open(link5, "_blank")
            break;
            case "IRCTC":
            let link6 = "https://colab.research.google.com/drive/1bXmYcqVdwJx4VoxIbWq7VClcAr49fqRx?usp=sharing";
            window.open(link6, "_blank")
            break;
        case "Capgemini":
            let link7 = "https://colab.research.google.com/drive/1yHtsjHQzMekOjPsDUi-8pYyVXSMRt_DB?usp=sharing";
            window.open(link7, "_blank")
            break;
        case "State Bank of India":
            let link8 = "https://colab.research.google.com/drive/1wxwD_Iv9cwtm5cUrnnrrt9nM8vMgCdz8?usp=sharing";
            window.open(link8, "_blank")
            break;
        case "Reliance":
            let link9 = "https://colab.research.google.com/drive/1DPsP5Hb83ZdbhzceWX_eJIA_fOIkIenG?usp=sharing";
            window.open(link9, "_blank")
            break;
        case "Infosys":
            let link10 = "https://colab.research.google.com/drive/1qnjszKJOhh2aX5ebzaEiltvkNeHqzhum?usp=sharing";
            window.open(link10, "_blank")
            break;
        case "Adobe":
            let link11 = "https://colab.research.google.com/drive/1GvVZEkyPphjaCOtubPKaobdxc1psvp76?usp=sharing";
            window.open(link11, "_blank")
            break;
        default:
            alert('No such Company');
            break;
    }
}

 function dNone(e){
    loadBtn.classList.add("none")
 }
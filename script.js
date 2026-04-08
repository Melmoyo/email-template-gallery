// PROJECTS DATA

const data=[{
    image:"images/devpulse.PNG",
    title:"Devpulse",
    tag:"Newsletter",
    description:"Editorial weekly digest with hero story , numbered story, tip of the week , tools section and community poll.",
    tags:["Multi-section", "Dark Theme", "Editorial"],
    techStack:"MJML",
    link:"https://emaildeveloper.netlify.app/devpulse/newsletter-email"

},
{
    image:"images/fixit.PNG",
    title:"FixIt",
    tag:"Onboarding",
    description:"Welcome email for a local services directory featuring a navy hero, 3-column category grid,numbered how-it-works steps and a testimonial.",
    tags:["Category grid", " Navy & amber ", " Multi-column"],
    techStack:"MJML",
    link:"https://emaildeveloper.netlify.app/fixit/welcome-email"

},
{
    image:"images/mercato.PNG",
    title:"Mercato",
    tag:"Transactional",
    description:"Order confirmation email with product line items,mj-table order summary, delivery date banner,upsell grid and a full dark theme.",
    tags:["Order Summary", "Dark Theme", "mj-table"],
    techStack:"MJML",
    link:"https://emaildeveloper.netlify.app/mercato/confirmation-email"

},
{
    image:"images/stackd.PNG",
    title:"Stackd",
    tag:"Promotional",
    description:"High-energy Black Friday promo with static countdown timer, 2x2 product deal grid,featured deal spotlight and urgency strip.",
    tags:["Countdown", "Product grid", "Black & yellow"],
    techStack:"MJML",
    link:"https://emaildeveloper.netlify.app/stackd/black-friday-email"

},
{
    image:"images/vaultly.PNG",
    title:"Vaultly",
    tag:"Security",
    description:"Minimal password reset email with a single CTA, security info cards, warning box,fallback URL and one-font clean layout.",
    tags:["Minimal", "Single Focus", "Light theme"],
    techStack:"MJML",
    link:"https://emaildeveloper.netlify.app/vaultly/password-reset-email"

}
];


/*TAGS*/
const tagStyles={
    Newsletter:"tag-orange",
    Promotional:"tag-yellow",
    Onboarding:"tag-teal",
    Transactional:"tag-purple",
    Security:"tag-pink"
}
const container=document.querySelector(".cards");
function createCard(cardData) {
/*CREATE ELEMENTS*/

const cardContainer= document.createElement("div");
const cardImage= document.createElement("div");
const image=document.createElement("img");
const titleWrapper=document.createElement("div");
const cardOverlay=document.createElement("div")
const viewBtn= document.createElement("div");
const content= document.createElement("div");
const contentHeading= document.createElement("div");
const cardTitle=document.createElement("div");
const cardTag=document.createElement("div");
const cardDescription=document.createElement("p");
const tags=document.createElement("div");
const cardDivider= document.createElement("div");
const cardFooter=document.createElement("div");
const footerWrapper=document.createElement("div");
const link= document.createElement("a");
const footerLink= document.createElement("a");

const arrow= document.createElement("span");
const techStack=document.createElement("div");

/*ADD CLASSES*/

cardContainer.classList.add("card-container");
cardOverlay.classList.add("overlay");
cardImage.classList.add("card-image");
viewBtn.classList.add("view-btn");
image.classList.add("image");
titleWrapper.classList.add("titleWrapper");
contentHeading.classList.add("content-heading");
content.classList.add("content");
cardTitle.classList.add("card-title");
cardTag.classList.add("card-tag");
cardTag.classList.add(tagStyles[cardData.tag]);
cardDescription.classList.add("card-descr");
tags.classList.add("tags");

cardDivider.classList.add("card-divider");
cardFooter.classList.add("card-footer");
link.classList.add("link");
footerWrapper.classList.add("footerWrapper");
arrow.classList.add("arrow");
techStack.classList.add("techstack");
footerLink.classList.add("footerlink");

/*ADD SETCONTENT AND ATTRIBUTES*/
cardTitle.textContent = cardData.title;
    cardTag.textContent = cardData.tag;
    cardDescription.textContent = cardData.description;
    image.src = cardData.image;
    link.href = cardData.link;
    link.target="_blank";
    link.rel="noopener noreferrer"
    footerLink.href=cardData.link;
    footerLink.textContent="View Template ";
    footerLink.target="_blank";
    footerLink.rel="noopener noreferrer"
    link.textContent = "View Template ";
    arrow.innerHTML = "&#8594;"; // HTML arrow
    techStack.textContent = cardData.techStack;


cardData.tags.forEach(tagText => {
        const tag = document.createElement("div");
        tag.classList.add("tag");
        tag.textContent = tagText;
        tags.appendChild(tag);
    });
/*APPEND*/
container.appendChild(cardContainer);
cardContainer.appendChild(cardImage);
cardImage.appendChild(image);
cardImage.appendChild(cardOverlay);
cardContainer.appendChild(viewBtn);
viewBtn.appendChild(link);
cardContainer.appendChild(content);
content.appendChild(contentHeading);
contentHeading.appendChild(titleWrapper);
titleWrapper.appendChild(cardTitle);
contentHeading.appendChild(cardTag);
content.appendChild(cardDescription);
cardContainer.appendChild(tags);
cardContainer.appendChild(cardDivider);
cardContainer.appendChild(cardFooter);
cardFooter.appendChild(footerWrapper);
footerWrapper.appendChild(footerLink);
link.appendChild(arrow);
cardFooter.appendChild(techStack);
footerLink.appendChild(arrow);
}

/*LOOP THROUGH DATA */
data.forEach(cardData=>{
    createCard(cardData);
})

/* Add count to All button */
const allData = document.querySelector('button[data-tag="all"]');
const dataLength = document.createElement("span");
dataLength.classList.add("datalength");
dataLength.textContent = `(${data.length})`;
allData.appendChild(dataLength);

/* Filter buttons logic */
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // remove 'active' from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));

    // add 'active' to clicked button
    button.classList.add("active");

    const selectedTag = button.dataset.tag; // get the tag
    filterCards(selectedTag); // call your filter function
  });
});

/* Filter cards function */
function filterCards(tag) {
  container.innerHTML = ""; // clear cards

  const filtered = tag === "all"
    ? data
    : data.filter(card => card.tag.toLowerCase() === tag.toLowerCase());

  filtered.forEach(cardData => createCard(cardData));
}
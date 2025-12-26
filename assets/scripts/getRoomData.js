// import { rooms } from "./roomsData.js";

// const mainRoomImage = document.getElementById("mainRoomImage");
// const detailedImages = document.getElementById("detailedImages");
// const roomName = document.getElementById("roomName");
// const roomNameBreadcrumb = document.getElementById("roomNameBreadcrumb");
// const details = document.getElementById("details");
// const roomSize = document.getElementById("roomSize");
// const bathrooms = document.getElementById("bathrooms");
// const floorLevel = document.getElementById("floorLevel");
// const availability = document.getElementById("availability");
// const price = document.getElementById("price");
// const amenities = document.getElementById("amenities");

// const roomIndex = window.location.search.split("=").pop();
// const roomData = rooms[Number(roomIndex)];

// function populateRoomDetails() {
//   roomName.textContent = roomData.roomName;
//   roomNameBreadcrumb.textContent = roomData.roomName;
//   mainRoomImage.src = roomData.details.mainImage;

//   detailedImages.innerHTML = "";
//   roomData.details.detailedImages.forEach((imgSrc) => {
//     const imgElement = document.createElement("img");
//     imgElement.src = imgSrc;
//     imgElement.className = "rounded-xl cursor-pointer hover:opacity-80 transition h-32 w-full object-cover border-2 border-transparent";
//     imgElement.onclick = () => updateImage(imgSrc);
//     detailedImages.appendChild(imgElement);
//   });

//   details.innerHTML = roomData.details.description.map((desc) => `<p>${desc}</p>`).join("");

//   roomSize.textContent = roomData.size;
//   bathrooms.textContent = roomData.numberOfBath;
//   floorLevel.textContent = roomData.details.floorLevel;
//   availability.textContent = roomData.details.availability;
//   price.textContent = roomData.price;

//   amenities.innerHTML = "";
//   roomData.details.amenities.forEach((amenity) => {
//     const li = document.createElement("li");
//     li.className = "flex items-center gap-3 text-gray-700";
//     li.innerHTML = `
//       <svg class="w-5 h-5 text-amber-500" fill="#f15946" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
//       ${amenity}
//     `;
//     amenities.appendChild(li);
//   });
// }

// function updateImage(src) {
//   mainRoomImage.src = src;
// }

// populateRoomDetails();

import { rooms } from "./roomsData.js";

// Selectors
const mainRoomImage = document.getElementById("mainRoomImage");
const detailedImages = document.getElementById("detailedImages");
const roomName = document.getElementById("roomName");
const roomNameBreadcrumb = document.getElementById("roomNameBreadcrumb");
const details = document.getElementById("details");
const roomSize = document.getElementById("roomSize");
const bathrooms = document.getElementById("bathrooms");
const floorLevel = document.getElementById("floorLevel");
const availability = document.getElementById("availability");
const price = document.getElementById("price");
const amenities = document.getElementById("amenities");

// Data Fetching
const roomIndex = window.location.search.split("=").pop();
const roomData = rooms[Number(roomIndex)];

async function populateRoomDetails() {
  if (!roomData) return;

  // 1. Start Loading State (Skeletons are handled by CSS)
  // We wait slightly so the user sees the smooth transition
  await new Promise((resolve) => setTimeout(resolve, 800));

  // 2. Inject Data
  roomName.textContent = roomData.roomName;
  roomNameBreadcrumb.textContent = roomData.roomName;
  mainRoomImage.src = roomData.details.mainImage;

  // Handle Detailed Images
  detailedImages.innerHTML = "";
  roomData.details.detailedImages.forEach((imgSrc) => {
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.className = "rounded-xl cursor-pointer hover:opacity-80 transition h-32 w-full object-cover border-2 border-transparent hover:border-[#f15946]";
    imgElement.onclick = () => updateImage(imgSrc);
    detailedImages.appendChild(imgElement);
  });

  // Handle Description
  details.innerHTML = roomData.details.description.map((desc) => `<p class="mb-4">${desc}</p>`).join("");

  roomSize.textContent = roomData.size;
  bathrooms.textContent = roomData.numberOfBath;
  floorLevel.textContent = roomData.details.floorLevel;
  availability.textContent = roomData.details.availability;
  price.textContent = roomData.price;

  // Handle Amenities
  amenities.innerHTML = "";
  roomData.details.amenities.forEach((amenity) => {
    const li = document.createElement("li");
    li.className = "flex items-center gap-3 text-gray-700 opacity-0 trans-y-10"; // Prep for GSAP
    li.innerHTML = `
      <svg class="w-5 h-5 text-[#f15946]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
      ${amenity}
    `;
    amenities.appendChild(li);
  });

  // 3. Remove Loading Classes & Run GSAP
  document.querySelectorAll(".img-placeholder").forEach((el) => el.classList.remove("img-placeholder"));
  runEntranceAnimation();
}

function runEntranceAnimation() {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 1,
    },
  });

  // Make the container visible now that we are ready
  // AutoAlpha handles both opacity and visibility:hidden
  gsap.set("#roomName, #roomNameBreadcrumb, #detailedImages img, .prose h3, #details p, #amenities li, .lg\\:col-span-5", {
    visibility: "visible",
  });

  tl.to("#roomName, #roomNameBreadcrumb", {
    opacity: 1,
    y: 0,
    stagger: 0.1,
  })
    .fromTo(
      "#mainRoomImage",
      { opacity: 0, scale: 1.1 }, // START
      { opacity: 1, scale: 1, duration: 1.2 }, // END
      "-=0.8"
    )
    .to(
      "#detailedImages img",
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
      },
      "-=1"
    )
    .to(
      ".prose h3, #details p",
      {
        opacity: 1,
        x: 0, // Using x: 0 because we didn't set x in CSS, but let's stick to Y for consistency
        y: 0,
        stagger: 0.1,
      },
      "-=0.8"
    )
    .to(
      "#amenities li",
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
      },
      "-=0.8"
    )
    .to(
      ".lg\\:col-span-5",
      {
        opacity: 1,
        y: 0,
      },
      "-=0.5"
    );
}

// Fixed Update Image with smooth GSAP transition
window.updateImage = (src) => {
  gsap.to(mainRoomImage, {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      mainRoomImage.src = src;
      gsap.to(mainRoomImage, { opacity: 1, duration: 0.3 });
    },
  });
};

populateRoomDetails();

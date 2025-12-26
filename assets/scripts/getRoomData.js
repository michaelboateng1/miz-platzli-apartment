import { rooms } from "./roomsData.js";

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

const roomIndex = window.location.search.split("=").pop();
const roomData = rooms[Number(roomIndex)];

function populateRoomDetails() {
  roomName.textContent = roomData.roomName;
  roomNameBreadcrumb.textContent = roomData.roomName;
  mainRoomImage.src = roomData.details.mainImage;

  detailedImages.innerHTML = "";
  roomData.details.detailedImages.forEach((imgSrc) => {
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.className = "rounded-xl cursor-pointer hover:opacity-80 transition h-32 w-full object-cover border-2 border-transparent";
    imgElement.onclick = () => updateImage(imgSrc);
    detailedImages.appendChild(imgElement);
  });

  details.innerHTML = roomData.details.description.map((desc) => `<p>${desc}</p>`).join("");

  roomSize.textContent = roomData.size;
  bathrooms.textContent = roomData.numberOfBath;
  floorLevel.textContent = roomData.details.floorLevel;
  availability.textContent = roomData.details.availability;
  price.textContent = roomData.price;

  amenities.innerHTML = "";
  roomData.details.amenities.forEach((amenity) => {
    const li = document.createElement("li");
    li.className = "flex items-center gap-3 text-gray-700";
    li.innerHTML = `
      <svg class="w-5 h-5 text-amber-500" fill="#f15946" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
      ${amenity}
    `;
    amenities.appendChild(li);
  });
}

function updateImage(src) {
  mainRoomImage.src = src;
}

populateRoomDetails();

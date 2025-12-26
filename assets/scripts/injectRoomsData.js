import { rooms } from "./roomsData.js";

const planGrid = document.getElementById("plan-grid");

rooms.forEach((room) => {
  const roomCard = document.createElement("div");
  roomCard.className = "bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-101";

  roomCard.innerHTML = `
    <div class="plan-card group" data-category="${room.type.toLowerCase().replace(" ", "-")}">
            <div class="relative aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden mb-6 border border-gray-100 p-8 flex items-center justify-center">
              <img src="${room.img}" alt="${room.roomName}" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">${room.status}</div>
            </div>
            <div class="flex justify-between items-start px-5">
              <div>
                <h3 class="text-xl font-semibold text-gray-900">${room.roomName}</h3>
                <p class="text-gray-500 text-sm mt-1">${room.type} • ${room.numberOfBath} Bath • ${room.size}</p>
              </div>
              <p class="text-lg font-medium text-[#f15946]">${room.price}</p>
              </div>
              <button class="w-[90%] block my-6 mx-auto py-3 border border-[#e01a4f] rounded-lg text-sm font-semibold hover:bg-[#f15946] hover:text-white transition-all duration-300 cursor-pointer view-details">View Details</button>
          </div>
  `;

  planGrid.appendChild(roomCard);
});

const viewDetails = document.querySelectorAll(".view-details");

viewDetails.forEach((btn, i) => {
  btn.onclick = () => {
    window.location.href = `details.html?room=${encodeURIComponent(i)}`;
  };
});

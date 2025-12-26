// import { rooms } from "./roomsData.js";

// const planGrid = document.getElementById("plan-grid");

// rooms.forEach((room) => {
//   const roomCard = document.createElement("div");
//   roomCard.className = "bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-101";

//   roomCard.innerHTML = `
//     <div class="plan-card group" data-category="${room.type.toLowerCase().replace(" ", "-")}">
//             <div class="relative aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden mb-6 border border-gray-100 p-8 flex items-center justify-center">
//               <img src="${room.img}" alt="${room.roomName}" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
//               <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">${room.status}</div>
//             </div>
//             <div class="flex justify-between items-start px-5">
//               <div>
//                 <h3 class="text-xl font-semibold text-gray-900">${room.roomName}</h3>
//                 <p class="text-gray-500 text-sm mt-1">${room.type} • ${room.numberOfBath} Bath • ${room.size}</p>
//               </div>
//               <p class="text-lg font-medium text-[#f15946]">${room.price}</p>
//               </div>
//               <button class="w-[90%] block my-6 mx-auto py-3 border border-[#e01a4f] rounded-lg text-sm font-semibold hover:bg-[#f15946] hover:text-white transition-all duration-300 cursor-pointer view-details">View Details</button>
//           </div>
//   `;

//   planGrid.appendChild(roomCard);
// });

// const viewDetails = document.querySelectorAll(".view-details");

// viewDetails.forEach((btn, i) => {
//   btn.onclick = () => {
//     window.location.href = `details.html?room=${encodeURIComponent(i)}`;
//   };
// });

import { rooms } from "./roomsData.js";

const planGrid = document.getElementById("plan-grid");

// 1. Function to show skeletons
function showSkeletons() {
  planGrid.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const skeleton = document.createElement("div");
    skeleton.className = "space-y-4";
    skeleton.innerHTML = `
      <div class="skeleton aspect-[4/3] w-full"></div>
      <div class="flex justify-between">
        <div class="skeleton h-6 w-1/2"></div>
        <div class="skeleton h-6 w-1/4"></div>
      </div>
      <div class="skeleton h-10 w-full"></div>
    `;
    planGrid.appendChild(skeleton);
  }
}

// 2. Function to render actual rooms
async function renderRooms() {
  showSkeletons();

  // Simulate a network delay (e.g., 1.5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  planGrid.innerHTML = ""; // Clear skeletons

  rooms.forEach((room) => {
    const roomCard = document.createElement("div");
    roomCard.className = "plan-card group";
    roomCard.innerHTML = `
      <div class="relative aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden mb-6 border border-gray-100 p-8 flex items-center justify-center">
        <img src="${room.img}" alt="${room.roomName}" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-xl font-semibold text-gray-900">${room.roomName}</h3>
          <p class="text-gray-500 text-sm mt-1">${room.type} • ${room.sqft}</p>
        </div>
        <p class="text-lg font-medium text-[#f15946]">${room.price}</p>
      </div>
      <button class="w-[90%] block my-6 mx-auto py-3 border border-[#e01a4f] rounded-lg text-sm font-semibold hover:bg-[#f15946] hover:text-white transition-all duration-300 cursor-pointer view-details">View Details</button>
    `;
    planGrid.appendChild(roomCard);
  });

  // 3. GSAP Animation for the new cards
  gsap.to(".plan-card", {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
  });

  const viewDetails = document.querySelectorAll(".view-details");

  viewDetails.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      window.location.href = `details.html?room=${encodeURIComponent(i)}`;
    });
  });
}

// Initialize
renderRooms();

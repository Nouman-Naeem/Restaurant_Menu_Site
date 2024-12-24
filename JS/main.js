// function filterItems(category){
//     const menuItems= document.querySelectorAll('.menu-item');
//     menuItems.forEach(item=>{
//         if(category==='all'){
//             item.classList.remove('hidden');
//         }else{
//             if(item.classList.contains(category)){
//                 item.classList.remove('hidden');
//             }else{
//                 item.classList.add('hidden');
//             }
//         }
//     })
// }

const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "../Images/item-1.jpeg",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
    },
    {
        id: 2,
        title: "Dinner Double",
        category: "dinner",
        price: 13.99,
        img: "../Images/item-2.jpeg",
        desc: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "../Images/item-7.jpeg",
        desc: "Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
        id: 4,
        title: "Country Delight",
        category: "breakfast",
        price: 13.99,
        img: "../Images/item-4.jpeg",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "lunch",
        price: 22.99,
        img: "../Images/item-5.jpeg",
        desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up.",
    },
    {
        id: 6,
        title: "COreo Dream",
        category: "shakes",
        price: 15.99,
        img: "../Images/item-6.jpeg",
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.",
    },
    {
        id: 7,
        title: "Bacon Overflow",
        category: "breakfast",
        price: 8.99,
        img: "../Images/item-7.jpeg",
        desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird.",
    },
    {
        id: 8,
        title: "american classic",
        category:"lunch",
        price: 12.99,
        img: "../Images/item-8.jpeg",
        desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
    {
        id: 9,
        title: "Country Delight",
        category: "shakes",
        price: 16.99,
        img: "../Images/item-9.jpeg",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
    {
        id: 10,
        title: "Steak Dinner",
        category: "dinner",
        price: 39.99,
        img: "../Images/item-10.jpeg",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
    },
];
const menuItems = document.getElementById("menu-items");
const filterBut = document.querySelectorAll(".filter-btn");

function displayMenu(items) {
    menuItems.innerHTML = items.map((item) => `
        <div class="flex items-start space-x-4 sm:space-x-6">
            <img class=" border-[#C59D5F] rounded border-4 w-32 h-24 sm:w-48 sm:h-32" 
                 src="${item.img}" alt="${item.title}">
            <div class="space-y-2 decoration-dotted">
                <div class="flex justify-between items-center">
                    <h2 class="text-base sm:text-lg font-bold text-gray-800">${item.title}</h2>
                    <span class="text-[#C59D5F] font-semibold">$${item.price}</span>
            </div>
            <hr class="dotted h-0.5 ">
                <p class="text-gray-600 text-sm leading-relaxed">
                    ${item.desc}
                </p>
            </div>
        </div>`
        )
        .join("");
}
displayMenu(menu);


filterBut.forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log(e);
        
        const category = e.target.id;
        console.log(`Button clicked: ${category}`); 
        if (category === "all") {
            displayMenu(menu);
        } else {
            const filteredMenu = menu.filter((item) => item.category === category);
            displayMenu(filteredMenu);
        }
    });
});

const fakeDataRoom = [{
        room: "living room",
        numDevices: 4,
        img: "/images/livingroom.avif",
    },
    {
        room: "bathroom",
        numDevices: 4,
        img: "/images/bathroom.jpg",
    },
    {
        room: "bedroom",
        numDevices: 4,
        img: "/images/bedroom.avif",
    },

    { room: "kitchen", numDevices: 4, img: "/images/kitchen.avif" },
];
const fakeDataFeatures = [
<<<<<<< HEAD
	{
		name: "fan",
		img: "https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-fan-computer-xnimrodx-blue-xnimrodx.png",
		link: "/fanRoom",
	},
	{
		name: "aircondition",
		img: "https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-air-conditioner-household-equipment-itim2101-flat-itim2101.png",
		link: "/airconditionRoom",
	},
	{
		name: "light",
		img: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-light-lighting-flaticons-flat-flat-icons.png",
		link: "/lightRoom",
	},
	{
		name: "gas",
		img: "https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-gas-cafe-icongeek26-flat-icongeek26.png",
		link: "/gasRoom",
	},
=======
    { icon: "fa-solid fa-lightbulb", name: "lightbulb", type: "light" },
    { icon: "fa-solid fa-temperature-quarter", name: "temperature", type: "temperature" },
    { icon: "fa-solid fa-air-conditioner", name: "airConditioner", type: "aircondition" },
    { icon: "fa-solid fa-gas-pump", name: "gasPump", type: "gasconcen" },
>>>>>>> 39fcf5a0bce5c7ac31c437b4aa0ce4332b4fe7ad
];

const homeRoomWrapper = document.querySelector(".home__room__wrapper");
const homeDeviceIcons = document.querySelector(".home__device__icons");

var htmls = fakeDataRoom.map((item, index) => {
<<<<<<< HEAD
	const {room, numDevices, img} = item;
	return `
=======
    console.log(item);
    const { room, numDevices, img } = item;
    return `
>>>>>>> 39fcf5a0bce5c7ac31c437b4aa0ce4332b4fe7ad
	<div class="col-sm-6">
		<a href="room">
			<div class="home__room__item ">
				<div class="home__room__item__info">
					<h2>${room}</h2>
					<span>${numDevices} device</span>
				</div>
				<div class="home__room__item__image">
					<img src=${img} alt="">
				</div>
			</div>
		</a>
    </div>
	`;
});

homeRoomWrapper.innerHTML = htmls.join("");

var htmls1 = fakeDataFeatures.map((item, index) => {
<<<<<<< HEAD
	return `
	
	<div class="home__device__icon">
	<a href=${item.link}>
	<span>${item.name}</span>
	<img src=${item.img} alt="">
	</a>
=======
    return `
	<div class="home__device__icon">
	<a href="devices/${item.type}">
    <span>${item.name}</span>
	<i class="${item.icon}"></i>
</a>
>>>>>>> 39fcf5a0bce5c7ac31c437b4aa0ce4332b4fe7ad
</div>
	`;
});

homeDeviceIcons.innerHTML = htmls1.join("");

window.addEventListener("load", () => {
    initClock();
});

function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        y = now.getFullYear(),
        h = now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds(),
        pe = "AM";
    if (h > 12) {
        h -= 12;
        pe = "PM";
    }
    Number.prototype.pad = function(digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    };
    var months = [
        "Janary",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
    ];
    var weeks = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var ids = [
        "dayname",
        "month",
        "daynum",
        "year",
        "hour",
        "minutes",
        "seconds",
        "period",
    ];

    var values = [
        weeks[dname],
        months[mo],
        dnum.pad(2),
        y,
        h.pad(2),
        m.pad(2),
        s.pad(2),
        pe,
    ];
    ids.forEach((item, index) => {
        document.getElementById(item).innerHTML = values[index];
    });
}

function initClock() {
    // updateClock();
    // window.setInterval("updateClock()", 1);
    setInterval(() => {
        updateClock();
    }, 1000);
}

var user = document.querySelectorAll(".fa-user");
const listGroup = document.querySelector(".list-group");
user[0].addEventListener("click", () => {
    listGroup.classList.toggle("active");
});

document.body.addEventListener("click", (e) => {
    if (!e.target.classList.contains("fa-user")) {
        if (listGroup.classList.contains("active")) {
            listGroup.classList.remove("active");
        } else {
            console.log("2");
        }
    }
});
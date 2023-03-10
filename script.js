const spinner = document.querySelector('.spin__wheel-img');
const sections = document.querySelectorAll('.section');
const spinButton = document.querySelector('.spin__button');
const sectionAngles = [0, 45, 90, 135, 180, 225, 270, 315];

const popup = document.querySelector(".popup");
const popupBlock = document.querySelector(".popup__block");
const openPopup = document.querySelector(".spin__button");
const closePopup = document.querySelector(".popup__button");
const popupImg = document.querySelector(".popup__img");
const popupText = document.querySelector(".popup__text");
const popupTitle = document.querySelector(".popup__title");

let spinning = false;
let offset = 0;

spinButton.addEventListener('click', () => {
	if (!spinning) {
		spinning = true;

		const sectionIndex = Math.floor(Math.random() * 8);
		const randomAngle = sectionAngles[Math.floor(Math.random() * 8)]
		const degrees = sectionIndex * 45;
		
		offset = 360 - (degrees + 22.5 + randomAngle) % 360;
		spinner.style.transform = `rotate(${offset}deg)`;

		setTimeout(() => {
			spinner.style.transition = 'all 5s ease-in-out';
			spinner.style.transform = `rotate(${offset + 1440 + degrees + 22.5}deg)`;
			setTimeout(() => {
				spinning = false;
				spinner.style.transition = 'none';
				winOrlose(sectionIndex);
			}, 5000);
		}, 10);
	}
});

function winOrlose(section) {
	if (section % 2 === 0) {
		popup.classList.add("active");
		popupImg.src = "img/popup-win.png";
		popupTitle.innerHTML = "Ganaste!";
		popupTitle.classList.add("popup__title-win");
		popupTitle.classList.remove("popup__title-lose");
		popupText.innerHTML = "Te espera un bonode hasta S/.1,000!";
		closePopup.innerHTML = "Llevar";
	} else {
		popup.classList.add("active");
		popupImg.src = "img/popup-lose.png";
		popupTitle.innerHTML = "Oh, no hay suerte ahora";
		popupTitle.classList.add("popup__title-lose");
		popupTitle.classList.remove("popup__title-win");
		popupText.innerHTML = "";
		closePopup.innerHTML = "GIRAR DE NUEVO";
	}
}

closePopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("active");
});

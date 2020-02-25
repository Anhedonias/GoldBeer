document.addEventListener("DOMContentLoaded", function(event) { 

	document.getElementById('date').valueAsDate = new Date();
});

function setupTabs () {
	document.querySelectorAll(".sidebar__tab").forEach(button => {
		button.addEventListener("click", () => {
			const sideBar = button.parentElement;
			const tabsContainer = sideBar.parentElement;
			const tabNumber = button.dataset.forTab;
			const tabToActivate = tabsContainer.querySelector(`.menu__content[data-tab="${tabNumber}"]`);

			sideBar.querySelectorAll(".sidebar__tab").forEach(button => {
				button.classList.remove("menu--active");
			});

			tabsContainer.querySelectorAll(".menu__content").forEach(tab => {
				tab.classList.remove("content--active");
			});

			button.classList.add("menu--active");
			tabToActivate.classList.add("content--active");
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	setupTabs();

	document.querySelectorAll(".menu__wrapper").forEach(tabsContainer => {
		tabsContainer.querySelector(".menu__sidebar .sidebar__tab").click();
	});
});


let nav = $("#menu");
let navToggle = $("#navToggle");

navToggle.on("click", function(event) {
	event.preventDefault();

	nav.toggleClass("show");
});
import days from "./data.json";

const highest = Math.max(...days.map(({ amount }) => amount));
const BASE = Math.ceil(highest / 10) * 10;

function changeTextContent(element: HTMLTitleElement | Element | null) {
	if (!element) return;

	element.textContent = import.meta.env.VITE_PROJECT_NAME;
}

(() => {
	const title = document.querySelector("title");
	changeTextContent(title);

	const heading = document.querySelector(".sr-only");
	changeTextContent(heading);

	const chartSection = document.querySelector("section.chart");
	if (!chartSection) return console.error("chartSection not found!");

	const markup = days.reduce((previous, { day, amount }) => {
		const height = Math.ceil((amount / BASE) * 100);

		return `${previous}<article ${
			highest === amount ? "data-highest" : ""
		}><div style="height: ${height}%"><span>$${amount}</span></div><span>${day}</span></article>`;
	}, "");

	chartSection.insertAdjacentHTML("afterbegin", markup);
})();

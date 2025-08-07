const exploreButton = document.querySelector("#explore-button");

exploreButton.addEventListener("click", (e) => {
	e.preventDefault();

	const mainSection = document.querySelector(".main-section");
	if (mainSection) {
		mainSection.scrollIntoView({
			behavior: "smooth",
		});
	}
});

function formatNumber(n) {
	if (n >= 1_000_000)
		return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
	if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
	return n;
}

const runCounters = () => {
	const counters = document.querySelectorAll(".count");
	const duration = 1500; // total animation time in ms

	counters.forEach((counter) => {
		const target = +counter.getAttribute("data-target");
		const startTime = performance.now();

    const verb = counter.getAttribute("verb");

		const update = (currentTime) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1); // cap at 1
			const currentCount = Math.floor(progress * target);

			counter.textContent = `${formatNumber(currentCount)}+ ${verb}`;

			if (progress < 1) {
				requestAnimationFrame(update);
			} else {
				counter.textContent = `${formatNumber(currentCount)}+ ${verb}`; // ensure final value
			}
		};

		requestAnimationFrame(update);
	});
};

const statSection = document.querySelector(".stat-section");
let started = false;

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting && !started) {
				started = true;
				runCounters();
			}
		});
	},
	{
		threshold: 0.5,
	}
);

observer.observe(statSection);

const storySections = [
  'about-us', 'who-we-are', 'our-beginning', 'built-for'
]

const nextButtons = document.querySelectorAll('.next-button')

nextButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault()

    const index = parseInt(button.getAttribute('next'))

    const nextSection = document.querySelector(`#${storySections[index]}`)

    console.log(nextSection)
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block:"center"
      })
    }
  }) 
});
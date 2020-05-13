import barba from '@barba/core';

import gsap from "gsap";

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('ba-menu-toggle')) {
		const mainContent = document.querySelector('.ba-main-content');
		mainContent.classList.toggle('shifted');
	}
})


let tansItem = '[data-transition] li';

barba.init({
	transitions: [{
		leave(data) {

			return gsap.timeline()
				// .to(data.current.container, {duration: 0.4, scale:0.9})
				.to(tansItem, {
					duration: 0.4,
					scaleX: 1,
					transformOrigin: "0% 100%",

					stagger: {
						amount: 0.5,
						each: 0.1,
						// from: 'center'
					}

				}, 0);
		},
		enter(data) {

			gsap.to(tansItem, {
				duration: 0.3,
				scaleX: 0,
				transformOrigin: "100% 100%",
				stagger: {
					amount: 0.4,
					each: 0.06,
					// from: 'center'
				}
			});
		}
	}]
});


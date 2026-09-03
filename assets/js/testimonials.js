addEventListener('DOMContentLoaded', (event) => {
		const testimonial_lists = document.querySelectorAll('.testimonial-list');
		for (const testimonial_list of testimonial_lists) {
				const rate = testimonial_list.dataset.rate ?? 1_000; // How many milliseconds to wait between transitions.

				var testimonials = testimonial_list.querySelectorAll(':scope > .testimonial');
				if (testimonials.length == 0) {
						// Nothing to operate on.
						break;
				}

				// region Animation loop

				let startIndex = 0;
				let index = 0;
				let transitionTo = (newIndex) => {
						newIndex %= testimonials.length;
						if (newIndex < 0) {
								newIndex += testimonials.length;
						}

						if (newIndex != index) {
								testimonials[index].classList.remove("testimonial-list__item--visible");
								testimonials[newIndex].classList.add("testimonial-list__item--visible");
								index = newIndex;
						}

						requestAnimationFrame(updater);

						return newIndex;
				};

				let startTime;
				let updater = (time) => {
						startTime = startTime ?? time;
						const elapsed = time - startTime;

						const newIndex = startIndex + Math.trunc(elapsed / rate);
						transitionTo(newIndex);
				};
				requestAnimationFrame(updater);

				// endregion

				// region Forward/back buttons
				// Clicking one of these resets the animation state so an automatic transition doesn't quickly follow a
				// manual transition.

				testimonial_list.querySelector('.testimonial-list__button--previous')?.addEventListener('click', (event) => {
						// Reset our animation times before kicking off new animation frames.
						startTime = undefined;
						startIndex = transitionTo(index - 1);
				});

				testimonial_list.querySelector('.testimonial-list__button--next')?.addEventListener('click', (event) => {
						// Reset our animation times before kicking off new animation frames.
						startTime = undefined;
						startIndex = transitionTo(index + 1);
				});

				// endregion
		}
});

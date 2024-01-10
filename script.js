window.onload = () => {
	Array.from(document.getElementsByClassName('collapse-btn')).forEach(btn => {
		const section = document.getElementById(btn.dataset.target)
		const height = window.getComputedStyle(section).height
		section.style.setProperty('--height', height)
		btn.onclick = () => {
			section.classList.toggle('hide')
			section.classList.add('hiding')
			section.addEventListener(
				'transitionend',
				() => {
					console.log('Transition ended')
					section.classList.remove('hiding')
				},
				{ once: true }
			)
		}
	})
	const tripN = document.getElementsByClassName('card').length
	document.getElementById('n').innerText = tripN

	const myModal = new bootstrap.Modal('#contattaci')
	myModal.toggle()
}
window.onresize = () => {
	Array.from(document.getElementsByClassName('collapsable')).forEach(section => {
		//restting the height to mesure the actual height
		section.style.setProperty('--height', 'auto')
		const scrollHeight = section.scrollHeight
		//setting the height for transitionsing
		section.style.setProperty('--height', scrollHeight + 'px')
	})
}

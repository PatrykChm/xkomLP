const swiper = document.querySelector('.swiper')
const noswiper = document.querySelector('.noswiper')

const classAdd = () => {
	if (window.innerWidth > 580) {
		swiper.classList.add('display-none')
		noswiper.classList.add('display-flex')
	} else {
		swiper.classList.remove('display-none')
		noswiper.classList.remove('display-flex')
		noswiper.classList.add('display-none')
	}
}

window.onresize = classAdd
addEventListener('scroll', classAdd())

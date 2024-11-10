import Swiper, { Pagination } from 'swiper'
import AOS from 'aos'
require('~/app/js/just-validate.min.js')

document.addEventListener('DOMContentLoaded', () => {
	function open () {
		const scroll = document.body
		const logo = document.getElementById('logo')
		const btn = document.getElementById('button')
		const nav = document.getElementById('nav')
		const navItems = document.getElementsByClassName('nav__item')

		for (let i = 0; i < navItems.length; i++) {
			navItems[i].classList.toggle('nav__item--mobile')
		}

		const overlay = document.getElementById('overlay')

		overlay.classList.toggle('overlay--active')
		btn.classList.toggle('burger--active')
		logo.classList.toggle('header__logo--active')
		nav.classList.toggle('nav--mobile')
		scroll.classList.toggle('no-scroll')
	}

	document.getElementById('button').addEventListener('click', open)

	Swiper.use([Pagination])

	const titles = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']

	const swiper = new Swiper('.slider', {
		slidesPerView: 1,
		slideClass: 'slide',
		slideActiveClass: 'slide--active',
		spaceBetween: 30,
		wrapperClass: 'slider__wrapper',
		pagination: {
			el: '.slider__pagination',
			clickable: true,
			bulletClass: 'slider__bullet',
			bulletActiveClass: 'slider__bullet--current',
			renderBullet: function (index, className) {
				return '<a href ="#" class="' + className + '">' + (titles[index]) + '</a>'
			}
		}
	})

	function validateForms (selector, rules, messages) {
		new window.JustValidate(selector, {
			rules: rules,
			messages: messages,
			submitHandler: function (form) {
				const label = document.getElementById('contact__label')
				label.classList.add('contact__label--hidden')
				const inputWrapper = document.getElementById('input__wrapper')
				inputWrapper.classList.remove('input__wrapper--error')

				// const emailData = document.getElementById('email').value

				// let tk = ''

				// grecaptcha.ready(function () {
				// 	grecaptcha.execute('YOUR_PUBLIC_KEY',
				// 		{ action: 'homepage' }).then(function (token) {
				// 		tk = token
				// 		document.getElementById('token').value = token

				// 		const formData = new FormData(form)
				// 		formData.append('email', emailData)
				// 		formData.append('token', token)

				// 		fetch('../php/check.php', {
				// 			method: 'POST',
				// 			body: formData
				// 		})
				// 			.then(response => response.json())
				// 			.then(result => {
				// 				if (result['om_score'] >= 0.5) {
				// 					// console.log('Human')

				// 					const xhr = new XMLHttpRequest()
				// 					const formatData = new FormData(form)
				// 					formData.append('email', emailData)

				// 					xhr.open('POST', '../php/mail.php')
				// 					xhr.send(formatData)
				// 					form.reset()
				// 				} else {
				// 					// console.log('Bot')
				// 					form.reset()
				// 				}
				// 			})
				// 	})
				// })
			},

			invalidFormCallback: function () {
				const label = document.getElementById('contact__label')
				label.classList.remove('contact__label--hidden')
				const inputWrapper = document.getElementById('input__wrapper')
				inputWrapper.classList.add('input__wrapper--error')
			},
			colorWrong: 'none'
		})
	}

	validateForms('.contact__form', { email: { required: true, email: true } }, { email: "Whoops, make sure it's an email" })

	const arrow = document.getElementById('arrow')
	const showElement = function (e) {
		if (window.scrollY > window.innerHeight) {
			arrow.classList.add('arrow--active')
		} else {
			arrow.classList.remove('arrow--active')
		}
	}

	window.addEventListener('scroll', showElement)

	arrow.onclick = function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	AOS.init({
		once: false,
		duration: 500,
		disable: 'mobile'
	})

	window.addEventListener('load', function () {
		const preloader = document.getElementById('preloader')
		preloader.classList.add('preloader--hidden')
	})
})

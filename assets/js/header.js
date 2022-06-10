let scheduleButton = document.querySelector(`#schedule_button`)
let header_button_open = document.querySelector(`.header_button_open_svg`)

window.addEventListener(`scroll`, OnScroll)

OnScroll()

function OnScroll() {
  changeHeaderStyleOnScroll()
  showPageUpButtonOnScroll()
  activateMenuAtCurrentSection()
}

function changeHeaderStyleOnScroll() {
  if (scrollY == 0) {
    header.classList.remove(`onScroll`)
    logo.setAttribute(`src`, `assets/svgs/logo.svg`)
    header_button_open.setAttribute(`src`, `assets/svgs/header_button_open.svg`)
  } else {
    header.classList.add(`onScroll`)
    logo.setAttribute(`src`, `assets/svgs/logo_onscroll.svg`)
    header_button_open.setAttribute(
      `src`,
      `assets/svgs/header_button_onscroll_open.svg`
    )
  }
}

function showPageUpButtonOnScroll() {
  if (scrollY < 400) {
    pageUp.classList.remove(`visible`)
  } else {
    pageUp.classList.add(`visible`)
  }
}

function activateMenuAtCurrentSection() {
  if (scrollY >= 0 && scrollY < 700) {
    addActive(navl01)
  } else if (scrollY >= 700 && scrollY < 1560.800048828125) {
    addActive(navl02)
  } else if (scrollY >= 1560.800048828125 && scrollY < 2316.800048828125) {
    addActive(navl03)
  } else if (scrollY >= 2316.800048828125) {
    addActive(scheduleButton)
  }
}

function openMenu() {
  document.body.classList.add(`menu_expanded`)
  logo.setAttribute(`src`, `assets/svgs/logo_onscroll.svg`)
}

function closeMenu() {
  document.body.classList.remove(`menu_expanded`)
  OnScroll()
}

function addActive(element) {
  navl01.classList.remove(`active`)
  navl02.classList.remove(`active`)
  navl03.classList.remove(`active`)
  scheduleButton.classList.remove(`active`)

  element.classList.add(`active`)
}
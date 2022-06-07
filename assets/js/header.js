window.addEventListener(`scroll`, OnScroll)

let logo = document.querySelector(`.logo`)
let header = document.querySelector(`header`)
let header_button_open = document.querySelector(`.header_button_open_svg`)
let pageUp = document.querySelector(`#pageUp`)

function OnScroll() {
  ChangeHeaderStyleOnScroll()
  ShowPageUpButtonOnScroll()
}

function ChangeHeaderStyleOnScroll() {
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

function ShowPageUpButtonOnScroll() {
  if (scrollY < 400) {
    pageUp.classList.remove(`visible`)
  } else {
    pageUp.classList.add(`visible`)
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

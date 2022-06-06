let logo = document.querySelector(`.logo`)
let header = document.querySelector(`header`)
let header_button_open = document.querySelector(`.header_button_open_svg`)

function headerOnScroll() {
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

function openMenu() {
  document.body.classList.add(`menu_expanded`)
  logo.setAttribute(`src`, `assets/svgs/logo_onscroll.svg`)
}

function closeMenu() {
  document.body.classList.remove(`menu_expanded`)
  headerOnScroll()
}
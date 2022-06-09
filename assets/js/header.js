window.addEventListener(`scroll`, OnScroll)

function OnScroll() {
  changeHeaderStyleOnScroll()
  showPageUpButtonOnScroll()
  // activateMenuAtCurrentSection()
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

// function activateMenuAtCurrentSection() {
//   const scrollLine = scrollY + innerHeight / 2
  
//   if (scrollLine >= 0 || scrollLine < services.ofsetTop) {
//     navl01.classList.add(`active`)
//     navl02.classList.remove(`active`)
//     navl03.classList.remove(`active`)
//   } else if (scrollLine >= services.ofsetTop || scrollLine < about.ofsetTop) {
//     navl01.classList.remove(`active`)
//     navl02.classList.add(`active`)
//     navl03.classList.remove(`active`)
//   }
// }

function openMenu() {
  document.body.classList.add(`menu_expanded`)
  logo.setAttribute(`src`, `assets/svgs/logo_onscroll.svg`)
}

function closeMenu() {
  document.body.classList.remove(`menu_expanded`)
  OnScroll()
}

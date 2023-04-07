import { skills, projects, renders } from "./data.js"

const bg = document.querySelector('.bg-gray')
const mobileMenu = document.querySelector('.mobile-nav')
const mobileMenuChilds = document.querySelectorAll('.mobile-nav > a')
const menu = document.getElementById('menu')

const show = () => {
  bg.classList.toggle('show')
  mobileMenu.classList.toggle('show')
}

bg.addEventListener('click', e =>{
  if (e.target !== bg) return
  show()
})

menu.addEventListener('click', () => {
  show()
})
mobileMenuChilds.forEach(m => {
  m.addEventListener('click', () => {
    show()
  })
})

const technologies = document.querySelector('.technologies')

skills.forEach(s => {
  const div = document.createElement('div')
  const img = document.createElement('img')
  const span = document.createElement('span')

  div.classList.add('tech')
  img.src = s.img
  img.alt = s.name
  span.textContent = s.name

  div.append(img, span)
  technologies.appendChild(div)
})

const projectsContainer = document.querySelector('.projects_container')

projects.forEach(p => {
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const hoverDiv = document.createElement('div')
  const h1 = document.createElement('h1')
  const linkBtn = document.createElement('a')

  imgContainer.classList.add('project')
  hoverDiv.classList.add('hover-div')

  img.src = p.img
  h1.textContent = p.name
  linkBtn.textContent = 'Visit Site'
  linkBtn.href = p.link

  hoverDiv.append(h1, linkBtn)
  imgContainer.append(img, hoverDiv)
  projectsContainer.appendChild(imgContainer)
})

const rendersContainer = document.querySelector('.renders_container')
const lightbox = document.querySelector('.lightbox')
const lightboxImg = document.querySelector('.lightbox > img')

renders.forEach((r, i) => {
  const img = document.createElement('img')
  img.src = r
  img.alt = i
  img.addEventListener('click', ()=>{
    toggleLightbox(r)
  })
  rendersContainer.appendChild(img)
})

const toggleLightbox = r => {
  lightbox.classList.toggle('show')
  if (!r) {
    lightboxImg.src = '/'
    return
  }
  lightboxImg.src = r
}

lightbox.addEventListener('click', e=>{
  toggleLightbox()
})

const sections = document.querySelectorAll('section')

const observer = new IntersectionObserver(e=>{
  e.forEach(x=>{
    if(x.isIntersecting){
      x.target.classList.add('fade')
    } else {
      x.target.classList.remove('fade')
    }
  })
}, {rootMargin:'0px 0px -250px 0px'})

sections.forEach(s=>{
  observer.observe(s)
})


const header = document.querySelector('header')
addEventListener('scroll', e=>{
  if(scrollY < 50) {
    header.style.borderBottom = ''
    header.style.marginBottom = '0'
  } else {
    header.style.borderBottom = '1px solid #429ea629'
    header.style.marginBottom = '-1px'
  }
})
// open menu button
const menuBtn = document.querySelector(".fa-bars");
// close menu button
const closeBtn = document.querySelector(".fa-times");
// mobile unordered list
const ulist = document.querySelector(".hidden");
// h1 element
const heading1 = document.querySelector(".section__one h1");
// figure element
const arrow = document.querySelector(".section__one .hide-on-mobile");

// open or close mobile unordered list
function renderUList(style1, style2) {
    menuBtn.style.display = style1;
    heading1.style.display = style1;
    arrow.style.display = style1;
    closeBtn.style.display = style2;
    ulist.style.display = style2;
}

// event listener to open mobile unordered list
menuBtn.addEventListener('click', () => { renderUList('none', 'block') } );
// event listener to close mobile unordered list
closeBtn.addEventListener('click', () => { renderUList('block', 'none') } );


const headerCatalogBtn = document.querySelector(".header-catalog__btn")
const headerCatalogBody = document.querySelector(".header-catalog-wrapper")

headerCatalogBtn.addEventListener("click" , (event)=>{
    headerCatalogBtn.classList.toggle("header-catalog__btn_active")
    headerCatalogBody.classList.toggle("header-catalog-wrapper_active")
    document.querySelector("body").classList.toggle("body_active")
})

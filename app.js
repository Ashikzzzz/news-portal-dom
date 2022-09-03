const loadCategory = ()=>{
    fetch(' https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))
}

const displayCategory =(categories)=>{
// console.log(categories)
const showCategory= document.getElementById('for-category')
categories.forEach(category=>{
    const categoryOl=document.createElement('ol')
    categoryOl.innerText=`
    ${category.category_name}
    `
    showCategory.appendChild(categoryOl)
})
}

loadCategory()
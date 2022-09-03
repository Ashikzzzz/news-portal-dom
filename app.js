// category data load 

const loadCategory = ()=>{
    fetch(' https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))
}

// display category data 

const displayCategory =(categories)=>{
   
const showCategory= document.getElementById('for-category')

categories.forEach(category=>{
    // console.log(category)
    const categoryAnchor=document.createElement('ol')
    categoryAnchor.innerHTML=
    `
    <a onclick="loadCategoryDetail('${category.category_id}')">${category.category_name ? category.category_name : "no data"}</a>
    `
    
    showCategory.appendChild(categoryAnchor)
})

}
loadCategory()


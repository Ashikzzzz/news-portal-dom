// cateroy detail load 

const loadCategoryDetail =()=>{
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data => displayCountryDetail(data.data))
}

const displayCountryDetail=(details)=>{
    const showDetail= document.getElementById('detail')
  details.forEach(detail=>{
    console.log(detail)
    const categoryDetail=document.createElement('div')
    categoryDetail.innerHTML=`
    <div class="card mb-3">
  <div class="row g-5">
    <div class="col-md-4">
      <img src=${detail.image_url} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">${detail.title ? detail.title : "no data found" }</h3>
        <p class="card-text">${detail.details ? detail.details : "no data found"}</p>
      </div>

     <div class="d-flex justify-content-between">
     <div class="d-flex  mb-3">
     <img class="img-fluid rounded-circle img-size" src=${detail.author.img} class="img-fluid rounded-start" alt="...">
     <h5>${detail.author.name}</h5>
     </div>
     <p>Views: ${detail.total_view ? detail.total_view : "no data found"} </p>
     <h6>Rating: ${detail.rating.number}</h6>
     </div>
    </div>
  </div>
</div>
    `
    showDetail.appendChild(categoryDetail)
  })
  
}
// loadCategoryDetail()

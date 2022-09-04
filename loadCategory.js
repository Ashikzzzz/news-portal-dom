// cateroy detail load 

const loadCategoryDetail =(category_id)=>{
   try{
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    .then(res => res.json())
    .then(data => displayCountryDetail(data.data))
    
    // spinner start 
    toggleSpinner(true);
   }
   finally{
    
   }
   
  
}

const displayCountryDetail=(details)=>{
    
    // detail div 
    const showDetail= document.getElementById('detail')
    const noFoundText=document.getElementById('no-found-text')
     const dataLength=document.getElementById('data-length')
   
      showDetail.textContent=''; 
    details=details.slice(0, 8)
    
    dataLength.innerText=details.length;
    // console.log(dataValue)
    // 
    console.log(details.length)
    // dataValue.innerText= ;
    if(details.length===0){
        noFoundText.classList.remove('d-none')
    }
    else{
        noFoundText.classList.add('d-none')
    }
    console.log(details)
  details.forEach(detail=>{
    
    const categoryDetail=document.createElement('div')
    categoryDetail.textContent='';
    
    categoryDetail.innerHTML=`
    <div class="card mb-3">
  <div class="row g-5">
    <div class="col-md-4">
      <img src=${detail.image_url} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">${detail.title ? detail.title : "no data found" }</h3>
        <p class="card-text">${detail.details ? detail.details.slice(0, 380)+'...' : "no data found"}</p>
      </div>

     <div class="d-flex justify-content-between">
     <div class="d-flex  mb-3">
     <img class="img-fluid rounded-circle img-size" src=${detail.author.img} class="img-fluid rounded-start" alt="...">
     <h5>${detail.author.name}</h5>
     </div>
     <p>Views: ${detail.total_view ? detail.total_view : "no data found"} </p>
     <h6>Rating: ${detail.rating.number}</h6>
     <button onclick="loadNews('${detail._id}')" class="btn btn-info"  data-bs-toggle="modal" data-bs-target="#newsDetailModal">Show detail</button>
     </div>
    </div>
  </div>
</div>
    `
    showDetail.appendChild(categoryDetail);
  })
//   spinner end 
 toggleSpinner(false)
}
loadCategoryDetail('08')


const loadNews= (_id)=>{
   try{
    fetch(`https://openapi.programming-hero.com/api/news/${_id}`)
    .then(res => res.json())
    .then(data => displayNews(data.data[0]))
   }
   finally{

   }
}

const displayNews= (news)=>{
    // console.log(news.data)
const newsDetail=document.getElementById('newsDetailModal')
newsDetail.innerHTML=`
<div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="newsDetailModalLabel">Title :${news.title ? news.title : "no data found"}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img class="img-fluid img-size2" src=${news.author.img ? news.author.img:"no data found"} alt="">
        <h6>Name :${news.author.name?news.author.name:"no data found"}</h6>
        <h5>${news.title? news.title: "no data found"}</h5>
        <p>${news.details? news.details.slice(0,350) : "No data found"}</p>
        <p>Published date :  ${news.author.published_date? news.author.published_date: "No data found"}</p>
        <h5>View: ${news.total_view ? news.total_view: "no data found"}</h5>
        <h5>Rating: ${news.rating.number? news.rating.number: "No data found"} </h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         
        </div>
      </div>
    </div>
`
}

// loadDetailModal()
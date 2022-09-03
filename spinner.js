const toggleSpinner=(isLoading)=>{
const showSpinner=document.getElementById('spinner')
if(isLoading){
    showSpinner.classList.remove('d-none')
}
else{
    showSpinner.classList.add('d-none')
}
}
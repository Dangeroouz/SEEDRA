let hashtags = document.querySelectorAll('.our-products-menu-item')
const cards = document.querySelectorAll('.product')
for(let hashtag of hashtags){
    hashtag.addEventListener("click", function(){
      for(let card of cards){
        card.classList.remove('visually-hidden');
      }
      if(hashtag.innerText.toLowerCase() == "all"){
        return
      }
      for(let card of cards){
  
        let cardHashtag = card.dataset.hashtag.toLowerCase().split(/[ ,]+/);
        if(cardHashtag.includes(hashtag.innerText.toLowerCase())){
  
        }
        else(
          card.classList.add('visually-hidden')
        )
      }
    })
   }
let search = document.querySelector('#search');

 search.addEventListener('input', function(){
  for(let card of cards){
    card.classList.remove('visually-hidden');
  }
  for(let card of cards){
  if(card.innerText.toLowerCase().includes(search.value.toLowerCase())){

  }
  else{
  card.classList.add('visually-hidden')
  }
  }
})


let sortItems = document.querySelectorAll('.price-item')
for (let sortItem of sortItems) {
  sortItem.addEventListener('click', function(){
   const order = [...cards].sort( function (a, b) {
     let raitingA = +a.querySelector(sortItem.dataset.sort).innerHTML;
     let raitingB = +b.querySelector(sortItem.dataset.sort).innerHTML;

     return raitingB - raitingA;
   });
   for (let i = 0; i < order.length; i++){
     order[i].style.order = i;
   }
 });
}
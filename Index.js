let DeleteBtn = document.getElementsByClassName('Delete')
let total = Number(document.getElementById('Total').innerHTML)
for(let i of DeleteBtn){

    i.addEventListener('click', function(){
         i.parentElement.parentElement.remove()
        
    })

}
let AddBtn = document.getElementsByClassName('Add')
for(let i of AddBtn){
    i.addEventListener('click', function(){
     let x =   Number(i.nextElementSibling.innerHTML) 
     x = x + 1
     i.nextElementSibling.innerHTML++ 
    let Price =  Number(i.parentElement.nextElementSibling.innerHTML)
    total = total + Price/(x-1)
    Price = Price/(x-1) + Price
    i.parentElement.nextElementSibling.innerHTML = Price 
    
    
    document.getElementById('Total').innerHTML = total
    
    })
}
let SubBtn = document.getElementsByClassName('Sub')
for(let i of SubBtn){
i.addEventListener('click', function(){
let x = Number(i.previousElementSibling.innerHTML)
if(x > 1  ){
x = x - 1
i.previousElementSibling.innerHTML = x
let Price = Number(i.parentElement.nextElementSibling.innerHTML)
total = total - Price/(x+1)
Price =  Price - Price/(x+1)
i.parentElement.nextElementSibling.innerHTML = Price
document.getElementById('Total').innerHTML = total

}
})

}
let div = document.querySelector('div');
let array = ["jawad","Ahmed","haseeb","hassan","furqan"];
array.forEach((items)=>{
    console.log(items);
    div.innerHTML += `<h1>${items}</h1>`
})

array.map((item,index)=>){
    console.log(item);
}
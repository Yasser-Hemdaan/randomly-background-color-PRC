var span = document.querySelectorAll(".main span")
var colorArr = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"]

function random(x){
    return x[Math.floor(Math.random()*x.length)];
}

span.forEach((e) => {
    e.addEventListener("mouseover",()=>{
        var colorItem=""
        for(var i = 0 ; i<6 ; i++){
            colorItem += random(colorArr)
        }
        e.style.backgroundColor = `#${colorItem}`
    })    
    e.addEventListener("mouseleave",()=>{
        e.style.backgroundColor = "#222"
    })    
});

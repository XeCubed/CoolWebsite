const button=document.getElementById("btn0");

const gif=document.getElementById("gif");

let go=true

button.addEventListener("click", function() {
    if (go===true) {
        gif.style.display="block";

        go=false
        setTimeout(() => {
          gif.style.display="none";
          go=true
        },2500);
    }
});
const box = document.getElementById("timeBox")
setInterval(() =>{
    const date = new Date();
    box.innerText = date.toLocaleTimeString();
}, 1000)
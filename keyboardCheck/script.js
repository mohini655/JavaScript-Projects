const container = document.querySelector(".container");
console.log(container);
window.addEventListener("keydown", (e)=>{
    container.innerHTML = `
    <table border="1" >
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key == " " ? "Space" : e.key}</td>
            <td>${e.KeycCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    `;
})
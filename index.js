//instrui o navegador a rodar o JS apenas após carregar todo o HTML
document.addEventListener("DOMContentLoaded", async () => {

    //para selecionar a imagem do dado
    document.getElementById("dice-type").addEventListener("change", event => {
        const v = parseInt(event.target.value);
    });


    //roll dice by selection (still using the f12)
    document.getElementById("dice-button").addEventListener("click", () => {
        const v = document.getElementById("dice-type").value;
        const r = GetRandom(1, v);
        console.log(r);
    });

});

function GetRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
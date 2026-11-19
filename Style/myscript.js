//De olika platserna i min popup
const destinationer = [
    "🎉Skottland🎉",
    "🎉Grekland🎉",
    "🎉Portugal🎉",
    "🎉Nederländerna🎉",
    "🎉Irland🎉",
    "🎉Malta🎉",
    "🎉Spanien🎉",
    "🎉Tyskland🎉",
    "🎉Estland🎉",
    "🎉Island🎉",
    "🎉Norge🎉",
];


// Hämta de olika elementen från HTML-sidan med hjälp av deras ID
const blomma = document.getElementById("slumpa");
const popup = document.getElementById("resultatpopup");
const landresultat = document.getElementById("landresultat");
const stangpopup = document.getElementById("stangpopup");


//Kontrollerar att blomman finns innan klickfunktionen aktiveras
if (blomma) {
    //Lyssnar efter klick på blomman
    blomma.addEventListener("click", function () {
        //Slumpar länder
        const slumpatLand = destinationer[
            Math.floor(Math.random() * destinationer.length)
        ];
        //Skriver ut det slumpade landet i popupen
        landresultat.textContent = slumpatLand;

        //Visar popupen när man klickar på blomman
        popup.style.display = "flex";
    });

}
//Stänger popupen när man klickar på krysset
stangpopup.addEventListener("click", function () {
    popup.style.display = "none";

});
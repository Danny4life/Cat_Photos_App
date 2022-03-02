const img = document.querySelector("img");

const btn = document.querySelector("button");

btn.addEventListener("click", selectImg);

function selectImg() {
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=Rwyd4Imf4LECgaTVBVJnrrtiIooUN201&s=cats", {mode: "cors"})
    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
        img.src = response.data.images.original.url;
        img.classList.toggle("hidden");
        
    });
}


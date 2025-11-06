const hamstersURL = "https://api.pexels.com/v1/search?query=hamsters"

const accessKey = "wBNjSThvryJrolU99fLje94rrKvOKuRiCSYmSgEZpN8bcE0FY5Ynu3zh"

const loadButton = document.getElementById("loadButton")
const loadImages = function (searchquery) {
  console.log("CLICCATO BOTTONE PRIMARIO")
  fetch(hamstersURL + searchquery, {
    headers: { Authorization: `${accessKey}` },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(res.status)
      }
    })
    .then((pexelsData) => {
      console.log("DATI PEXELS", pexelsData)
      //trovo tutti i cani
      const allTheDogs = document.querySelectorAll(".card img")
      console.log(allTheDogs)
      for (let i = 0; i < allTheDogs.length; i++) {
        // i=indice
        allTheDogs[i].setAttribute("src", pexelsData.photos[i].src.tiny)
      }
    })
    .catch((err) => {
      console.log("ERROREEEEE", err)
    })
}

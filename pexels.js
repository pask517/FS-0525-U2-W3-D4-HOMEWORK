const hamstersURL = "https://api.pexels.com/v1/search?query=hamsters"
const accessKey = "wBNjSThvryJrolU99fLje94rrKvOKuRiCSYmSgEZpN8bcE0FY5Ynu3zh"

const loadButton = document.getElementById("loadButton")
const getHamsters = function () {
  fetch(hamstersURL, {
    headers: { Authorization: `${accessKey}` },
  })
    .then((res) => {
      console.log(res)
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("ERRORE")
      }
    })
    .then((promise) => {
      const hamsterphotos = promise.photos
      console.log(hamsterphotos)
    })
    .catch((err) => {
      console.log("ERRORE", err)
    })
}
getHamsters()

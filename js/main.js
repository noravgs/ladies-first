document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://female-rappers.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.name
        document.querySelector('p').innerText = data.lyric
        document.querySelector('.song').innerText = data.song

    }catch(error){
        console.log(error)
    }
}
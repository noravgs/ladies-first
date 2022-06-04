document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://female-rappers.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#name').innerText = data.name
        document.querySelector('p').innerText = data.lyric
        document.querySelector('.song').innerText = data.song
        document.querySelector('#location').innerText = data.location
        document.querySelector('#dob').innerText = data.dob
        document.querySelector('#age').innerText = data.age

    }catch(error){
        console.log(error)
    }
}
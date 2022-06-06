document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://female-rappers.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)

        document.querySelector('video').classList = ""
        document.querySelector('#name').innerText = data.name
        document.querySelector('p').innerText = `" ${data.lyric} "`
        document.querySelector('.song').innerText = data.song
        document.querySelector('#location').innerText = `Hometown: ${data.location}`
        document.querySelector('#dob').innerText = `DOB: ${data.dob}`
        document.querySelector('#age').innerText = `Age: ${data.age}`
        document.querySelector('video').src = data.video


    }catch(error){
        console.log(error)
    }
}
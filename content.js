var ativo = false;
        
const interval = setInterval (() => {
    const header = document.querySelector("._3auIg");
    if(header){
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "Speed"
        button.classList.add("twoTimesButtonOff")
        
        button.addEventListener("click", () => {
            if(ativo == false){
                ativo = true;
                button.classList.remove("twoTimesButtonOff")
                button.classList.add("twoTimesButtonOn")

                const audios = document.querySelectorAll("audio");
                audios.forEach((audio) =>{
                    audio.playbackRate = 2;
                })
            }
            else{
                ativo = false;
                button.classList.remove("twoTimesButtonOn")
                button.classList.add("twoTimesButtonOff")
                const audios = document.querySelectorAll("audio");
                audios.forEach((audio) =>{
                    audio.playbackRate = 1;
                })
            }
        })
        header.appendChild(button)
    } 
},1000)
function appear()
{
    const ragnarokIsComing = document.querySelector(".container2");
    var color=0;
    ragnarokIsComing.innerHTML="Ragnarok is coming";
    var id2 = setInterval(()=>{
        ragnarokIsComing.style.color=`rgba(${color},${color},${color})`;
        color+=1;
        console.log("here");
        if(color>=205)
        {
            clearInterval(id2);
        }
    },20)
    
}

appear();
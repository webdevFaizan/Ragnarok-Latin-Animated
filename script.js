var randomImage=null;
        console.log("Hello");
        var count=0;
        var arr = [false,false,false,false,false,false,false,false];
        
        function changeSymbol()
        {
            var randomNumber = Math.floor(Math.random()*8);
            randomImage= document.querySelector(`.symbol${randomNumber+1}`);
            var num = Math.floor(Math.random()*26);
            console.log(randomNumber+" "+num);


            if(arr[0] == false && randomNumber==0 )
            {
                randomImage.innerHTML=`<img src="img/${String.fromCharCode(num+65)}.jpg" height = 150px alt="">`
                if(num==17)
                {
                arr[0]=true;
                count++;
                }
            }
            else if(arr[1] == false && randomNumber==1 )
            {
                randomImage.innerHTML=`<img src="img/${String.fromCharCode(num+65)}.jpg" height = 150px alt="">`
                if(num==0)
                {
                    arr[1]=true;
                    count++;
                }
            }
            else if(arr[2] == false && randomNumber==2 )
            {
                randomImage.innerHTML=`<img src="img/${String.fromCharCode(num+65)}.jpg" height = 150px alt="">`
                if(num==6)
                {
                    arr[2]=true;
                    count++;
                }
            }
            else if(arr[3] == false && randomNumber==3 )
            {
                randomImage.innerHTML=`<img src="img/${String.fromCharCode(num+65)}.jpg" height = 150px alt="">`
                if(num==13)
                {
                    arr[3]=true;
                    count++;
                }
            }
            else if(arr[4] == false && randomNumber==4 )
            {
                randomImage.innerHTML=`<img src="img/${String.fromCharCode(num+65)}.jpg" height = 150px alt="">`
                if(num==0)
                {
                    arr[4]=true;
                    count++;
                }
            }
            else if(arr[5] == false && randomNumber==5 )
            {
                randomImage.innerHTML=`<img src="img/${String.fromCharCode(num+65)}.jpg" height = 150px alt="">`
                if(num==17)
                {
                    arr[5]=true;
                    count++;
                }
            }
            else if(arr[6] == false && randomNumber==6 )
            {
                randomImage.innerHTML=`<img src="img/${String.fromCharCode(num+65)}.jpg" height = 150px alt="">`
                if(num==14)
                {
                    arr[6]=true;
                    count++;
                }
            }
            else if(arr[7] == false && randomNumber==7 )
            {
                randomImage.innerHTML=`<img src="img/${String.fromCharCode(num+65)}.jpg" height = 150px alt="">`
                if(num==10)
                {
                    arr[7]=true;
                    count++;
                }
            }
            else if(count==8)
            {
               console.log("oye");
               return "oye";
            }
            
        }


        function appear()
        {
        const ragnarokIsComing = document.querySelector(".container2");
        var color=0;
        ragnarokIsComing.innerHTML="Ragnarok is coming";
        var id2 = setInterval(()=>{
            ragnarokIsComing.style.color=`rgba(${color},${color},${color})`;
            color+=1;
            if(color>=100)
            color++;
            console.log("here");
            if(color>=205)
            {
                clearInterval(id2);
            }
        },20)}
        
        var id=setInterval(()=>{
            var ret=changeSymbol();
            if(ret==="oye")
            {
                appear();
                clearInterval(id);
                
            }

        },20)
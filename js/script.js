<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   
    
    <style>
        .player{
            position: absolute;
            top: 0;
            left: 0;
           
            width: 100px;
            height: 100px;
            z-index: 1;
        }
        .player>img{
            width: 100%;

        }
        .shit{
            position:absolute;
            top:600px;
            left:700px;
            width: 60px;
            height: 60px;

        }
        .shit>img{
            width: 100%;
        }
        .score{
            position: fixed;
            top: 50px;
            right: 50px;
            padding-left: 20px;
            
            width: 200px;
            height: 50px;
            line-height: 50px;
            background-color: skyblue;
            border-radius: 25px;
        }
    </style>
</head>
<body>
    <audio src="./hdl.mp3"   ></audio>
    <div class="player">
        <img src="./images/cyf.jpg" alt="">
    </div>
    <div class="shit">
        <img src="./images/shit.webp" alt="">
    </div>
    <div class="score">
       您的得分：<span class="fenshu"></span>
        
    </div>
    

    <script>
        var player=document.querySelector('.player')
        var shit=document.querySelector('.shit')
        var fenshu=document.querySelector('.fenshu')
        var audio=document.querySelector('audio')
        fenshu.innerHTML=0
       
      
        document.addEventListener('mouseover',function(e){
            var x=e.pageX;
            var y=e.pageY;
            
            
            player.style.top=y-50+'px';
            player.style.left=x-50+'px';

            

        })

        setInterval(()=>{
            shit.style.top=Math.floor(Math.random()*500)+'px'
            shit.style.left=Math.floor(Math.random()*1200)+'px'
            console.log(shit.style.top);
            console.log(shit.style.left);
            audio.play()
            
            
            var c=touch()
            console.log(c[0]);
            console.log(c[1]);
            setTimeout(function(){
                if(c[0]>-20&&c[0]<80){
                if(c[1]>-20&&c[1]<80){
                    fenshu.innerHTML++
                }
            }

            },1000)
           
            
            
           }
            
            
            
            

        ,3000)
       
        function touch(){
           var a=parseInt(shit.style.left)-parseInt(player.style.left);
           var b=parseInt(shit.style.top)-parseInt(player.style.top);
           return [a,b]
          
                    
            
        }
       
      
       
    </script>
    
</body>
</html>

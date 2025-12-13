
const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'

    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random() * 16)];
    }
    return color
};
let intervalId;
const startChangingColor=function(){  
    if(!intervalId){
        intervalId=setInterval(changeBGcolor,1300)
    }

    function changeBGcolor(){
        document.body.style.backgroundColor=randomColor();
    }
};
stopChangingColor=function(){
    clearInterval(intervalId)
    intervalId=null;
}


document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)
//we are overwriting the interval id again and again, we need to flush out the pervious interval id of hex colour we will use intervalId=null
//afterthat



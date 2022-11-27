var imgNum = 1;
function right(){
    if(imgNum ! = 3){
        imgNum += 1;
        changeimg(imgNum, -1);
    }
    else{
        imgNum = 1;
        changeimg(imgNum, +2);
    }
}
function left(){
    if(imgNum ! = 1){
        imgNum -= 1;
        changeimg(imgNum, +1);
    }
    else{
        imgNum = 3;
        changeimg(imgNum, -2);
    }
}
function changeimg (value, count){
    document.getElementById('img${value + count}').style.opacity = '0';
    document.getElementById('img${value}').style.opacity = '1';
    document.getElementById('circle${value + count}').style.background = 'transparent';
    document.getElementById('circle${value}').style.background = 'white';
}
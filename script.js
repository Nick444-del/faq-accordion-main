var ans = document.querySelectorAll('.answer');
function open1(m, n){
    var ico = document.getElementById(m);
    var plus = './assets/images/icon-plus.svg';
    var minus = './assets/images/icon-minus.svg';
    var icon = document.querySelectorAll('.img');
    var answer = document.getElementById(n);
    if(answer.style.height == 'auto' && answer.style.opacity == '1'){
        answer.style.height = '0';
        answer.style.opacity = '0';
        ico.src = plus;
    }else{
        for(var i = 0 ; i < ans.length; i++){
            ans[i].style.height = '0';
            ans[i].style.opacity = '0';
        }
        for(var i = 0 ; i < icon.length; i++){
            icon[i].src = './assets/images/icon-plus.svg';
        }

        ico.src = minus;
        answer.style.height = 'auto';
        answer.style.opacity = '1';
    }
}
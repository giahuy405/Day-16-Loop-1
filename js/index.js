function print() {
    var displayOdd = document.getElementById('displayOdd');
    var displayEven = document.getElementById('displayEven');

    // for (var n = 0; n <= 100; n++) {
    //     if (n % 2 === 0) {
    //         displayEven.innerHTML = displayEven.innerHTML + n + " ";
    //     }else if(n%2!==0){
    //         // vì .innerHTML nó in đè số cũ nên ta ko dùng 
    //         // displayEven.innerHTML = n + ' ' được -> nó chỉ in số cuối 
    //         displayOdd.innerHTML = displayOdd.innerHTML + n + " ";
    //     }
    // }
    var n = 0;
    while (n <= 100) {
        if (n % 2 === 0) {
            displayEven.innerHTML = displayEven.innerHTML + n + ' ';
        } else if (n % 2 !== 0) {
            displayOdd.innerHTML = displayOdd.innerHTML + n + ' ';
        }
        n++;
    }
}

function ex2() {
    var numberEx2 = +document.getElementById('numberEx2').value;
    var displayEx2 = document.getElementById('displayEx2');
    var totalEven = 0;
    //kiểm tra hợp lệ
    if (numberEx2 === 0) {
        alert('Vui lòng nhập số');
        return;
    } else if (numberEx2 < 0) {
        alert("Vui lòng nhập số dương");
        return;
    }

    // for(var i=0;i<numberEx2;i++){
    //     if(i%2===0){
    //         totalEven+=i;
    //     }
    // }
    var i = 0;
    while (i < numberEx2) {
        if (i % 2 === 0) totalEven += i;
        i++;
    }
    displayEx2.innerHTML = totalEven;
}

function ex3() {
    var displayEx3 = document.getElementById('displayEx3');
    var count = 0;
    for (var i = 0; i <= 1000; i++) {
        if (i % 3 === 0) {
            count++;
        }
    }
    displayEx3.innerHTML = count;

    // var i=0;
    // while(i<=1000){
    //     if(i%3===0){
    //         count++;
    //     }
    //     i++;
    // }
}


// tìm số ng.dương nhỏ nhất sao cho 1+2+...+n>1000 
function ex4() {
    var displayEx4 = document.getElementById('displayEx4');
    var n = 0;
    var s = 0;
    while (s < 10000) {
        n++;
        s += n;
    }
    displayEx4.innerHTML = 'Số nhỏ nhất để tổng từ 1 đến n lớn hơn 10,000 là ' + n;
}

function ex5() {
    var numberX = +document.getElementById('numberX').value;
    var numberN = +document.getElementById('numberN').value;
    var s = 0;
    var displayEx5=document.getElementById('displayEx5');

    for (var i = 1; i <= numberN; i++) {
        s= s+ Math.pow(numberX,i);
        displayEx5.innerHTML=displayEx5.innerHTML+' ' + s;
    }
    // displayEx5.innerHTML=s;
}
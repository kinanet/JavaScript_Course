// First exercise
var styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-Ролл');
console.log(styles);
styles[styles.length-2] = "Классика";
console.log(styles);
alert(styles.shift());
console.log(styles);
styles.unshift('Рэп', 'Регги')
console.log(styles);

// Second exercise
for (var i = 2; i <= 10; i++) {
    if (i%2 === 0){
        console.log(i);
    }
}

for (var i = 2; i <= 10; i++) {
    if (!(i%2)){
        console.log(i);
    }
}

for (var i = 2; i <= 10; i+=2) {
    console.log(i);
}

// Third exercise
var i = 0, value, arr=[], sum = 0;

while(true){
    value = prompt('Enter the number.', '0');

    if ((value === '') || (+value !== +value) || (!value)){
        if(arr.length === 0){
            alert('Array should have at least one number.')
            continue;
        }
        else{
            break;
        }
    }

    arr[i] = +value;
    i++;
}

for (var arrayKey in arr){
    sum += arr[arrayKey];
}

console.log('sum = ' + sum);

// Fourth exercise
var a = 2,
    b = 10,
    isSimple;

if (a>b){
    var c = a;
    a = b;
    b = c;
}

for(a; a<=b; a++){
    isSimple = true;

    for(var i=2; i<a; i++){
        if(a%i === 0){
            isSimple = false;
            break;
        }
    }
    if (isSimple){
        if (a !== 1){
            console.log(a);
        }
    }
}

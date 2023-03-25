//bài 1
//Khai báo 1 mảng gồm các số bất kỳ. 

const input = prompt("Nhập dãy số nguyên, ngăn cách bằng dấu cách");
// hàm split tách chuối thành mảng ;
const numbers = input.split(" ");
console.log(numbers);


// tính tích các phân tử trong mảng 

let s = 1;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    s = s * number;
}
console.log(s);

//Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.

function smallest() {
    numbers.sort(function (a, b) {
        return a - b;
    });
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 == 0) {
            console.log(number);
            break;
        }
    }
}
smallest()

// Tính giá trị trung bình của mảng.
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i])
}

const medium = sum / numbers.length;
console.log(medium);
//Tìm số lớn nhất mà chia hết cho 3 trong mảng.

function Big() {
    numbers.sort(function (a, b) {
        return b - a;
    });
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 3 == 0) {
            console.log(number);
            break;
        }
    }
}
Big()
//Lọc ra các số nguyên tố trong mảng.
for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    for (let x = 2; x < numbers[i]; x++) {
        if (numbers[i] % x == 0) {
            count++
        }
        if (count > 0) {
            break;
        }
    }
    if (count > 0) {
        console.log(numbers[i] + ' không là só nguyên tố')
    }
    else {
        console.log(numbers[i] + ' là só nguyên tố');

    }
}
//Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.

let hasOddNumber = numbers.some(function (item) {
    return item < 10;
});
console.log(hasOddNumber);
// in ra số lớn hơn và bé hơn 10 
for (let i = 0; i < numbers.length; i++) {


    if (numbers[i] < 10) {
        console.log(numbers[i] + " số bé hơn 10");
    }
    else {
        console.log(numbers[i] + "số lớn hơn 10")
    }
}
//Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
let isOddArray = numbers.every(function (item) {
    return item < 20;
});
console.log(isOddArray);
//Nhập vào số n cho đến khi n là 1 số trong mảng s.
let n = (prompt('nhập n là 1 số bất kì'))
while(!numbers.includes((n))){
    n=prompt("nhap lai n");
}
console.log(`so ${n} la so trong mang`);
// //2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.

const s = ["ByeMylove", "this", "minamoto", "product", "vietnam"];
const text = prompt("nhập vào chuỗi ");

//Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
let min = s[0];
for (let i = 0; i < s.length; i++) {
    if (s[i].length < min.length) {
        min = s[i];
    }
}
console.log(`chuỗi ngắn nhất trong mảng là:${min}`);
//2 Tìm những chuỗi trong mảng có chứa giá trị text. 
for (i = 0; i < s.length; i++) {
    if (s[i] == text) {
        console.log(text);
    }
}//Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.



let newS = s.map(i => i.slice(0, 3));
console.log(newS);

//Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
let array = s.join('-');
console.log(array);
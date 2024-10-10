
const perimeter = (length, width) => 2 * (length + width);


const area = (length, width) => length * width;

// Khai báo chiều dài và chiều rộng
const length = 5; // chiều dài
const width = 3;  // chiều rộng

// Tính chu vi và diện tích
const rectPerimeter = perimeter(length, width);
const rectArea = area(length, width);


console.log(`Chu vi hình chữ nhật: ${rectPerimeter}`);
console.log(`Diện tích hình chữ nhật: ${rectArea}`);   

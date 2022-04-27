// 고정된 크기의 메모리 덩어리
const buf = Buffer.from('Hi');

console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

// 생성 시 버퍼 초기화
const buf2 = Buffer.alloc(2);
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());

// 메모리 부족 시 초기화하지 않고 생성, 빠름
const buf3 = Buffer.allocUnsafe(3);

// 복사
buf2.copy(buf3);
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());

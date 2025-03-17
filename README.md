# PokemonDex

## ภาพรวม
PokemonDex เป็นแอปพลิเคชัน React แบบง่ายที่ดึงข้อมูลและแสดงโปเกมอน 151 ตัว [PokeAPI]([https://pokeapi.co/](https://pokeapi.co/api/v2/pokemon?offset=0&limit=151)) ผู้ใช้สามารถคลิกปุ่มเพื่อดึงและดูรายละเอียดของโปเกมอน เช่น รูปภาพ, ประเภท และค่าสถานะพื้นฐาน

## คุณสมบัติ
- ดึงข้อมูลโปเกมอน 151 ตัวจาก PokeAPI
- แสดงรูปภาพโปเกมอน (ด้านหน้าและด้านหลัง), ชื่อ, ประเภท และค่าสถานะพื้นฐาน
- ปุ่มกดเพื่อแสดง/ซ่อนรายการโปเกมอน

## การติดตั้ง
### ข้อกำหนดเบื้องต้น
ติดตั้ง:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) หรือ [yarn](https://yarnpkg.com/)

### ขั้นตอนการติดตั้ง
1. โคลนโปรเจค:
   ```sh
   git clone https://github.com/janyuaru/PokemonDex.git
   cd PokemonDex
   ```
2. ติดตั้งแพ็กเกจที่จำเป็น:
   ```sh
   npm install
   ```
3. เริ่มต้นแอปพลิเคชัน:
   ```sh
   npm start
   ```
4. เปิดแอปพลิเคชันในเบราว์เซอร์ที่ `http://localhost:3000/`.

## โครงสร้างของโปรเจค
```
PokemonDex/
│── src/
│   ├── pages/
│   │   ├── PokemonDex.jsx
│   ├── style/
│   │   ├── PokemonDex.css
│   ├── App.js
│   ├── index.js
│── package.json
│── README.md
```

## เทคโนโลยีที่ใช้
- React
- Axios (สำหรับดึงข้อมูลจาก PokeAPI)
- React Router
- CSS

## การอ้างอิง API
  - ใช้ดึงข้อมูลโปเกมอนจาก `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`.

## วิธีการใช้งาน
1. คลิกปุ่ม "Get Pokemon dex" เพื่อดึงและแสดงข้อมูลโปเกมอน
2. คลิก "Hide Pokemon dex" เพื่อซ่อนรายการโปเกมอน
3. เลื่อนเพื่อดูโปเกมอนทั้งหมด



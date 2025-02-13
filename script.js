// สร้าง Intersection Observer เพื่อจับการเลื่อน
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // เมื่อ section เข้าไปอยู่ในมุมมอง (viewport)
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // เพิ่ม class ที่ทำให้มันแสดง
        observer.unobserve(entry.target); // หยุดติดตามการเปลี่ยนแปลงของ element นี้
      }
    });
  }, {
    threshold: 0.9 // ให้ trigger เมื่อ 50% ของ element ปรากฏใน viewport
  });
  
  // เลือกแต่ละ section ที่ต้องการให้มี animation
  const datesback2 = document.querySelectorAll('.datesback2');
  datesback2.forEach(datesback2 => {
    observer.observe(datesback2); // เริ่มสังเกตแต่ละ section
  });
  const datesback = document.querySelectorAll('.datesback');
  datesback.forEach(datesback => {
    observer.observe(datesback); // เริ่มสังเกตแต่ละ section
  });   
  
  









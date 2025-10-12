# Task Management System (TMS)

## Project Overview
พัฒนาระบบจัดการงาน (Task Management System) สำหรับการสร้าง จัดการ และติดตามสถานะงานแบบง่ายๆ สำหรับผู้ใช้ โดยมีฟีเจอร์พื้นฐาน เช่น Login, Create Task, Read/List Tasks, Update Status, และ Delete Task

## Team Members
- **PM:** 672110132 นางสาวกชกร กิติมา
- **Tester:** 672110235 นางสาวปุนภยา กรกฎกำจร
- **Developer:**
  1. 672110242 นายยศัสวิน ปัญญญาไหว
  2. 672100141 นายถนันณัฏฐ์ พฤกษ์สกุลวงศ์
  3. 672110236 นายพศวีร์ ตันติวัฒนชัยกุล
 
## Key Features
1.  **Login Page:** ผู้ใช้สามารถเข้าสู่ระบบด้วย Username/Password
2.  **Create Task:** เพิ่มงานใหม่
3.  **List Tasks:** แสดงรายการงานทั้งหมด
4.  **Update Status:** เปลี่ยนสถานะงาน (เช่น Pending, Done)
5.  **Delete Task:** ลบงานออกจากระบบ

## Deployment Process
1.  **Push Code:** นักพัฒนาส่งโค้ดขึ้น GitHub Branch ที่กำหนด
2.  **Build & Install:** ระบบ CI/CD ทำการ Build โปรเจกต์และติดตั้ง Dependencies อัตโนมัติ
3.  **Run Tests:** รัน Unit Test และ Integration Test เพื่อยืนยันความถูกต้อง
4.  **Create Docker Image:** สร้าง Image ของระบบสำหรับ Container
5.  **Push to Container Repository:** ส่ง Docker Image ไปยัง Docker Hub หรือ GitHub Container Registry
6.  **Deploy to Environment:** ระบบนำ Image ไป Deploy ยัง Staging หรือ Production Server
7.  **Verify Deployment:** ตรวจสอบการทำงานเบื้องต้นของระบบ (Smoke Test)

## Test Specification (Test Spec)

| Test ID | Function | Description | Input | Expected Output | Assigned Role |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TS01 | loginSuccess() | ตรวจสอบ Login สำเร็จ | username/Password ถูกต้อง | สามารถเข้าสู่ระบบและไปหน้า Task List | Developer (Dev1) |
| TS02 | createTask() | เพิ่มงานใหม่ | Task Name: "Test Task" | งานแสดงใน Task List | Developer (Dev1) |
| TS03 | loginFail() | ตรวจสอบ Login ล้มเหลว | Username/Password ไม่ถูกต้อง | แสดงข้อความ “Login Failed” | Developer (Dev2) |
| TS04 | updateStatus() | เปลี่ยนสถานะงาน | เลือกงาน > Update Status เป็น Done | สถานะงานเปลี่ยนเป็น Done | Developer (Dev2) |
| TS05 | deleteTask() | ลบงาน | เลือกงาน > Delete | งานถูกลบจาก Task List | Developer (Dev3) |

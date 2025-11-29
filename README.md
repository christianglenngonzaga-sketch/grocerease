
# **GrocerEase**

A simple, smart grocery tracking system built with **Next.js (App Router)**, **TypeScript**, **MySQL**, and a lightweight **REST API**.

---

## **Requirements**

* Node.js (v16+ recommended)
* npm (or yarn / pnpm)
* MySQL (XAMPP or any MySQL server)
* Database name: `grocerease`

---

## **Installation**

### **1. Install runtime + backend packages**

```sh
npm install mysql2 bcryptjs jsonwebtoken
```

### **2. Install TypeScript type packages (dev-only)**

```sh
npm install -D @types/bcryptjs @types/jsonwebtoken
```

---

## **Environment Setup**

Create `.env` in the project root:

```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=grocerease

JWT_SECRET=change-this-secret
```

Adjust values based on your XAMPP MySQL configuration.

---

## **Database Setup**

### **Using phpMyAdmin**

1. Open phpMyAdmin
2. Select database **grocerease**
3. Go to **SQL** tab
4. Paste the contents of

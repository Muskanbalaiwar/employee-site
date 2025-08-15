**Steps run run code **
clone the code into your local mahine using git clone commanad on github desktop

**then to run frontend code**
goto frontend folder
run  npm i command(install node_modules) -> npm run dev

requirememts 
node version(20+)

**Frontend Folder Structure (React + Vite)**
frontend/
│
├── public/                     # Static assets (favicon, images, etc.)
│
├── src/
│   ├── api/
│   │   ├── axios.js            # Axios instance + interceptors
│   │   └── tokenStore.js       # Token getter/setter
│   │
│   ├── auth/
│   │   ├── AuthContext.js      # Provides login/logout state
│   │   └── PrivateRoute.js     # (Optional) Protects routes
│   │
│   ├── components/
│   │   ├── LoginForm.jsx       # Login UI
│   │   ├── SalaryList.jsx      # Salary UI
│   │   └── Navbar.jsx          # (Optional) Navigation bar
│   │
│   ├── hooks/
│   │   └── useIdleLogout.js    # Auto logout after inactivity
│   │
│   ├── pages/
│   │   ├── LoginPage.jsx       # Page wrapper for LoginForm
│   │   ├── SalariesPage.jsx    # Page wrapper for SalaryList
│   │   └── NotFound.jsx
│   │
│   ├── styles/
│   │   └── main.css            # Global styles
│   │
│   ├── App.js                  # App root
│   ├── main.jsx                # React entry point
│   └── router.js               # React Router config (if using)
│
└── package.json

**steps to run backend code **
once clone goto backend folder
also change the db configurations according to your db in config/db.js file
run npm i (install node_modules) -> npm start

requirements 
node , mysql

to create tables in your database run queries into your db
CREATE DATABASE IF NOT EXISTS {dbName};
USE {dbName};

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    password_expiry DATETIME
);

CREATE TABLE salaries (
    id INT PRIMARY KEY AUTO_INCREMENT,
    emp_id INT,
    amount DECIMAL(10,2),
    FOREIGN KEY (emp_id) REFERENCES employees(id) ON DELETE CASCADE
);


**Backend MVC Folder Structure**
backend/
│
├── config/
│   ├── db.js                # MySQL connection pool
│   └── jwt.js               # JWT helper functions
│
├── controllers/
│   ├── authController.js    # Login, register
│   └── salaryController.js  # Salary fetching
│
├── middlewares/
│   └── authMiddleware.js    # JWT & inactivity check
│
├── models/
│   ├── employeeModel.js     # Employee queries
│   └── salaryModel.js       # Salary queries
│
├── routes/
│   ├── authRoutes.js        # /register, /login
│   └── salaryRoutes.js      # /top-salaries
│
├── server.js                # App entry point
└── package.json


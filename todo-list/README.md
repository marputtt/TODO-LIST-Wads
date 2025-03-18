
## 🚀 Todo List App with Firebase Authentication

This is a React-based Todo List App with Firebase Authentication. The app allows users to sign up, log in, and manage their profiles and tasks.

---

## 🏗️ **Project Structure**
```
src/
├── components/
│   ├── Home.js
│   ├── Login.js
│   ├── Signup.js
│   ├── Profile.js
│   └── ToDoList.js
├── App.js
├── firebase.js
└── index.js
```

---

## 📋 **Features**
✅ User Signup & Login (Firebase Authentication)  
✅ Profile Management  
✅ To-Do List with CRUD Operations  
✅ Secure Logout  
✅ Clean and Responsive UI  

---

## 🛠️ **Setup Instructions**

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 2. **Install Dependencies**
Make sure you have **Node.js** installed. Then run:
```bash
npm install
```

---

### 3. **Set Up Firebase**
1. Go to [Firebase Console](https://console.firebase.google.com)  
2. Create a new project  
3. Enable **Email/Password Authentication**  
4. Create a **Web App** and copy the Firebase config  

---

### 4. **Create `firebase.js`**
Create a new file `firebase.js` in the `src` folder and paste the Firebase config:

```js
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

---

### 5. **Start the Development Server**
```bash
npm start
```
- The app will be available at **[http://localhost:3000](http://localhost:3000)**  

---

## 🎯 **Usage**
1. **Signup** → Create an account  
2. **Login** → Use your credentials to log in  
3. **Home Page** → Navigate to Profile and To-Do List  
4. **Sign Out** → Use the Sign Out button to log out  

---

## 🌟 **Contributing**
Feel free to contribute! Fork the repo, create a branch, and submit a pull request.  

---

## 🔥 **Tech Stack**
- **React**  
- **Firebase**  
- **Tailwind CSS**  

---

## 🏆 **Author**
👤 [Marsya Putra]

---

Let me know if you want to adjust anything! 😎
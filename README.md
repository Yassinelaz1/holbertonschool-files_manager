# 📁 Files Manager

> A simple file upload and management platform built with Node.js, Express, MongoDB, Redis, and Bull.

## 📌 Project Overview

This project is a capstone for the back-end trimester at Holberton School. It brings together key concepts such as:

- User authentication
- API creation with Express
- Data persistence using MongoDB
- Temporary storage and caching with Redis
- Background job processing with Bull
- File handling and thumbnail generation

The platform allows users to upload and manage files, control access permissions, and generate image thumbnails.

## ✨ Features

- 🔐 **User Authentication** via token
- 📜 **List all files** uploaded by a user
- 📤 **Upload new files**
- 🔄 **Change file permissions** (public/private)
- 👁 **View file content**
- 🖼 **Generate thumbnails** for image files using background processing

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Redis**
- **Bull** (for background jobs)
- **Mime-types** (to handle file types)
- **Sharp** (for image processing)

---

## 📚 Resources

To help you through the project, we recommend checking out:

- [Node.js Getting Started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Express.js Guide](https://expressjs.com/en/starter/installing.html)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Redis Guide](https://redis.io/docs/)
- [Bull Queue](https://github.com/OptimalBits/bull)
- [Mocha Testing](https://mochajs.org/)
- [Mime Types](https://www.npmjs.com/package/mime-types)
- [Sharp (thumbnails)](https://sharp.pixelplumbing.com/)

---

## 🚀 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/files_manager.git
   cd files_manager
Install dependencies:

bash

Copier

Modifier

npm install

Set up environment variables:

Create a .env file in the root directory with the required MongoDB and Redis configurations.

**Start the server:**

bash
Copier
Modifier
npm start

## ⚙️ Project Structure

```plaintext
files_manager/
├── controllers/
├── middlewares/
├── routes/
├── utils/
├── workers/
├── tests/
├── .eslintrc.cjs
├── babel.config.js
├── package.json
└── README.md
```
## ✅ Requirements

✅ Ubuntu 20.04 LTS

✅ Node.js v20.x.x

✅ ESLint compliant code

✅ js file extension for all code

✅ Ends of files should contain a newline

## 🧪 Testing
To run the tests:
```
bash
Copier
Modifier
npm test
Ensure you have MongoDB and Redis running locally before running tests.
```

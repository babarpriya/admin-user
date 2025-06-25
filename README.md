# Blog Platform API

This is a full-featured blogging platform built using **Node.js**, **Express**, and **MongoDB**, featuring:

- User & Admin role-based access
-  JWT Authentication
-  Blog creation, editing, deletion
-  Commenting system
-  Blog image upload support (via Multer)
-  Search, filters & admin controls

##  Features

### Authentication
- Signup with automatic role detection (admin based on credentials)
- Login with JWT token response

###  Blog Management (Users)
- Create, read, update, delete blogs
- Upload blog images
- View all blogs from all users

### Comment System
- Comment on any blog
- Blog owner can view comments on their blogs

### Admin Panel
- View all users
- Block users
- Delete or edit any blog
- Filter users by:
  - Who has blogs / who doesn’t
  - Who has commented / who hasn’t

### Search and Filters
- Search blogs by title
- Filter blog posts based on user activity


##  Project Structure
blog/
├── controllers/
│ ├── adminController.js
│ ├── authController.js
│ ├── blogController.js
│ └── commentController.js
├── models/
│ ├── Blog.js
│ ├── User.js
│ └── Comment.js
├── middlewares/
│ ├── authUser.js
│ └── authAdmin.js
├── routes/
│ ├── authRoutes.js
│ ├── blogRoutes.js
│ └── adminRoutes.js
├── uploads/ ← Stores uploaded images
├── app.js
├── .env
└── README.md


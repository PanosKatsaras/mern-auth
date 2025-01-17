![Image](https://github.com/user-attachments/assets/22cf765c-cea5-430a-afd1-b8fc924da29d)

![Screenshot 2 (issue 57772)](https://github.com/user-attachments/assets/b502f096-bb24-474b-8a42-1771f7aac965)

# Project Overview
This is a Full-Stack Authentication and Employee Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
It offers secure user authentication, role-based registration and access, email-based account verification, and employee management features. 
The authentication system implements access and refresh tokens to ensure secure and long-lived sessions.

# Key Features
Authentication and Role-Based Access Control:
OTP-Based Email Verification: New users must verify their account via OTP sent to their email.
Role-Based Registration:
Admins and Managers are assigned their roles by providing special codes during registration.
Default role for new users is Employee.

# Token Management:
Access Tokens: Short-lived tokens (15/30 minutes) used for API requests.
Refresh Tokens: Long-lived tokens (7 days) used to refresh access tokens.
Employee Management:
Admins have full control over employee records (create, read, update, delete).
Managers can edit and view employee records.
Employees can view only their own details.
# Emails:
Welcome email sent after successful registration.
OTP and password reset emails sent for verification and recovery.

# Frontend:
Built with React.js and optimized using Vite.
Axios is used for API communication.
React Toastify provides user-friendly notifications.
React Router handles navigation seamlessly.

# Backend:
Built with Node.js and Express.js for RESTful APIs.
Mongoose integrates with MongoDB for database operations.
JWT handles secure token-based authentication.
Nodemailer sends verification and reset emails.

# Tech Stack

## Frontend:
React.js: Frontend library for building user interfaces.

Vite: Development tool for fast builds and optimized performance.

Axios: HTTP client for API communication.

React Router Dom: For routing and navigation.

React Toastify: For notifications.

## Backend:
Node.js: Server-side JavaScript runtime.

Express.js: Web framework for building APIs.

Mongoose: ODM for MongoDB.

JWT: Secure token-based authentication.

Nodemailer: Email sending service.

Bcrypt.js: For password hashing.

## Database:
MongoDB: NoSQL database for user and employee data.

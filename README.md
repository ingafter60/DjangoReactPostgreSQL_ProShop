# BUILDING ECOMMERCE WEB APP USING DJANGO, REACT AND GRAPHQL

## 1. SECTION 1: INTRODUCTION

### 1.1 Introduction

        PASSED

### 1.2 ProShop Demo & Prerequisites

        PASSED

### 1.3 Resources & Environment

        PASSED

### 1.4 A Message From Brad Traversy

        PASSED

## 2. SECTION 2: STARTING THE FRONTEND

### 2.0 Initial setup

        new file:   .gitignore
        new file:   README.md

### 2.1 Creating React App called 'frontend'

        modified:   .gitignore
        modified:   README.md
        new file:   frontend/.gitignore
        new file:   frontend/README.md
        new file:   frontend/package.json
        new file:   frontend/public/favicon.ico
        new file:   frontend/public/index.html
        new file:   frontend/public/logo192.png
        new file:   frontend/public/logo512.png
        new file:   frontend/public/manifest.json
        new file:   frontend/public/robots.txt
        new file:   frontend/src/App.css
        new file:   frontend/src/App.js
        new file:   frontend/src/App.test.js
        new file:   frontend/src/index.css
        new file:   frontend/src/index.js
        new file:   frontend/src/logo.svg
        new file:   frontend/src/reportWebVitals.js
        new file:   frontend/src/setupTests.js
        new file:   frontend/yarn.lock

### 2.2.1 Creating Header & Footer Components

        modified:   .gitignore
        modified:   README.md
        deleted:    frontend/.gitignore
        deleted:    frontend/README.md
        deleted:    frontend/src/App.css
        modified:   frontend/src/App.js
        deleted:    frontend/src/App.test.js
        new file:   frontend/src/components/Footer.js
        new file:   frontend/src/components/Header.js
        modified:   frontend/src/index.css

### 2.2.2 Installing Reach-Bootstrap

        modified:   README.md
        new file:   frontend/package-lock.json
        modified:   frontend/package.json
        new file:   frontend/src/bootstrap.min.css
        modified:   frontend/src/index.js

### 2.2.3 Using Reach-Bootstrap

        modified:   README.md
        modified:   frontend/src/App.js

### 2.2.4 Styling the components

        modified:   README.md
        modified:   frontend/src/App.js
        modified:   frontend/src/components/Footer.js
        modified:   frontend/src/index.css

### 2.2.5 Adding Navbar

        modified:   README.md
        modified:   frontend/src/components/Header.js

### 2.3.1 HomeScreen Product Listing - Adding Product Arrays and Product Images

        modified:   README.md
        modified:   frontend/public/favicon.ico
        new file:   frontend/public/images/airpods.jpg
        new file:   frontend/public/images/alexa.jpg
        new file:   frontend/public/images/camera.jpg
        new file:   frontend/public/images/mouse.jpg
        new file:   frontend/public/images/phone.jpg
        new file:   frontend/public/images/playstation.jpg
        new file:   frontend/public/images/sample.jpg
        new file:   frontend/src/products.js

### 2.3.2 HomeScreen Product Listing - Creating and Loading Homescreen (Homepage)

        modified:   README.md
        modified:   frontend/src/App.js
        new file:   frontend/src/screens/HomeScreen.js

### 2.3.2 HomeScreen Product Listing - Loading List of Product Names to Homescreen

        modified:   README.md
        modified:   frontend/src/screens/HomeScreen.js

2.4 Rating Component
2.5 Implementing React Router

3. Section 3: Serving & Fetching Data From Django

3.1 FrontendBackend Workflow
3.2 Building The Backend
3.3 Fetching Data
3.4 Database Setup & Admin Panel
3.5 Modeling Our Data
3.6 Product Image Field
3.7 Static Files
3.8 Serializing Data

4. Section 4: Implementing Redux For State Management

4.1 An Overview of Redux
4.2 Create Redux Store
4.3 Product List Reducer & Action
4.4 Bringing Redux Intro Home Screen
4.5 Message & Loader Component
4.6 Product Details Reducer & Action

5. Section 5: Adding To Shopping Cart

5.1 Qty Select & Add To Cart
5.2 Cart Reducer & Action
5.3 Add To Cart Functionality
5.4 Cart Screen
5.5 Remove Items From Cart

6. Section 6: Backend User Authentication

6.1 JSON Web Tokens Overview
6.2 Postman Overview
6.3 JSON Web Token Installation & Setup
6.4 JWT Customization
6.5 User Serializer
6.6 Protected Routes
6.7 Register User
6.8 Login With Email
6.9 URL’s & Views Cleanup

7. Section 7: Front End User Authentication

7.1 User Login Reducer & Action
7.2 User Login Screen & Functionality
7.3 User In Navbar & Logout
7.4 User Register Reducer, Action & Screen
7.5 Update Profile Endpoint
7.6 Profile Screen & Get User Details
7.7 Update User Profile
7.8 User Details Bug Fix

8. Section 8: Checkout Process (Part 1)

8.1 Shipping Screen & Save Address
8.2 Checkout Steps Component
8.3 Payment Screen & Save Payment Method
8.4 Place Order Screen
8.5 Order View & URL
8.6 Create Order

9. Section 9: Checkout Process (Part 2)

9.1 Get Order By Id Endpoint
9.2 Order Details Reducer & Action
9.3 Order Screen
9.4 Update To Paid Endpoint
9.5 Order Pay Reducer & Action
9.6 PayPal Payments
9.7 Orders In Profile Page

10. Section 10: Admin Screen (Part 1)

10.1 User List Reducer, Action & Screen
10.2 Admin User Delete
10.3 Get User By ID & Update User Endpoints
10.4 User Edit Screen & Get User Details
10.5 Update User Functionality

11. Section 11: Admin Screen (Part 2)

11.1 Admin Product List
11.2 Delete Products
11.3 Create & Update Products Endpoints
11.4 Admin Create Product
11.5 Product Edit Screen
11.6 Edit Product Functionality
11.7 Product Image Upload
11.8 Admin Order List
11.9 Mark Order As Delivered

12. Section 12: Product Reviews, Search & More

12.1 Create Review Endpoint
12.2 Frontend Product Reviews
12.3 Product Search
12.4 Pagination
12.5 Product Carousel

13. Section 13: Getting Ready For Deployment, Postgres & Going Live

13.1 Merging React Files With Django Project
13.2 Adding HashRouter

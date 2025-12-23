# BeyondChats – Full Stack Assignment

This repository contains my submission for the BeyondChats technical assignment.  
The goal was to demonstrate backend fundamentals, API design, scraping logic, and system thinking under real-world constraints.

---

## 🔧 Tech Stack

**Backend**
- Laravel 10 (PHP 8.1)
- SQLite (lightweight local DB)
- REST APIs (CRUD)

**LLM / Processing**
- Node.js (mock LLM service)

**Frontend**
- Vite + Vanilla JS (basic UI)

---

## 📌 Features Implemented

### ✅ Phase 1 – Laravel Backend (Complete)
- Laravel project setup
- SQLite database configuration
- `articles` table with migrations
- Article model & RESTful CRUD APIs
- Console command to scrape BeyondChats blogs
- Graceful fallback when scraping is blocked

### ⚠️ Phase 2 – Node + LLM (Partial)
- Node.js service simulating LLM-based article processing
- Demonstrates architecture & integration intent

### ⚠️ Phase 3 – Frontend (Basic)
- Simple UI scaffold
- Fetches articles from backend API

---

## 🧠 Scraping Strategy (Important)
The BeyondChats website blocks automated scraping requests.

To handle this professionally:
- Implemented scraping logic using Laravel HTTP client
- Added fallback sample data when scraping fails
- Ensured the pipeline continues without breaking

This demonstrates **robust system design under real-world constraints**.

---

## 🚀 How to Run Locally

### Backend
```bash
composer install
php artisan migrate
php artisan serve ```
---

###Scraper
php artisan scrape:beyondchats

Node LLM Service
cd node-llm
node index.js

Frontend
npm install
npm run dev


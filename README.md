<div align="center">

# 🤖 CHAT-AI-Ollama

### Local AI Chat Application Powered by Ollama

A modern AI chat platform that allows users to interact with powerful open-source language models locally through Ollama, providing privacy, speed, and full control over AI conversations.

![License](https://img.shields.io/badge/License-MIT-green)
![NodeJS](https://img.shields.io/badge/Node.js-20+-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-darkblue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Ollama](https://img.shields.io/badge/Ollama-AI-orange)

</div>

---

## 🚀 Overview

CHAT-AI-Ollama is a full-stack AI chat platform designed for developers, students, and AI enthusiasts who want to run Large Language Models locally using Ollama.

Instead of relying on expensive cloud APIs, this application allows you to connect directly to local AI models, ensuring:

- 🔒 Privacy First
- ⚡ Fast Responses
- 💰 Zero API Costs
- 🧠 Multiple Model Support
- 🏠 Fully Self Hosted

The project combines modern web technologies with local AI inference to create a seamless conversational experience. Local AI platforms built on Ollama are commonly used to run open-source models privately on personal machines. :contentReference[oaicite:0]{index=0}

---

# ✨ Features

### 🤖 AI Chat

- Real-time conversations
- Streaming responses
- Context-aware chat history
- Markdown rendering support
- Code block highlighting

### 🧠 Ollama Integration

- Local LLM execution
- Model switching
- Custom system prompts
- Low latency communication
- Full Ollama API support

### 🔐 Authentication & Security

- User Registration
- Secure Login
- Protected Routes
- Session Management
- Role-Based Access Control

### 📂 Chat Management

- Create Conversations
- Save History
- Delete Conversations
- Search Messages
- Persistent Storage

### 🎨 Modern UI/UX

- Responsive Design
- Dark Mode
- Mobile Friendly
- Clean Dashboard
- Fast Navigation

### ⚙️ Developer Friendly

- REST API Architecture
- Type Safety
- Prisma ORM
- PostgreSQL Integration
- Scalable Structure

---

# 🏗️ System Architecture

```text
┌──────────────┐
│   Frontend   │
│   Next.js    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Backend API │
│ Express/Node │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ PostgreSQL   │
│   Prisma     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Ollama     │
│ Local Models │
└──────────────┘
```

---

# 🛠️ Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- TailwindCSS
- Axios

## Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM

## Database

- PostgreSQL

## AI

- Ollama
- Llama Models
- DeepSeek Models
- Qwen Models
- Mistral Models

Ollama supports running many open models locally through a unified interface and API. :contentReference[oaicite:1]{index=1}

---

# 📁 Project Structure

```bash
CHAT-AI-Ollama
│
├── client/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   └── services/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── prisma/
│   └── utils/
│
├── database/
├── public/
└── README.md
```

---

# ⚡ Installation

## Clone Repository

```bash
git clone https://github.com/KamalABO/CHAT-AI-ollama.git
cd CHAT-AI-ollama
```

## Install Dependencies

```bash
npm install
```

## Setup Environment

Create:

```env
DATABASE_URL=
JWT_SECRET=
OLLAMA_URL=http://localhost:11434
```

## Run Database

```bash
npx prisma migrate dev
```

## Start Server

```bash
npm run dev
```

---

# 🤖 Install Ollama

Download and install Ollama:

:contentReference[oaicite:2]{index=2}

Pull a model:

```bash
ollama pull deepseek-r1
```

Run model:

```bash
ollama run deepseek-r1
```

---

# 📸 Screenshots

## Dashboard

```text
[ Add Dashboard Screenshot Here ]
```

## Chat Interface

```text
[ Add Chat Screenshot Here ]
```

## Authentication

```text
[ Add Login Screenshot Here ]
```

---

# 🔥 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```

### Chat

```http
POST /api/chat/send
GET  /api/chat/history
DELETE /api/chat/:id
```

### Models

```http
GET /api/models
POST /api/models/select
```

---

# 🚧 Future Roadmap

- [ ] Voice Chat
- [ ] Speech To Text
- [ ] Multi AI Agents
- [ ] RAG Integration
- [ ] File Upload Support
- [ ] PDF Analysis
- [ ] Docker Deployment
- [ ] Kubernetes Support
- [ ] Team Collaboration
- [ ] AI Memory System

---

# 📊 Why This Project?

This project demonstrates real-world software engineering concepts:

- Full Stack Development
- Authentication & Authorization
- REST API Design
- Database Modeling
- AI Integration
- Clean Architecture
- Scalable Backend Development
- Modern Frontend Engineering

---

# 👨‍💻 Author

### Kamal Mohammed ABO-Shady 

Backend Developer | Full Stack Developer | AI Enthusiast

GitHub:

:contentReference[oaicite:3]{index=3}

---

# ⭐ Support

If you like this project:

⭐ Star the repository

🍴 Fork it

🛠️ Contribute

📢 Share it

---

<div align="center">

### Built with ❤️ using Next.js, PostgreSQL, Prisma and Ollama

</div>

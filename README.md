#  Self-Healing Automation POC (Cypress)

##  Overview
This project demonstrates a Self-Healing Automation framework using Cypress and JavaScript.

The goal is to show how automation can recover from failures instead of failing.

---

##  Scenarios Covered

### 1️⃣ Session Expiry Recovery
- Login into application
- Simulate session expiry (logout)
- Try accessing secure page
- Detect session expired
- Automatically re-login (self-healing)

---

### 2️⃣ Resume After Failure
- Fill form step by step
- Simulate failure during execution
- Show error on UI
- Resume execution from next step

---

##  Key Features
- Self-healing logic using conditional checks
- Automatic recovery from session expiry
- Resume execution after failure
- UI-based error simulation for demo
- Clean and simple Cypress structure

---

##  Tech Stack
- Cypress
- JavaScript
- Node.js

---

## How to Run

```bash
# Install dependencies
npm install

# Open Cypress
npx cypress open

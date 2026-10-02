# AIRACODE Enterprise Mail Gateway

Dedicated Node/Express microservice powered by **Resend** to dispatch 100% custom-styled HTML emails for project inquiries and newsletter subscriptions without third-party form ads or generic templates.

---

## 🚀 1-Minute Free Deployment (Render)

### Method 1: Web Service (Recommended)
1. Go to [dashboard.render.com](https://dashboard.render.com) and sign in (with GitHub).
2. Click **New +** → **Web Service**.
3. Select your repository: `AiraCode-Techonologies/Airacode-Website`.
4. Configure the service settings:
   - **Name**: `airacode-mail-service`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Instance Type**: `Free`
5. Under **Environment Variables**, add:
   - `RESEND_API_KEY`: *(paste your Resend API Key from your Resend dashboard)*
   - `CONTACT_FROM_EMAIL`: `AIRACODE <contact@airacode.online>`
   - `CONTACT_RECIPIENT_EMAIL`: `contact@airacode.online`
   - `TEAM_ALERT_EMAIL`: `nagarajendra432@gmail.com`
6. Click **Deploy Web Service**.
7. Once deployed, copy your Render service URL (e.g., `https://airacode-mail-service.onrender.com`).

---

## 🚂 Alternative: Deploy on Railway
1. Go to [railway.app](https://railway.app) and sign in.
2. Click **New Project** → **Deploy from GitHub repo**.
3. Choose `AiraCode-Techonologies/Airacode-Website`.
4. In **Settings** → **Root Directory**, set to `/server`.
5. In **Variables**, add:
   - `RESEND_API_KEY`: *(your Resend API Key)*
   - `CONTACT_FROM_EMAIL`: `AIRACODE <contact@airacode.online>`
   - `CONTACT_RECIPIENT_EMAIL`: `contact@airacode.online`
   - `TEAM_ALERT_EMAIL`: `nagarajendra432@gmail.com`
6. Generate a public domain under **Networking**.

---

## 📡 API Endpoints

- `GET /health`: Health status.
- `POST /api/contact`: Dispatches custom-themed inquiry email to team & confirmation receipt to client.
- `POST /api/newsletter`: Dispatches custom-themed newsletter welcome email.

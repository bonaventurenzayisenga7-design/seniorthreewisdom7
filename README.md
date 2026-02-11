Project scaffold: React + Vite frontend and Node.js backend with Socket.io.

Run the app:

1) Backend

```bash
cd server
npm install
node index.js
```

Server runs on http://localhost:4000

2) Frontend

```bash
cd client
npm install
npm run dev
```

Opens at http://localhost:5173

Notes:
- This is a demo with an in-memory user store and JWT for simplicity.
- Update `server/index.js` to use a persistent DB for production.
 - To use the site background image, place your `school1.png` file into `client/public/school1.png`.
	 The dev server will then serve it at `/school1.png` and the site will show it as the page background.

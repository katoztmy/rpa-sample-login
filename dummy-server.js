const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// ログインページ
app.get("/", (req, res) => {
	res.send(`
        <form method="POST" action="/login">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password">
            <button type="submit">Login</button>
        </form>
    `);
});

// ログイン処理
app.post("/login", (req, res) => {
	const { username, password } = req.body;
	if (username === "test" && password === "1234") {
		res.send("Login successful!");
	} else {
		res.send("Invalid credentials.");
	}
});

app.listen(3000, () => {
	console.log("Dummy server running on http://localhost:3000");
});

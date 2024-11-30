const { chromium } = require("playwright");

(async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage();

	// ダミーサイトにアクセス
	await page.goto("http://localhost:3000");

	// ユーザー名とパスワードを入力してログイン
	await page.fill("#username", "test");
	await page.fill("#password", "1234");
	await page.click('button[type="submit"]');

	// ログイン結果を確認
	const result = await page.textContent("body");
	console.log("Login result:", result);

	await browser.close();
})();

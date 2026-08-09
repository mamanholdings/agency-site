import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="kicker">404 · העמוד לא נמצא</p>
      <h1>כנראה שהגענו לאתר הלא נכון.</h1>
      <p>העמוד שחיפשתם לא קיים, אבל הדרך חזרה פשוטה.</p>
      <Link className="button" href="/">
        חזרה לדף הבית
      </Link>
    </main>
  );
}

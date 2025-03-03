import { DatabaseSync } from 'node:sqlite';
const db = new DatabaseSync('notes.db');

db.exec(
  `
	CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    text TEXT
	);
  `,
);

db.prepare(
  `
	INSERT INTO notes (title, text) VALUES
  ("MyNote", "some description"),
  ("NextNote", "lorem ipsum"),
  ("NoteNote", "something else"),
  ("MyNote", "this is some longer note description"),
  ("MyNote", "lorem ipsum dolor sit amet");
  `,
).run();

const rows = db.prepare('SELECT id, title, text FROM notes').all();
console.log('Notes:');

for (const row of rows) {
  console.log(row);
}

db.close();

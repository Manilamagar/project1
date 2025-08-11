import React, { useEffect, useState } from "react";

// Veda Library Management System
// Single-file React app (default export) using Tailwind CSS for styling.
// Features:
// - Book CRUD (Create, Read, Update, Delete)
// - Borrow / Return books with borrower name and date
// - Search & filter
// - Persists to localStorage (simple mock backend)
// - Export / Import JSON for backup

// NOTE: This file assumes Tailwind CSS is available in the project.

const STORAGE_KEY = "veda-library-data-v1";

function usePersistedState(key, initial) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch (e) {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {}
  }, [key, state]);

  return [state, setState];
}

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function formatDateISO(d = new Date()) {
  return new Date(d).toLocaleDateString();
}

function sampleData() {
  return {
    books: [
      {
        id: uid(),
        title: "Introduction to Algorithms",
        author: "Cormen, Leiserson, Rivest, Stein",
        isbn: "0262033844",
        copies: 3,
        available: 3,
        category: "Computer Science",
        year: 2009,
        notes: "Classic algorithms text",
        history: [],
      },
      {
        id: uid(),
        title: "Clean Code",
        author: "Robert C. Martin",
        isbn: "0132350882",
        copies: 2,
        available: 1,
        category: "Programming",
        year: 2008,
        notes: "Good practices",
        history: [
          { type: "borrow", by: "Sita", date: formatDateISO(), due: "In 14 days" },
        ],
      },
    ],
  };
}

function BookForm({ onSave, initial = {}, onCancel }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    copies: 1,
    category: "",
    year: new Date().getFullYear(),
    notes: "",
    ...initial,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setBook((b) => ({ ...b, [name]: name === "copies" || name === "year" ? Number(value) : value }));
  }

  function submit(e) {
    e.preventDefault();
    if (!book.title.trim()) return alert("Enter book title");
    if (!book.author.trim()) return alert("Enter author");
    if (!book.copies || book.copies < 1) return alert("Copies must be at least 1");
    onSave(book);
  }

  return (
    <form onSubmit={submit} className="space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input value={book.title} name="title" onChange={handleChange} placeholder="Title" className="input" />
        <input value={book.author} name="author" onChange={handleChange} placeholder="Author" className="input" />
        <input value={book.isbn} name="isbn" onChange={handleChange} placeholder="ISBN" className="input" />
        <input value={book.category} name="category" onChange={handleChange} placeholder="Category" className="input" />
        <input value={book.year} name="year" onChange={handleChange} type="number" placeholder="Year" className="input" />
        <input value={book.copies} name="copies" onChange={handleChange} type="number" placeholder="Copies" className="input" />
      </div>
      <textarea value={book.notes} name="notes" onChange={handleChange} placeholder="Notes" className="input h-24" />
      <div className="flex gap-2">
        <button className="btn-primary" type="submit">Save</button>
        <button type="button" onClick={onCancel} className="btn-ghost">Cancel</button>
      </div>
    </form>
  );
}

function BookRow({ book, onEdit, onDelete, onBorrow, onReturn }) {
  return (
    <div className="p-3 bg-white rounded shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <div>
        <div className="font-semibold">{book.title}</div>
        <div className="text-sm text-gray-600">{book.author} • {book.category} • {book.year}</div>
        <div className="text-xs mt-1">ISBN: {book.isbn} • Copies: {book.available}/{book.copies}</div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onBorrow(book)} className="btn">Borrow</button>
        <button onClick={() => onReturn(book)} className="btn">Return</button>
        <button onClick={() => onEdit(book)} className="btn">Edit</button>
        <button onClick={() => onDelete(book)} className="btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default function App() {
  const [data, setData] = usePersistedState(STORAGE_KEY, sampleData());
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    // ensure available copies never exceed total copies
    setData((d) => ({
      ...d,
      books: d.books.map((b) => ({ ...b, available: Math.min(b.available ?? b.copies, b.copies) })),
    }));
  }, []);

  function addBook(book) {
    const newBook = {
      ...book,
      id: uid(),
      available: book.copies,
      history: [],
    };
    setData((d) => ({ ...d, books: [newBook, ...d.books] }));
    setShowForm(false);
  }

  function updateBook(book) {
    setData((d) => ({
      ...d,
      books: d.books.map((b) => {
        if (b.id !== book.id) return b;
        const diff = (book.copies || 0) - (b.copies || 0);
        return {
          ...b,
          ...book,
          copies: book.copies,
          available: Math.max(0, (b.available || 0) + diff),
        };
      }),
    }));
    setEditing(null);
    setShowForm(false);
  }

  function removeBook(book) {
    if (!window.confirm(`Delete "${book.title}"?`)) return;
    setData((d) => ({ ...d, books: d.books.filter((b) => b.id !== book.id) }));
  }

  function borrowBook(book) {
    const borrower = window.prompt("Borrower name:");
    if (!borrower) return;
    if ((book.available || 0) <= 0) return alert("No available copies");
    const date = formatDateISO();
    const due = "In 14 days";
    setData((d) => ({
      ...d,
      books: d.books.map((b) => {
        if (b.id !== book.id) return b;
        return {
          ...b,
          available: (b.available || 0) - 1,
          history: [{ type: "borrow", by: borrower, date, due }, ...(b.history || [])],
        };
      }),
    }));
  }

  function returnBook(book) {
    const who = window.prompt("Returnee name (optional):");
    setData((d) => ({
      ...d,
      books: d.books.map((b) => {
        if (b.id !== book.id) return b;
        return {
          ...b,
          available: Math.min((b.available || 0) + 1, b.copies || 1),
          history: [{ type: "return", by: who || "unknown", date: formatDateISO() }, ...(b.history || [])],
        };
      }),
    }));
  }

  function handleSave(book) {
    if (book.id) return updateBook(book);
    addBook(book);
  }

  function onEdit(book) {
    setEditing(book);
    setShowForm(true);
  }

  function importJSON(text) {
    try {
      const parsed = JSON.parse(text);
      if (!parsed.books) throw new Error("Invalid format");
      setData(parsed);
      alert("Imported successfully");
    } catch (e) {
      alert("Failed to import: " + e.message);
    }
  }

  function exportJSON() {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "veda-library-backup.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  const categories = Array.from(new Set(data.books.map((b) => b.category).filter(Boolean)));

  const filtered = data.books.filter((b) => {
    const q = query.trim().toLowerCase();
    if (filterCategory && b.category !== filterCategory) return false;
    if (!q) return true;
    return [b.title, b.author, b.isbn, b.category, b.notes].some((f) => (f || "").toString().toLowerCase().includes(q));
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Veda Library Management</h1>
            <div className="text-sm text-gray-600">Lightweight React app — localStorage backed</div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => { setShowForm(true); setEditing(null); }} className="btn-primary">+ Add Book</button>
            <button onClick={exportJSON} className="btn">Export</button>
            <label className="btn cursor-pointer">
              Import
              <input
                type="file"
                accept="application/json"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (!f) return;
                  const reader = new FileReader();
                  reader.onload = () => importJSON(reader.result);
                  reader.readAsText(f);
                }}
              />
            </label>
          </div>
        </header>

        <section className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-2">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title, author, ISBN..." className="input col-span-2" />
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="input">
            <option value="">All categories</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </section>

        <main className="space-y-4">
          {showForm && (
            <div className="p-4 bg-white rounded shadow">
              <h2 className="font-semibold mb-2">{editing ? "Edit Book" : "Add Book"}</h2>
              <BookForm
                initial={editing || undefined}
                onSave={(b) => handleSave({ ...editing, ...b })}
                onCancel={() => { setShowForm(false); setEditing(null); }}
              />
            </div>
          )}

          <div className="space-y-2">
            {filtered.length === 0 && <div className="text-center text-gray-500 p-6">No books found. Add your first book!</div>}
            {filtered.map((b) => (
              <div key={b.id}>
                <BookRow
                  book={b}
                  onEdit={onEdit}
                  onDelete={removeBook}
                  onBorrow={borrowBook}
                  onReturn={returnBook}
                />
                {b.history && b.history.length > 0 && (
                  <details className="mt-1 ml-2 text-sm text-gray-600">
                    <summary>History ({b.history.length})</summary>
                    <ul className="pl-4 list-disc">
                      {b.history.map((h, i) => (
                        <li key={i}>{h.type} — {h.by || "-"} • {h.date} {h.due ? `• ${h.due}` : ""}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            ))}
          </div>

        </main>

        <footer className="mt-6 text-xs text-gray-500">Veda Library • Demo app • Data stored locally in your browser</footer>
      </div>

      {/* Minimal Tailwind-like utility classes to make buttons/inputs look okay if Tailwind isn't configured. */}
      <style>{`
        .input{width:100%;padding:0.5rem;border:1px solid #e5e7eb;border-radius:0.375rem}
        .btn{padding:0.5rem 0.75rem;border-radius:0.375rem;border:1px solid #d1d5db;background:white}
        .btn-primary{background:#111827;color:white;padding:0.5rem 0.75rem;border-radius:0.375rem}
        .btn-ghost{background:transparent;border:1px solid #e5e7eb;padding:0.5rem 0.75rem}
        .btn-danger{background:#fee2e2;border:1px solid #fca5a5;padding:0.5rem 0.75rem}
      `}</style>
    </div>
  );
}

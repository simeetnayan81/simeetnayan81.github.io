import React from "react";

const books = [
  {
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
    status: "Completed",
    notesLink: ""
  },
  {
    title: "Reinforcement Learning: An Introduction",
    author: "Richard S. Sutton & Andrew G. Barto",
    status: "Read Partially",
    notesLink: ""
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    status: "Reading",
    notesLink: ""
  },
  {
    title: "So Good They Can't Ignore You",
    author: "Cal Newport",
    status: "To Read",
    notesLink: ""
  },
  {
    title: "Working in Public",
    author: "Nadia Eghbal",
    status: "To Read",
    notesLink: ""
  }
];

const statusColors = {
  "Reading": { backgroundColor: "#FEF3C7", color: "#92400E" },
  "Completed": { backgroundColor: "#D1FAE5", color: "#065F46" },
  "To Read": { backgroundColor: "#DBEAFE", color: "#1E40AF" },
  "On Hold": { backgroundColor: "#F3F4F6", color: "#6B7280" },
  "Read Partially": { backgroundColor: "#E0E7FF", color: "#3730A3" }
};

const cardStyle = {
  border: "1px solid #ddd",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "16px",
  margin: "8px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  height: "100%"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "16px",
  padding: "16px"
};

const badgeStyle = (status) => ({
  display: "inline-block",
  padding: "4px 8px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: "bold",
  alignSelf: "flex-end",
  marginTop: "auto",
  ...statusColors[status]
});

export default function Bookshelf() {
  return (
    <section className="bookshelf">
      <div className="container">
        <h2 className="section-title">Bookshelf</h2>
        <p className="section-intro">
          What I am reading to stay sharp on machine learning, systems, and craft.
        </p>
        <div style={gridStyle}>
          {books.map((book, index) => (
            <div key={index} style={cardStyle}>
              <h2 style={{ fontSize: "18px", fontWeight: "600" }}>{book.title}</h2>
              <p style={{ color: "#555", fontSize: "14px" }}>{book.author}</p>
              <span style={badgeStyle(book.status)}>{book.status}</span>
              {book.notesLink && (
                <a
                  href={book.notesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563EB", textDecoration: "underline", fontSize: "14px" }}
                >
                  View Notes ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

const mockProducts = Array.from({ length: 42 }, (_, i) => `Product ${i + 1}`);

export default function Products() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(mockProducts.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const currentItems = mockProducts.slice(start, start + itemsPerPage);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div style={{ marginTop: 10 }}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        style={{
                            margin: "0 5px",
                            padding: "5px 10px",
                            background: currentPage === i + 1 ? "#007bff" : "#eee",
                            color: currentPage === i + 1 ? "#fff" : "#000",
                            border: "none",
                            borderRadius: 4,
                            cursor: "pointer",
                        }}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

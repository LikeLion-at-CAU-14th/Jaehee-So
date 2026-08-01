import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get("/databases/books.json");
            setBooks(response.data);
        };
        fetchBooks();
    }, []);

    return (
        <div className="flex justify-start items-center gap-[20px] w-full h-[80vh] m-[20px]">
            <div className="flex flex-col justify-start bg-white p-[50px] h-[80%] rounded-[0_10px_10px_0] shadow-[2px_2px_5px_rgba(0,0,0,0.1)]">
                <div className="text-[40px] text-[#535353] font-[700] cursor-pointer" onClick={goHome}>
                    🏠
                </div>
                <div className="text-[40px] text-[#535353] font-[700]">
                    Book List
                </div>
                <ul>
                    {Array.isArray(books) && books.map((book) => (
                        <Link key={book.id} to={`/books/${book.id}`}>
                            <li>{book.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col justify-start items-center p-[50px] h-full rounded-[0_10px_10px_0] mt-[100px]">
                <Outlet />
            </div>
        </div>
    );
};

export default BookList;
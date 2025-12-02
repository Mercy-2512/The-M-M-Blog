import React, { useState } from "react";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment(""); // Clear the input
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto font-gilda">
            {/* Input Box */}
            <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment😊..."
                className="w-full p-2 border rounded-md"
            />

            {/* Add Comment Button */}
            <button
                onClick={handleAddComment}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Add Comment
            </button>

            {/* Display Comments */}
            <div className="mt-4">
                <h3 className="text-lg font-bold">Comments:</h3>
                {comments.length === 0 && <p>No comments yet!</p>}
                {comments.map((comment, index) => (
                    <div key={index} className="mt-2 p-2 bg-gray-100 rounded-md">
                        {comment}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;

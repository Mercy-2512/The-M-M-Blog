import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const BlogCard = () => {
  const [blogData, setBlogData] = useState(); // To store fetched data
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  // Fetch data from Supabase
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true); // Start loading
      try {
        const { data, error } = await supabase.from("Blog").select("*");
        if (error) throw error;
        setBlogData(data || []); // Update state with fetched data
        console.log(data)
        setError(null); // Clear any existing errors
      } catch (err) {
        setError(err.message); // Set error message
        console.error("Error fetching blogs:", err.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchBlogs();
  }, []);

  // Render the component
  function BlogCards(){
  return (
    <>  
    <div className="p-4">
      {loading ? (
        <p>Loading blogs...</p> // Show loading state
      ) : error ? (
        <p className="text-red-500">Error: {error}</p> // Show error state
      ) : blogData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Display the image */}
              <img
                src={item.imagecard || "https://via.placeholder.com/150"}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              {/* Display text */}
              <div className="p-4">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-gray-600">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs to display.</p> // Show message when no data
      )}
    </div>
    
    </>
  );
};
}
export default BlogCard;

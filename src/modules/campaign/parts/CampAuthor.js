import React from "react";

const CampAuthor = ({ author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src="https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        alt=""
        className="object-cover w-8 h-8 rounded-full"
      />
      <p className="text-xs text-text4">
        by <span className="text-xs font-semibold text-text2">{author}</span>
      </p>
    </div>
  );
};

export default CampAuthor;

import React from "react";

function CategoryPage({match:{params:{id}}}) {

    return <div>Category name: {id}</div>
}

export default CategoryPage;

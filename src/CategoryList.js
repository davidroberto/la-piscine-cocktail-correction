const cocktailCategoriesData = [
    {
      "idCat": 1,
      "strCategory": "Shot",
      "isPublished": true,
    },
    {
      "idCat": 3,
      "strCategory": "meal",
      "isPublished": true,
    },
    {
      "idCat": 5,
      "strCategory": "bar",
      "isPublished": true,
    },
    {
      "idCat": 6,
      "strCategory": "after",
      "isPublished": true,
    },
    {
      "idCat": 9,
      "strCategory": "cirrhose",
      "isPublished": true,
    }
  ];

const CategoryList = () => {
    return (
        <article>
            {cocktailCategoriesData.map((categoryData) => {
                return (<h2>{categoryData.strCategory}</h2>)
            })}
        </article>
    );
}

export default CategoryList;
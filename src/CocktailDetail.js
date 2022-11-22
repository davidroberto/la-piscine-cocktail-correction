const CocktailDetail = (props) => {
    return (
        <article> 
            <img src={props.cocktailData.strDrinkThumb} alt={props.cocktailData.strDrink}/>
            <h2>{props.cocktailData.strDrink}</h2>
            <p>{props.cocktailData.strCategory}</p>
            <p>{props.cocktailData.strInstructions}</p>

            <ul>
                {props.cocktailData.ingredients.map((ingredient) => {
                    return (<li key={ingredient}>{ingredient}</li>)
                })}
            </ul>
        </article>
    )
}

export default CocktailDetail;
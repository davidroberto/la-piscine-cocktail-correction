import { Fragment } from "react";
import CocktailDetail from "./CoktailDetail";

const cocktailsData = [
    {
      "idDrink": "15997",
      "strDrink": "GG",
      "strCategory": "Ordinary Drink",
      "strInstructions": "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
      "ingredients" : [
        "Galliano", "Ginger ale", "Ice"
      ],
      "isPublished": true
    },
    {
      "idDrink": "17222",
      "strDrink": "A1",
      "strCategory": "Cocktail",
      "strInstructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
      "ingredients" : [
        "Gin", "Grand Marnier", "Ice"
      ],
      "isPublished": true
    },
    {
      "idDrink": "13501",
      "strDrink": "ABC",
      "strCategory": "Shot",
      "strInstructions": "Layered in a shot glass.",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
      "ingredients" : [
        "Amaretto", "Baileys irish cream", "Cognac"
      ],
      "isPublished": false
    },
    {
      "idDrink": "17203",
      "strDrink": "Kir",
      "strCategory": "Ordinary Drink",
      "strInstructions": "Add the crème de cassis to the bottom of the glass, then top up with wine.",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg",
      "ingredients" : [
        "Creme de Cassis", "Champagne"
      ],
      "isPublished": true
    }
  ];

const CocktailList = () => {
    return (
        <>
            {cocktailsData.map((cocktailData) => {
                return (
                   <CocktailDetail cocktailData={cocktailData}/>
                    
                )
            })}
        </>
    );
}

export default CocktailList;
import React from "react";
import "./list.css"
import "../../pages/styles/settings/style.css"
// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  ingredients,
  href
}) {
  return (
    <li id="listgroup"className="list-group-item row">
      <div  id="listContainer">
        <div id="recipeRow" className="row">
          <div className ="" id="imageContain">
          <img src={thumbnail} id="thumbnail" alt="thumbnail"/>
          </div>
          <div className="mainIngred" >
            <h3 id="recipeTitle">{title}</h3>
            <p id="ingredients">Ingredients: {ingredients}</p>
            
            
            <a id="recipelink" rel="noreferrer noopener" target="_blank" href={href}>
              Go to recipe!
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}



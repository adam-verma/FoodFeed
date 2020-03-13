import React, { useState } from "react";
import API from '../utils/recipeApi'
import {  Row } from "../components/Grid";
import { RecipeList, RecipeListItem } from "../components/List/RecipeList";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [recipeSearch, setRecipeSearch ]= useState("");
  
    const handleInputChange = event => {
      setRecipeSearch(event.target.value);
    };
  
    const handleFormSubmit = async (event) => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      // API.getRecipes(recipeSearch)
      //   .then(res => {
      //     console.log(res.data);
      //     setRecipes({ recipes: res.data });
      //   })
      //   .catch(err => console.log(err));
      try{
        const response = await API.getRecipes(recipeSearch);
        console.log(response);
        setRecipes(response.data);
      }catch(error) {
        console.group("Get Recipes");
        console.log(error);
        console.groupEnd();
      }
    };
    return (
      <div>
        
        
        
          <Row>
            <div className="col-md-5 mainCon1">
              <form action="/recipes" method="post">
              <h1><i class="fas fa-carrot"> Recipes <i class="fas fa-apple-alt"></i></i> </h1>
                <div>
                  <div className="this-row">
                    <div>
                      <input
                        name="recipeSearch"
                        value={recipeSearch}
                        onChange={handleInputChange}
                        placeholder="Search For a Recipe"
                        id="recipeSearch"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12 mainCon">
                      <button
                        onClick={handleFormSubmit}
                        type="success"
                        className="btn btn-primary "
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          
          
            <div className="col-md-6">
              <div className="r-length">
                {(recipes.length <= 0) &&
                  <h2 className="noRec" >No recipes to display</h2>
                }
                {(recipes.length > 0) && (
                  <RecipeList>
                    {recipes.map(recipe => (
                      <RecipeListItem
                        key={recipe.href}
                        {...recipe}
                      />
                    ))}
                  </RecipeList>
                )}
              </div>
            </div>
          </Row>
    
      </div>
    );
  }
  
  export default Recipes;
  

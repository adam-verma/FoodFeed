import React, { useState } from "react";
import API from '../utils/recipeApi'
import { RecipeList, RecipeListItem } from "../components/List/RecipeList";
// import "./styles/settings/style.css";
import RecJum from "../components/Jumbotron/recipeJumbo"
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



<React.Fragment>    
<RecJum/>
    <div  id="containme" className="row">
<ul>
  <form class="form-inline my-2 my-lg-0 col-md-12 "  id="recipeSearch">
      <input name="recipeSearch"
            value={recipeSearch}
             onChange={handleInputChange}
             placeholder="Search For a Recipe"
            className="form-control"/> 

       <button 
            onClick={handleFormSubmit}
            type="success"
            className="btn btn-primary col-md-12"
            id="recBtn"
        > Search
         </button>
    </form>
    </ul>
    
  </div>





          <div>
            <div className="mainCon1">
              <form action="/recipes" method="post">
                <div>
                  <div className="this-row">
                    <div>
                      
                    </div>
                    <div className=" mainCon">
                     
                    </div>
                  </div>
                </div>
              </form>
            </div>
          
          
            <div className="lenny">
              <div className="r-length">
                {(recipes.length <= 0) &&
                  <h2 className="noRec" ></h2>
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
          </div>
    
      
    
      </React.Fragment>
    );
  }
  
  export default Recipes;
  

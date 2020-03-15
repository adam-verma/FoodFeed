import React, { useState } from "react";
import API from '../utils/recipeApi'
import {  Row } from "../components/Grid";
import { RecipeList, RecipeListItem } from "../components/List/RecipeList";
// import "./styles/settings/style.css";

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
    <div className="container"  id="containme">
<div className='row navy'>    
<nav class="navbar navbar-expand-lg navbar-light bg-light" id="navy">
  <a class="navbar-brand" href="#"> <h1 id="text"><i class="fas fa-carrot"> </i>Recipes <i class="fas fa-apple-alt"></i> </h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse col-md-2" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Browse
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
  <form class="form-inline my-2 my-lg-0 col-md-6 "  id="recipeSearch">
      <input name="recipeSearch"
            value={recipeSearch}
             onChange={handleInputChange}
             placeholder="Search For a Recipe"
            className="form-control"/> 

       <button 
            onClick={handleFormSubmit}
            type="success"
            className="btn btn-primary col-md-6"
            id="recBtn"
        > Search
         </button>
    </form>
    </ul>
    
  </div>
</nav>
</div> 
        
<div className ="row">
          <div className="">
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
    
      </div>
    </div>
      </React.Fragment>
    );
  }
  
  export default Recipes;
  

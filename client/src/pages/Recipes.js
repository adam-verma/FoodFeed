import React, { useState } from "react";
import API from '../utils/recipeApi'
import { Container, Row, Col } from "../components/Grid";
import Button from "../components/Button/recipeBtn"
import Input from "../components/Input/recipeInput"
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
            <Col size="md-12">
              <form action="/recipes" method="post">
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <input
                        name="recipeSearch"
                        value={recipeSearch}
                        onChange={handleInputChange}
                        placeholder="Search For a Recipe"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <button
                        onClick={handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <div className="p-3">
                {(recipes.length <= 0) &&
                  <h2>No recipes to display</h2>
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
            </Col>
          </Row>
    
      </div>
    );
  }
  
  export default Recipes;
  

"use client";
import { useState } from "react";
import { Recipe, recipes } from "../../db/recipes";
import RecipeDetails from "./components/selectedMenu";
import SelectionForm from "./components/selectionForm";

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedFilter, setSelectedFilter] = useState({
    effort: "any",
    cost: "any",
    veggie: "any",
  });

  const handleFormSubmit = (selections: {
    effort: string;
    cost: string;
    veggie: string;
  }) => {
    const filteredRecipes = recipes.filter(
      (recipe) =>
        (selections.effort === "any" || recipe.effort === selections.effort) &&
        (selections.cost === "any" || recipe.cost === selections.cost) &&
        (selections.veggie === "any" ||
          recipe.veggie === (selections.veggie === "yes"))
    );
    const randomRecipe =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setSelectedRecipe(randomRecipe);
  };

  const randomizeSelection = () => {
    handleFormSubmit({ effort: "any", cost: "any", veggie: "any" });
  };

  return (
    <div>
      {!selectedRecipe ? (
        <SelectionForm
          onSubmit={handleFormSubmit}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      ) : (
        <RecipeDetails
          recipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
          onRandomize={randomizeSelection}
        />
      )}
    </div>
  );
}

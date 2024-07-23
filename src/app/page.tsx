"use client";
import { useState } from "react";
import { Recipe, recipes } from "../../db/recipes";
import SelectedMenu from "./components/selectedMenu";
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
    const filteredRecipes = recipes.filter((recipe) => {
      const isEffortMatch =
        selections.effort === "any" || recipe.effort === selections.effort;
      const isCostMatch =
        selections.cost === "any" || recipe.cost === selections.cost;
      const isVeggieMatch =
        selections.veggie === "any" ||
        recipe.veggie === (selections.veggie === "yes");

      return isEffortMatch && isCostMatch && isVeggieMatch;
    });
    const randomRecipe =
      filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    setSelectedRecipe(randomRecipe);
  };

  return (
    <div>
      {!selectedRecipe ? (
        <SelectionForm
          handleFormSubmit={handleFormSubmit}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      ) : (
        <SelectedMenu
          recipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
          selectedFilter={selectedFilter}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}

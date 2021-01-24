import React from "react";
import { Route, Switch } from "react-router-dom";
import {HomePage} from './HomePage';
import { RecipesPage } from "./RecipesPage";
import { RecipePage } from "./RecipePage";
import { NewRecipePage } from "./NewRecipePage";

export default function Routes() {
  return (
    <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/recipes' component={RecipesPage} />
        <Route path='/createRecipe' component={NewRecipePage} />
        <Route path='/advertise' component={RecipePage} />
      </Switch>
  );
}
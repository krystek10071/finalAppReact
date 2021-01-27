import React from "react";
import { Route, Switch } from "react-router-dom";
import {HomePage} from './HomePage';
import { AdvertisesPage } from "./AdvertisesPage";
import { AdvertisePage } from "./AdvertisePage";
import { NewAdvertisePage } from "./NewAdvertisePage";

export default function Routes() {
  return (
    <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/advertities' component={AdvertisesPage} />
        <Route path='/createAdvertise' component={NewAdvertisePage} />
        <Route path='/advertise' component={AdvertisePage} />
      </Switch>
  );
}
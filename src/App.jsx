import { useState } from "react";

import Component from "./component/week_1/functionComponent";
import Component1 from "./component/week_1/classComponent";
import Props from "./component/week_1/props";
import List from "./component/week_1/list";
import ListExersise from "./component/week_1/ListExersise";
import Images from "./component/week_1/insertImages";
import img from "./assets/images/1.jpg";
import Click from "./component/week_1/EventHandler/click";
import Copy from "./component/week_1/EventHandler/oncopy";
import Change from "./component/week_1/EventHandler/onchange";

function App() {
  return (
    <>
      {/* <Component />
      <Component1 /> */}
      {/* <Props name="dereje" id="1" age="21" /> */}
      {/* <List /> */}
      {/* <ListExersise /> */}
      {/* <Images /> */}
      {/* <Click /> */}
      {/* <Copy /> */}
      <Change />
    </>
  );
}

export default App;

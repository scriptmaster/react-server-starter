import React from "react";
import { render } from "react-dom";

import App from "./app/index";

let props = { message: "Browser rendered." };

render(<App {...props} />, document.getElementById('root'));

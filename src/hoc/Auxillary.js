import React from "react";

// is a pure techincal one from a Javascript point of view, that you must only return one expression
// aux --> it's basically an empty wrapper, using that special children property which react reserves
// children will always refer to the content between opening and closing tag of your component. 
const aux = props => props.children;
export default aux;
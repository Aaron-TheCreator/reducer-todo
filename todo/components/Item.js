import React from "react";

const Item = (props) => {

   return (
        <div>
            <p>{props.todos.item}</p>
        </div>
   );
};

export default Item;
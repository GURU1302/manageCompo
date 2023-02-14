import React from "react";

function TodoItem(props) {
  // const [isDone, setIs] = useState(false);

  // function cutOnclick() {
  //   // setIs(prevValue => {
  //   //   if(prevValue === true)
  //   //   return false;
  //   //   else
  //   //   return true;
  //   // });
  // }

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li
      // style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default TodoItem;

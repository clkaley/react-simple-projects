import React from "react";
import '../index.css'
function Form() {
  return (
    <form>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
}

export default Form;

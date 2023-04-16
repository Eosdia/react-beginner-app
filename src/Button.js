import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { useEffect, useState } from "react";
function Button({ text }) {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((preve) => preve + 1);
  const onChange = (event) => setKeyword(event.target.value);
  //   console.log("i run all the time");
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' clicked.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'counter || keyword' changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        type="text"
        placeholder="Search here..."
        onChange={onChange}
      />
      <h2>{counter}</h2>
      <button className={styles.btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;

import React from "react";
import Card from "./Card";
import styles from "./OutputList.module.css";

const OutputList = (props) => {
  //   const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div>
      <Card className={styles.users}>
        <ul>
          {props.items.map((item) => {
            return (
              <li key={item.age}>
                {item.name} {item.age}
                {/* <hr /> */}
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
};
export default OutputList;

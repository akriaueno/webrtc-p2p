import React from "react";
import styles from "./SDPInput.module.scss";

interface SDPInputPorps {
  label: string;
  placeholder?: string;
  onclick?: Function;
}

export const SDPInput = (props: SDPInputPorps) => {
  return (
    <div className={styles.container}>
      <label>{props.label}</label>
      <textarea placeholder={props.placeholder} rows={10} cols={30}></textarea>
    </div>
  );
};

import { useState } from "react";

import clsx from "clsx";
import styles from "./link.module.css";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

export default function Link({ page, children }) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={clsx(status, styles.link)}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}

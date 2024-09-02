import clsx from "clsx";
import css from "./FriendItemStyle.module.css";

export default function FriendItemStyle({ variant, children }) {
  const className = clsx(
    css.status,
    variant === "online" ? css.online : css.offline
  );

  return <p className={className}>{children}</p>;
}

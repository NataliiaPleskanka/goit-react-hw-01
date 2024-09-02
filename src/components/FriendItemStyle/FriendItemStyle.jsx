import css from "./FriendItemStyle.module.css";

export default function FriendItemStyle({ variant, children }) {
  const className = `${css.status} ${css[variant]}`;
  return <p className={className}>{children}</p>;
}

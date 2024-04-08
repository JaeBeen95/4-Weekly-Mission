import styles from "./AuthLayout.module.css";
import type { AuthLayoutProps } from "@/types/auth.type";

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default AuthLayout;

import styles from "./AuthLayout.module.css";
import type { AuthLayoutProps } from "@/types/auth.type";

const AuthLayout: React.FC<AuthLayoutProps> = () => {
  return <div className={styles.container}></div>;
};

export default AuthLayout;

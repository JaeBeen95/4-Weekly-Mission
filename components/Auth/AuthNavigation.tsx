import LinkbraryLogo from "../common/LinkbraryLogo";
import { AuthNavigationProps } from "@/types/auth.type";
import { AUTH_CONTENTS } from "../../constants/Auth/AUTH_CONTENTS";
import Link from "next/link";
import style from "./AuthNavigation.module.css";

const AuthNavigation: React.FC<AuthNavigationProps> = ({ pageType }) => {
  const { question, toAnotherSign } = AUTH_CONTENTS[pageType];
  const pageLink = pageType === "signin" ? "/auth/signup" : "/auth/signin";

  return (
    <div className={style.container}>
      <h1>
        <LinkbraryLogo width={210} height={38} />
      </h1>
      <div className={style.question}>
        <p>{question}</p>
        <Link href={pageLink}>
          <a className={style.toAnotherSign}>{toAnotherSign}</a>
        </Link>
      </div>
    </div>
  );
};

export default AuthNavigation;

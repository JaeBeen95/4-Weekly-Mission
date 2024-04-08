import Image from "next/image";
import Link from "next/link";
import linkbrary from "../../public/icons/linkbrary.svg";

const LinkbraryLogo = () => {
  return (
    <Link href="/" passHref>
      <a>
        <Image
          src={linkbrary}
          alt="링크브러리 로고"
          width={133}
          height={24}
          priority
        />
      </a>
    </Link>
  );
};

export default LinkbraryLogo;

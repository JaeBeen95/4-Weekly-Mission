import Image from "next/image";
import Link from "next/link";
import linkbrary from "../../public/icons/linkbrary.svg";

interface LinkbraryLogoProps {
  width?: number;
  height?: number;
}

const LinkbraryLogo = ({ width, height }: LinkbraryLogoProps) => {
  return (
    <Link href="/" passHref>
      <a>
        <Image
          src={linkbrary}
          alt="링크브러리 로고"
          width={width}
          height={height}
          priority
        />
      </a>
    </Link>
  );
};

export default LinkbraryLogo;

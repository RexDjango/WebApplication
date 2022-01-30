import headerStyles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container">
      <div className={headerStyles.wrapper}>
        <div className={headerStyles.logo}>
          <Image src="/bootstrap-logo.svg" width={66} height={60} />
        </div>
        <div className={headerStyles.headerTitle}>
          <h1 className={headerStyles.title}>
            <span>My Portfolio</span>
          </h1>
          <p className={headerStyles.description}>
            Keep up to date with the latest web dev news
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

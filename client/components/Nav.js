import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link href="/">
              <a
                className={
                  router.pathname == "/" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className={
                  router.pathname == "/about" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </Link>
            <Link href="/faqs">
              <a
                className={
                  router.pathname == "/faqs" ? "nav-link active" : "nav-link"
                }
              >
                FAQS
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

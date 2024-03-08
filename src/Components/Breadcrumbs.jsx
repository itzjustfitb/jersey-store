import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  let crumb = location.pathname.split("/").filter((x) => x !== "");
  crumb.unshift("Ana səhifə");
  return (
    <div className="breadcrumps">
      <div className="breadcrumps__container">
        {crumb.map((item, index) => {
          if (item === "Ana səhifə") {
            return (
              <div className="crump" key={item}>
                <Link to="/">
                  <i className="ri-home-4-line"></i>
                  <p>{item}</p>
                </Link>
                <p>/</p>
              </div>
            );
          } else if (index === crumb.length - 1) {
            return (
              <div className="crump" key={item}>
                <p>{item}</p>
              </div>
            );
          } else {
            return (
              <div className="crump" key={item}>
                <Link to={`/${item}`}>{item}</Link>
                <p>/</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Breadcrumbs;

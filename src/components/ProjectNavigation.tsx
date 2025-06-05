import { Breadcrumb } from "react-bootstrap";
import { NavLink, useLocation } from "react-router";

export const ProjectNavigation = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pathnames = pathname.split("/").filter((path) => path !== "");

  return (
    <Breadcrumb>
      {pathnames.map((pathname) => (
        <Breadcrumb.Item>
          <NavLink to={pathname}>{pathname}</NavLink>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

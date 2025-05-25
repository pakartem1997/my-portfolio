
import { Footer } from "./Footer";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";
import { Header } from "@/components/Header/Header";


// interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
//   children?: ReactNode;
// }

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header/>
      <main className="flex-grow-1 py-4">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

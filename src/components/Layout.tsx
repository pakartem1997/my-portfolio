import { Footer } from "./Footer";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";
import { Header } from "@/components/Header/Header";
import { Suspense } from "react";
import { RouteTransitionSpinner } from "./RouteTransitionSpinner";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 py-4">
        <Container>
          <Suspense fallback={<RouteTransitionSpinner/>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

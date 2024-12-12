import { Container } from "../layout/Container";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              School №2
            </a>
          </div>
          <Navigation />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}

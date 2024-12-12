import { Button } from '../ui/Button';
import { Container } from '../layout/Container';

export function Hero() {
  return (
    <div className="relative bg-blue-600 text-white">
      <Container className="py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to School №2
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Empowering minds, inspiring futures
          </p>
          <div className="flex justify-center space-x-4">
            <Button href="/admissions" variant="primary">
              Apply Now
            </Button>
            <Button href="/tour" variant="secondary">
              Take a Tour
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
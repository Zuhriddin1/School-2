import { Container } from '../components/layout/Container';

export function AcademicsPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-bold mb-8">Academics</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Our academic programs are designed to challenge and inspire students, 
          preparing them for success in higher education and beyond.
        </p>
        {/* Add more content as needed */}
      </div>
    </Container>
  );
}
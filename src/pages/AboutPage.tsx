import { Container } from '../components/layout/Container';

export function AboutPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-bold mb-8">About School №2</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          School №2 has been a cornerstone of academic excellence since its founding. 
          Our mission is to provide students with a comprehensive education that prepares 
          them for success in their future endeavors.
        </p>
        {/* Add more content as needed */}
      </div>
    </Container>
  );
}
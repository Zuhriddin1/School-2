import { Container } from '../components/layout/Container';

export function NewsPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-bold mb-8">School News</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Stay up to date with the latest news and events from School №2.
        </p>
        {/* Add more content as needed */}
      </div>
    </Container>
  );
}
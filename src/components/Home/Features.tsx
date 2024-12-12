import { Container } from '../layout/Container';
import { FEATURES } from '../../constants/features';

export function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Why Choose School №2?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.name}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
import { Container } from '../components/layout/Container';
import { TeacherCard } from '../components/Teachers/TeacherCard';
import { TEACHERS } from '../constants/teachers';

export function TeachersPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-bold mb-8">Our Teachers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEACHERS.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </Container>
  );
}
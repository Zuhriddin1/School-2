import { Teacher } from '../../types/teacher';

interface TeacherCardProps {
  teacher: Teacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={teacher.image}
        alt={teacher.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
        <p className="text-gray-600 mb-4">{teacher.position}</p>
        <div className="space-y-2">
          <h4 className="font-medium">Education:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {teacher.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {teacher.diplomas.map((diploma, index) => (
            <img
              key={index}
              src={diploma}
              alt={`${teacher.name}'s diploma ${index + 1}`}
              className="rounded-md cursor-pointer hover:opacity-75 transition-opacity"
              onClick={() => window.open(diploma, '_blank')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
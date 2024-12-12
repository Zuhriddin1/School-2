import { Video } from '../../types/video';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={video.url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
        <p className="text-gray-600 mb-2">{video.description}</p>
        <p className="text-sm text-gray-500">
          {new Date(video.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
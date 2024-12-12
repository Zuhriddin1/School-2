import { Container } from '../components/layout/Container';
import { VideoCard } from '../components/Videos/VideoCard';
import { VIDEOS } from '../constants/videos';

export function VideosPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-bold mb-8">School Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {VIDEOS.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </Container>
  );
}
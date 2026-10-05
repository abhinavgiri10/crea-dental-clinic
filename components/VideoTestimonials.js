const VIDEOS = [
  { id: 'wr2MPsU97Ek', name: 'Geetha', caption: 'Patient Testimonial', stars: true },
  { id: '6_jQMr5QY98', name: 'Shyam', caption: 'Patient Testimonial', stars: true },
  { id: '4QWQhJ1TEso', name: 'Sanjana', caption: 'Patient Testimonial', stars: true },
  { id: 'xMg_ju1NwHI', name: 'Kids Treatment', caption: 'Gentle, comfortable care for children', stars: false },
];

export default function VideoTestimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient Video Testimonials
          </h2>
          <p className="text-gray-600 text-lg">Hear directly from our satisfied patients</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VIDEOS.map((video, index) => (
            <div
              key={video.id}
              className="w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <iframe
     src={
    index === 0
      ? `https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&playsinline=1&rel=0`
      : `https://www.youtube.com/embed/${video.id}?rel=0`
  }
  title={`${video.name} - Crea Dental Clinic`}
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="w-full aspect-[9/16]"
></iframe>
              <div className="p-4">
                {video.stars && <div className="text-lg mb-2">⭐⭐⭐⭐⭐</div>}
                <p className="font-semibold text-gray-900">{video.name}</p>
                <p className="text-sm text-gray-600">{video.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
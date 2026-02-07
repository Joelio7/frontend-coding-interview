import { fetchPhotos } from "@/lib/pexels";
import { Logo } from "@/components/ui";
import { PhotoList } from "@/components/photos";

export default async function PhotosPage() {
  const data = await fetchPhotos({ query: "nature", perPage: 10 });

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-6">
          <Logo size="md" />
          <h1 className="mt-6 text-heading-1">All photos</h1>
        </header>

        <section className="pb-8 mt-4">
          <PhotoList photos={data.photos} />
        </section>
      </div>
    </main>
  );
}

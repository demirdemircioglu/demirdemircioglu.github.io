import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-32">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="mb-8">
          <Image
            src="/profile.jpg"
            alt="Profile picture - lotus flower"
            width={96}
            height={96}
            className="rounded-full"
            priority
          />
        </div>
        <h1 className="text-sm text-neutral-600 mb-6">
          demir demircioglu
        </h1>
        <p className="text-neutral-600 text-lg leading-relaxed">
          16 y/o developer from Turkey 🇹🇷 — currently building kurtul., an addiction recovery companion app for the turkish market. passionate about development, creating solutions and entrepreneurship.
        </p>
      </section>

      {/* Links Section */}
      <section className="space-y-2 text-sm">
        <Link 
          href="https://x.com/1demircioglu"
          target="_blank"
          className="block text-neutral-600 hover:text-black transition-colors"
        >
          x/twitter ↗
        </Link>
        <Link 
          href="mailto:dmrdemircioglu@icloud.com"
          className="block text-neutral-600 hover:text-black transition-colors"
        >
          email ↗
        </Link>
      </section>

      {/* Projects Section */}
      <section className="mt-24">
        <h2 className="text-sm text-neutral-600 mb-6">projects</h2>
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-normal mb-6">kurtul.</h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              an ios app helping turkish users in their journey of overcoming their addictions. currently under review for the app store.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-normal mb-6">skills</h2>
        <div className="space-y-6">
          <div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              ios development, fullstack web development, java and python
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-normal mb-6">about</h2>
        <p className="text-neutral-600 text-sm leading-relaxed">
          high school junior focused on building technology products. started early with programming and entrepreneurship, now working on solutions that matter.
        </p>
      </section>
    </div>
  );
}

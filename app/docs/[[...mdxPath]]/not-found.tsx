import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F3F6F8] text-[#0D2340]">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-serif text-[#0D2340] mb-4">404</h1>
        <p className="text-lg text-[#536477] mb-8">
          Documentation page not found.
        </p>
        <Link
          href="/docs"
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[#E2E8F0]/40 bg-white px-6 py-2 font-semibold text-[#0D2340] transition-colors hover:bg-[#F3F6F8]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D95716]"
        >
          ← Back to docs
        </Link>
      </div>
    </main>
  );
}

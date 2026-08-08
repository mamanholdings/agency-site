export default function Home() {
  return (
    <main>
      <section className="status-card" aria-labelledby="page-title">
        <p className="eyebrow">Agency website</p>
        <h1 id="page-title">A better web presence is taking shape.</h1>
        <p className="summary">
          This is the verified technical foundation for the agency website.
          Branding, services, portfolio work, and contact details will be added
          after the business direction is confirmed.
        </p>
        <div className="status" role="status">
          <span aria-hidden="true" />
          Next.js foundation ready
        </div>
      </section>
    </main>
  );
}

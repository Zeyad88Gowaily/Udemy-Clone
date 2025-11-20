import { companies } from "../data/data";

export default function TrustedBy() {
  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <h2 className="trusted-title">
          Trusted by over 17,000 companies and millions of learners worldwide
        </h2>

        <div className="trusted-logos">
          {companies.map((company) => (
            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="trusted-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
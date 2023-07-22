import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <p>
        This web application derives data from NASA's Mars Photo API maintained
        by chrisccerami.
      </p>
      <p>
        Explore the{" "}
        <a href="https://github.com/chrisccerami/mars-photo-api">
          official repository
        </a>
        .
      </p>
    </div>
  );
}

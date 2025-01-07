import Phone from "./Phone";

export default function Contact() {
  return (
    <div>
      <Phone />
      <p>
        Email:{" "}
        <a
          className="text-blue-500"
          href="mailto:tridungbk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          tridungbk@gmail.com
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          className="text-blue-500"
          href="https://github.com/tridungbk2010"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/tridungbk2010
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/chris-ho-75202b39"
          target="_blank"
          className="text-blue-500"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/chris-ho-75202b39
        </a>
      </p>
    </div>
  );
}

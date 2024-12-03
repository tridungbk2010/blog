function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const links = [
    { name: "@chrisho", url: "https://x.com/tridungbk2010" },
    { name: "youtube", url: "" },
    { name: "linkedin", url: "linkedin.com/in/chris-ho-75202b39" },
    { name: "github", url: "https://github.com/tridungbk2010" },
  ];

  return (
    <footer className="py-4 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            <ArrowIcon /> <p className="ml-2 h-7">{link.name}</p>
          </a>
        ))}
      </div>
    </footer>
  );
}

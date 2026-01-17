const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-6">
      <p className="mb-3">
        &copy; {new Date().getFullYear()} Nontuthuzelo Mtolo. All rights
        reserved.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="https://www.linkedin.com/in/nontuthuzelo-mtolo-877b34237"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:text-blue-600"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/NontuthuzeloM24"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:text-gray-800"
        >
          GitHub
        </a>
        <a
          href="https://wa.me/27751904180"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:text-green-600"
        >
          WhatsApp
        </a>
        <div>
          <a href="#Header">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

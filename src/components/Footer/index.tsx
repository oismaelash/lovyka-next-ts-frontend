export default function Footer() {
  return (
    <footer className="bg-green-600 border-gray-200 " aria-label="Footer">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-700 sm:text-center ">
          © 2023{" "}
          <a
            href="https://www.ismaelnascimento.com/"
            className="hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            @oismaelash™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700  sm:mt-0">

          <li>
            <a href="https://www.linkedin.com/in/oismaelash/" target="_blank" className="hover:underline" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-blue-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Football Booking
            </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-300">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Page
              </a>
            </li>
            <li>
              <a href="/connect " className="hover:underline me-4 md:me-6">
                Contact
              </a>
            </li>
            <li>
              <a href="/booking" className="hover:underline">
                Buy Ticket
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-300">
          © 2023{" "}
          <a className="hover:underline">
            Football booking™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-gray-900 text-white p-5 sticky w-full top-0 z-50">
      <div className="flex justify-between items-center w-1/2">
        <a href="/" className="hover:text-purple-700 font-lato">Home</a>
        <a href="/services" className="hover:text-purple-700 font-lato">Services</a>
        <a href="/faq" className="hover:text-purple-700 font-lato">FAQ</a>
        <a href="/contact" className="hover:text-purple-700 font-lato">About</a>
        <button><a href="/book" className="hover:text-purple-700 font-lato p-3 bg-purple-500 rounded-md">Book</a></button>
      </div>
    </nav>
  );
}
 
export default Navbar;
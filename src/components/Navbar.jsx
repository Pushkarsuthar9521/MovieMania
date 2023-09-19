import Link from 'next/link';

const Navbar = () => {
  return (
    <>
    <nav className="bg-gray-900  p-4 w-full ">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="text-white text-2xl font-bold">
        <Link href="/">MoiveMania</Link>
      </div>
      <ul className="flex flex-col md:flex-row items-center md:space-x-10 space-y-2 md:space-y-0 text-2xl">
        <li>
          <Link href="/" className="hover:text-yellow-500 ">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-yellow-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/career" className="hover:text-yellow-500">
            Career
          </Link>
        </li>
        <li>
          <Link href="/profile" className="hover:text-yellow-500">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/login" as="/login">
            <p className="text-black bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-200 ">
              Login 
            </p>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="h-20"></div>
    </>
  );
};

export default Navbar;

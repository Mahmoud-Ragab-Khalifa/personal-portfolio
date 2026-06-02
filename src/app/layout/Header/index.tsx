import Logo from "../components/Logo";

const Header = () => {
  return (
    <header className="fixed inset-x-0 inset-s-0 py-5">
      <nav className="container flex items-center justify-between">
        {/* Personal Logo */}
        <Logo />
      </nav>
    </header>
  );
};

export default Header;

function Header(){
  return(
    <header>
        <h3>Company</h3>
        <input type="checkbox" id="toggle-menu" />
        <label htmlFor="toggle-menu" className="toggle-icon">
          ☰
        </label>
        <nav id="navbar">
          <span>
            <a href="#">Home</a>
          </span>
          <span>
            <a href="#pricing">Pricing</a>
          </span>
          <span>
            <a href="#">Order</a>
          </span>
          <span>
            <a href="#">Contact Us</a>
          </span>
        </nav>
    </header>
    );
}
export default Header;
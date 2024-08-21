const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>TKE Duluth</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/Members">Members</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

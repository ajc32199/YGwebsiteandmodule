const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>TKE Module</h1>
      <h2>Upsilon Gamma</h2>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          {" "}
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

const NavLinks = ({ navLinks }) => {
  return (
    <ul className="md:flex hidden gap-3.5">
      {navLinks.map((item) => {
        const { name, id, route } = item;

        return (
          <a
            className="text-white text-md"
            key={id}
            onClick={() => {
              const element = document.getElementById(route);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <li>{name}</li>
          </a>
        );
      })}
    </ul>
  );
};

export default NavLinks;

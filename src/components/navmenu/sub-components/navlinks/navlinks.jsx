import { HashLink } from "react-router-hash-link";

const NavLinks = ({ navLinks }) => {
  return (
    <ul className="md:flex hidden gap-3.5">
      {navLinks.map((item, index) => {
        const { name, route } = item;

        return (
          <span className="text-white text-md cursor-pointer" key={index}>
            <HashLink smooth to={`/#${route}`}>
              <li className="cursor-pointer">{name}</li>
            </HashLink>
          </span>
        );
      })}
    </ul>
  );
};

export default NavLinks;

import dayjs, { Dayjs } from "dayjs";
import { navIcons, navLinks } from "../constants";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img
          className="size-8 invert"
          src="/images/alien-logo.svg"
          alt="logo"
        />

        <p className="font-bold text-white">AlienO!d OS</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              className="font-orbitron invert"
              onClick={() => openWindow(type)}
            >
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                className="icon-hover invert "
                alt={`icon-${id}`}
              />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;

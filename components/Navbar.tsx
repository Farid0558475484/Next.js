import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./../styles/Navbar.module.scss";
import { FC } from "react";
import { NextRouter } from "next/router";

type Navigation = {
  id: number;
  title: string;
  path: string;
};

const navigation: Navigation[] = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];
const Navbar: FC = () => {
  // const { pathname } = useRouter();
  const { pathname }: NextRouter = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Farid Hacizade</div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }: Navigation) => (
          <Link
            key={id}
            href={path}
            className={pathname === path ? styles.active : undefined}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

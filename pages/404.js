import { useRouter } from "next/router";
import { useEffect } from "react";
import s from "../styles/404.module.scss";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className={s.wrapper}>
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

export default Error;

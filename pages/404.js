import Link from "next/dist/client/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const rounter = useRouter();
  useEffect(() => {
    setTimeout(() => {
        rounter.push('/')
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h1>That page cannot be found!</h1>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;

import nookies from "nookies";
import { useEffect } from "react";
import axios from "axios";
export default function Home(props: any) {
  const list: any[] = [];
  useEffect(() => {
    let token = nookies.get(null, {})?.token;
    if (!token) {
      axios
        .post("http://20.244.56.144/train/auth", {
          companyName: "Train Repo",
          clientID: "7d77360b-39e2-48e5-9bdd-3e1013508b6a",
          clientSecret: "SqjRWQeCrJPJuObV",
          ownerName: "Abhas",
          ownerEmail: "aa2747@srmist.edu.in",
          rollNo: "RA2011026020047"
        })
        .then((res) => {
          nookies.set(null, "token", res?.data.access_token, { maxAge: res?.data.expires_in });
          token = res?.data.access_token;
        });
    }
  }, []);
  return <main></main>;
}

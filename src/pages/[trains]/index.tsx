import axios from "axios";

export default function trains() {
  const info = axios.get("http://20.244.56.144:80/train/trains", {
    headers: {
      Authorization: "Bearer" + process.env.ACCESSTOKEN
    }
  });
}

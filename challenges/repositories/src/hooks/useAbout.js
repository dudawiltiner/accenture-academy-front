import { useEffect, useState } from "react";
import gitHubAPIGeneral from "../service/gitHubAPI";

export default function useAbout() {
  const [about, setAbout] = useState({});

  useEffect(() => {
    init();
  }, []);
  

  async function init() {
    const res = await gitHubAPIGeneral("")
    const newAbout = {
      name: res.name,
      fullName: res.login,
      image: res.avatar_url,
      portfolio: res.blog,
      phrase: res.bio,
      gitHub: res.html_url,
      publicRepos: res.public_repos,
      followers: res.followers
    }

    setAbout(newAbout);
  }

  return { about }
}
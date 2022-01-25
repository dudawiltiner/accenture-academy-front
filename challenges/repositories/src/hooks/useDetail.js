import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { gitHubAPIRepository } from "../service/gitHubAPI";

export default function useDetail() {
  const { name } = useParams();
  const [repo, setRepo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);


  async function init() {
    const res = await gitHubAPIRepository(name);
    const newRepo = {
      name: res.full_name,
      acess: res.html_url,
      visib: res.visibility,
      language: res.language,
      size: res.size,
      clone: res.clone_url,
      image: res.owner.avatar_url
    }

    setRepo(newRepo)
  }

  return { repo, navigate }
}
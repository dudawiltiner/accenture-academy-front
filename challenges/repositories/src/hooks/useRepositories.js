import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import gitHubAPIGeneral from "../service/gitHubAPI";

export default function useRepositories() {
  const [listRepo, setListRepo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const res = await gitHubAPIGeneral("/repos");
    const newList = res.map((item) => ({name: item.name, url: item.html_url}));
    setListRepo([...newList]);
  }

  return { listRepo, navigate }
}
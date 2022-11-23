import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const PokeDetailPage = () => {
  const router = useRouter();
  // パスパラメータから値を取得
  const pokeID = router.query.id;
  const [pokeData, setPokeData] = useState(null);
  const POKEMON_DETAIL_URL = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`;

  useEffect(() => {
    axios.get(POKEMON_DETAIL_URL)
      .then(res => { 
        setPokeData(res.data);
      }).catch(err => {
        console.log(err);
      }
      );
  },[pokeID]);

  if (!pokeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img
              className="rounded-t-lg"
              src={pokeData.sprites.front_default}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                名前：{pokeData.name}
              </h5>
            </a>
            <ul className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              <li>重さ：{pokeData.weight}</li>
                <li>タイプ：{pokeData.types.map((type) => type.type.name)}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
export async function getServerSideProps(context) {
  const pokeID = context.params.id;
  const POKEMON_DETAIL_URL = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`;
  const res = await fetch(POKEMON_DETAIL_URL);
  // 404
    if (res.status === 404) {
        return {
            notFound: true
          };
    }
  const pokeData = await res.json();
  return { props: { pokeData } };
}*/

export default PokeDetailPage;

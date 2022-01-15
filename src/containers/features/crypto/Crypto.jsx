import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TableCoins from "./TableCoins";
import "./crypto.css";

function Crypto() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className="container ">
       <button onClick={handleClick}>
          <ArrowBackIosIcon />
        </button>
      <div className="row">
        <input
          type="text"
          placeholder="Busca tu Crypto"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
       
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default Crypto;

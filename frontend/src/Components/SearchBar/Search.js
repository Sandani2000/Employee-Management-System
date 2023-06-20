import "./Search.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          setSearchResult([]);
          return;
        }
        const respond = await axios.get(
          "http://localhost::3000/api/v1/employees",
          {
            params: { key: key, limit: 5 },
          }
        );
        setSearchResult(res.data.data);
        console.log(respond);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [key]);

  return (
    <form>
      <div className="search">
        <input
          type="search"
          placeholder="Search..."
          value={key}
          name="searchQuery"
          onChange={(e) => setKey(e.target.value)}
        />
        <button>
          <SearchIcon className="searchIcon" />
        </button>
      </div>
      {searchResult && searchResult.length > 0 && (
        <div className="search-result">
          {searchResult.map((book) => (
            // <div className="">

            // </div>
            <div className="book-info">
              <p className="name">{book.name}</p>
              <p>{book.author.name}</p>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}

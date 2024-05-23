import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  0;
  return <span>User searched for {city}</span>;
};

export default SearchPage;

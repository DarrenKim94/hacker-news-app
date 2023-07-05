import MainNews from "./components/MainNews";
import PopularNews from "./components/PopularNews";
import SearchBar from "./components/SearchBar";

function App() {
    return(
        <div>
            <SearchBar />
            <MainNews />
            <PopularNews />
        </div>
    )
}

export default App;
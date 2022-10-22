import './App.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCats} from "./store/catsReducer";
import CatsList from "./components/CatsList/CatsList";
import Header from "./components/Header/Header";
import Preloader from "./components/Preloader/Preloader";

const App = () => {

    const page = useSelector(state => state.catsPage.page)
    const loading = useSelector(state => state.catsPage.loading)
    const currentSort = useSelector(state => state.catsPage.currentSort)
    const directionSort = useSelector(state => state.catsPage.directionSort)

    const [fetching, setFetching] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        if (fetching) {
            dispatch(getCats(page, currentSort, directionSort))
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)
        return function () {
            document.removeEventListener("scroll", scrollHandler)
        }
    }, [fetching])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
            && page !== null) {
            setFetching(true)
        }
    }

    if (loading) {
        return <Preloader/>
    }

    return (
        <div className="App">
            <Header/>
            <CatsList/>
        </div>

    );
}

export default App;

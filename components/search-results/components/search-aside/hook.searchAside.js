import { useSelector, useDispatch } from 'react-redux';
import { setActiveSearchCategory } from '../../../../modules/reducer.searchCategory';

const Hook = () => {

    const dispatch = useDispatch();
    const { movies, series, active } = useSelector((state) => state.searchCategory)

    let  searchResultCategories = [
        {
            name : 'movies',
            qty : movies
        },
        {
            name : 'series',
            qty : series
        }
    ]


    const handleActiveCategory = (cate) => {
        dispatch(setActiveSearchCategory(cate))
    }


    return {
        searchResultCategories,
        active,

        /* actions */
        handleActiveCategory
    }
}

export default Hook;

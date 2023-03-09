import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Hook = () => {

    const router = useRouter();

    const { active } = useSelector((state) => state.searchCategory)

    const pageNo = router.query["pageNo"];
    const searchQuery = router.query["searchQuery"];

    return {
        searchQuery,
        pageNo,
        active
    }
}

export default Hook;

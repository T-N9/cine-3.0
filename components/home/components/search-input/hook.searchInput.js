import { useState } from 'react';
import { useRouter } from 'next/router';

const Hook = () => {
    const router = useRouter();

    const [ formValue , setFormValue ] = useState('');

    const enterHandler = (e) => {
        e.preventDefault();
        let trimedValue = formValue.trim();

        if(trimedValue.length !== 0) {
            router.push(`/search/${trimedValue}/1`);
        }
    }

    const changeHandler = (e) => {
        let value = e.target.value;

        setFormValue(value);
    }

    return {
        formValue,

        /* Actions */
        setFormValue,
        enterHandler,
        changeHandler
    }
}

export default Hook;

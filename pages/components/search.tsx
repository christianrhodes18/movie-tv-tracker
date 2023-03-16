import styles from '../../styles/Search.module.css'
import searchIcon from '../../public/icons/search.svg'
import Image from 'next/image'
import { SetStateAction, useState } from 'react';

export default function Search() {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
    
    return (
        <div className={styles.search}>
            <Image
                src={searchIcon}
                alt='Search'
                width={23}
                height={23}
            />
                {/* <input
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                    value={searchInput} 
                /> */}
        </div>
    )
}
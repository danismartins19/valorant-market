import styles from './index.module.css';

import { WeaponType } from '../../types/WeaponType';


export const Rifle = ({name, price, url, onHover, ID}: WeaponType) =>{

    const handleHover = ()=>{
        onHover(ID)
    }


    return(
        <div className={styles.rifle} onMouseEnter={handleHover}>
            <img src={url} alt="imagem" className={styles.img}/>
            <p className={styles.price}>{price}</p>
            <p className={styles.name}>{name}</p>
        </div>
    )
}
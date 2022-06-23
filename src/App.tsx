import styles from "./App.module.css";
import background from "./assets/background.png";
import { Pistol } from "./components/Pistol";
import pistols from './lib/pistols.json';
import weapons from './lib/weapons.json'
import { useState, useEffect } from "react";

const App = () => {

  const [currentWeapon, setCurrentWeapon] = useState<string>("29A0CFAB-485B-F5D5-779A-B59F85E204A8");

  useEffect(()=>{
    console.log(weapons.find(item => item.ID === currentWeapon))
  },[currentWeapon])


  const hoverWeapon = (ID: string) =>{
    setCurrentWeapon(ID)
  }


  return (
    <div className={styles.body}>
      <img src={background} alt="Imagem de fundo" className={styles.imgBack} />

      <div className={styles.market}>
        <div className={styles.marketArea}>


          <div className={styles.pistolColumn}>
            <p className={styles.banner}>PISTOLA</p>
            {pistols.map((pistol)=>(
              <Pistol name={pistol.Name} url={pistol.weapon_asset.url} price={pistol.Stats.CredCost} key={pistol.ID} ID={pistol.ID} onHover={hoverWeapon} />
            ))}
          </div>

          <div className={styles.column}>


            <div className={styles.smgColumn}>
              <p className={styles.banner}>SMGs</p>
            </div>

            <div className={styles.shotgunColumn}>
              <p className={styles.banner}>SHOTGUNS</p>
            </div>


          </div>

          <div className={styles.rifleColumn}>
            <p className={styles.banner}>RIFLES</p>
          </div>

          <div className={styles.column}>


            <div className={styles.sniperColumn}>
              <p className={styles.banner}>SNIPERS</p>
            </div>

            <div className={styles.machineColumn}>
              <p className={styles.banner}>MACHINE GUNS</p>
            </div>


          </div>
        </div>

      </div>

    </div>
  )
}

export default App

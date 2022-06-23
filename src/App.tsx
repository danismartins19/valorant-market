import styles from "./App.module.css";
import background from "./assets/background.png";
import { Pistol } from "./components/Pistol";
import weapons from './lib/weapons.json';
import pistols from './lib/pistols.json';
import smgs from './lib/smgs.json';
import shotguns from './lib/shotguns.json';
import rifles from './lib/rifles.json';
import snipers from './lib/snipers.json';
import machines from './lib/machines.json';
import { useState, useEffect } from "react";
import { Smg } from "./components/Smg";
import { Shotgun } from "./components/Shotgun";
import { Sniper } from "./components/Sniper";
import { Machine } from "./components/Machine";
import { Rifle } from "./components/Rifle";

const App = () => {

  const [currentWeapon, setCurrentWeapon] = useState<string>("29A0CFAB-485B-F5D5-779A-B59F85E204A8");




  const updateBanner = () => {
    let weaponBanner = weapons.find(item => item.ID === currentWeapon);
    

  }

  useEffect(()=>{
    updateBanner
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
            {pistols.map((weapon)=>(
              <Pistol name={weapon.Name} url={weapon.weapon_asset.url} price={weapon.Stats.CredCost} key={weapon.ID} ID={weapon.ID} onHover={hoverWeapon} />
            ))}
          </div>

          <div className={styles.column}>


            <div className={styles.smgColumn}>
              <p className={styles.banner}>SMGs</p>
              {smgs.map((weapon)=>(
                <Smg name={weapon.Name} url={weapon.weapon_asset.url} price={weapon.Stats.CredCost} key={weapon.ID} ID={weapon.ID} onHover={hoverWeapon}  />
              ))}
            </div>

            <div className={styles.shotgunColumn}>
              <p className={styles.banner}>SHOTGUNS</p>
              {shotguns.map((weapon)=>(
                 <Shotgun name={weapon.Name} url={weapon.weapon_asset.url} price={weapon.Stats.CredCost} key={weapon.ID} ID={weapon.ID} onHover={hoverWeapon}  />
              ))}
            </div>


          </div>

          <div className={styles.rifleColumn}>
            <p className={styles.banner}>RIFLES</p>
            {rifles.map((weapon)=>(
              <Rifle name={weapon.Name} url={weapon.weapon_asset.url} price={weapon.Stats.CredCost} key={weapon.ID} ID={weapon.ID} onHover={hoverWeapon} />
            ))}
          </div>

          <div className={styles.column}>


            <div className={styles.sniperColumn}>
              <p className={styles.banner}>SNIPERS</p>
              {snipers.map((weapon)=>(
                <Sniper name={weapon.Name} url={weapon.weapon_asset.url} price={weapon.Stats.CredCost} key={weapon.ID} ID={weapon.ID} onHover={hoverWeapon}  />
              ))}

            </div>

            <div className={styles.machineColumn}>
              <p className={styles.banner}>MACHINE GUNS</p>
              {machines.map((weapon)=>(
                <Machine name={weapon.Name} url={weapon.weapon_asset.url} price={weapon.Stats.CredCost} key={weapon.ID} ID={weapon.ID} onHover={hoverWeapon} />
              ))}

            </div>


          </div>

          

        </div>

      </div>

    </div>
  )
}

export default App

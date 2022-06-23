import styles from "./App.module.css";
import background from "./assets/background.png";

const App = () => {


  return (
    <div className={styles.body}>
      <img src={background} alt="Imagem de fundo" className={styles.imgBack} />

      <div className={styles.market}>
        <div className={styles.marketArea}>


          <div className={styles.pistolColumn}>
            <p className={styles.banner}>PISTOLA</p>
            
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

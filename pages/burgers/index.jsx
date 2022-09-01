import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Burgers.module.css';
import { items} from '../../db.json'

const burgers = items



const Burgers = () => {
  return (
    <div>
      <h1>Наши Бургеры</h1>
      {burgers.map(burger => (
        <div key={burger.id}>
          <a className={styles.burgerCard}>
            <div className={styles.imageContainer}>
              <Image 
                src={`${burger.image}`} 
                alt={`${burger.name}`} 
                width="100%" 
                height="100%" 
                layout="responsive" 
                objectFit="cover"
              />
            </div>
            <div>
              <h3>{ burger.name }</h3>
              <p>{ burger.desc }</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
 
export default Burgers; 
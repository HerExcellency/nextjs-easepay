import styles from '../styles/banner.module.css'
import Image from 'next/image'
import Lightbox from '../public/Lightbox.png'

const Banner = () => {
    return (
        <div className={styles.banner}> 
            <h1 className={styles.title}>Open Payments at the Speed of Light</h1>
            <p className={styles.subtitle}>Unlock Groundbreaking New Payment Experiences</p>
            <div className={styles.inputfield}> 
                <input placeholder='Enter Your Email' /><button>Join wait list</button>
            </div>
            <Image 
            src={Lightbox} 
            width={1000}
            height={800}
            alt="placeholder light" 
            layout="responsive"/>
        </div>
    )
}
export default Banner;
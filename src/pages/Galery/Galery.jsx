import React, {useState} from "react"
import styles from "./Galery.module.css"
import Navbar from "../../components/NavBar/NavBar"
import { galeryImages } from "../../galery"
import Footer from "../../components/Footer/Footer"

const Galery = () => {

    return (
        <div className={styles.galery}>
            <Navbar />
            <div className={styles.galeryContainer}>
                <div className={styles.gallery}>
                    {galeryImages.map(image => (
                        <img key={image.id} src={image.src} alt={image.alt}/>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Galery

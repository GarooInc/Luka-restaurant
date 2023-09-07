import React, {useState} from "react"
import styles from "./ContactPage.module.css"
import Navbar from "../../components/NavBar/NavBar"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"

const ContactPage = () => {

    return (
        <div className={styles.contact}>
            <Navbar />
            <div className={styles.contactContainer}>
                <div className={styles.contact}>
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage






import React, {useState} from "react"
import styles from "./ContactRoomPage.module.css"
import Navbar from "../../components/NavBar/NavBar"
import ContactRooms from "../../components/ContactRooms/ContactRooms"
import Footer from "../../components/Footer/Footer"

const ContactRoomPage = () => {

    return (
        <div className={styles.contact}>
            <Navbar />
            <div className={styles.contactContainer}>
                <div className={styles.imagescontainer}>
                    <img src='/images/contactrooms.jpg' alt='contactrooms' className={styles.contact__image} />
                    <img src='/images/contactrooms2.jpg' alt='contactrooms2' className={styles.contact__image} />
                </div>
                <div className={styles.contact}>
                    <ContactRooms />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactRoomPage






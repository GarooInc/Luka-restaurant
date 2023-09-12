import React from "react"
import PropTypes from "prop-types"
import styles from "./Footer.module.css"

const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.footercontainer}>
                <div className={styles.footercontainerleft}>
                    <span className={styles.footercontainertitle}>Horarios</span>
                    <span className={styles.footercontainertext}>Lunes: 11:30 am a 4:00 pm</span>
                    <span className={styles.footercontainertext}>Martes a Viernes: 11:30 am a 10:00 pm</span>
                    <span className={styles.footercontainertext}>Sábado: 9:00 am a 10:00 pm</span>
                    <span className={styles.footercontainertext}>Domingo: 9:00 am a 4:00 pm</span>
                </div>
                <div className={styles.footercontainerright}>
                    <div className={styles.footercontainerrighttop}>
                        <span className={styles.footercontainertitle}>Ubicación</span>
                        <span className={styles.footercontainertext}>9na avenida 19-61 zona 10 Edificio Zenit. Segundo Nivel</span>
                        <button className={styles.footercontainerbutton} type="button" onClick={ () => window.open("https://goo.gl/maps/w4cy2Aeem5NWnNFy9", "_blank")}>Cómo llegar</button>
                    </div>
                    <div className={styles.footercontainerrightbottom}>
                        <span className={styles.footercontainertitle}>Contacto</span>
                        <div className={styles.footercontainericons}>
                            <a href="https://www.facebook.com/lukafinedining/" className="footer-social">
                                <img src="/images/fb.svg" alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/luka.gt/" className="footer-social">
                                <img src="/images/ig.svg" alt="Instagram" />
                            </a>
                            <a href="mailto:info@boquiteo.com" className="footer-social">
                                <img src="/images/mail.svg" alt="email" />
                            </a>
                        </div>
                        <span className={styles.footercontainertext}><a href="callto:+502 2279 0967">Tel: +502 2279 0967</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

Footer.propTypes = {
}

export default Footer 
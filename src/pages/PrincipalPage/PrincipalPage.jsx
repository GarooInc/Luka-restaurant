
import React, {useState} from "react"
import styles from "./PrincipalPage.module.css"
import Title from "../../components/Title/Title"
import Footer from "../../components/Footer/Footer"

const PrincipalPage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const textoArray = [ 
        "La historia del Restaurante La Pista es un testimonio de emprendimiento y pasión por la gastronomía y los negocios. Lo que comenzó como un club de carros de control remoto en 2007, se transformó en un restaurante de renombre en Guatemala.",   

        "Los primos Miguel y Rodrigo construyeron una pista de carritos off-road y una encantadora cabaña de madera para darle un toque especial al lugar. Sin embargo, en 2008, el Chef Rick, hermano de Rodrigo, introdujo cuatro bocatas que se volvieron sumamente populares, atrayendo a clientes que no tenían relación con los carritos de control remoto.",

        "En 2009, decidieron convertir La Pista en un restaurante y con apoyo de sus padres y la creatividad, experiencia y liderazgo del Chef Rick, transformaron el lugar.",

        "El restaurante abrió oficialmente sus puertas en septiembre de 2009,  conservando su nombre original, LA PISTA.",

        "Desde entonces, La Pista ha sido un éxito constante, con una regla fundamental: la satisfacción del cliente es lo más importante. Con el talento culinario y el encanto rústico del lugar, han logrado mantener una afluencia constante de clientes durante casi 14 años.",

        "La historia de La Pista es un ejemplo inspirador de cómo la creatividad, el respaldo familiar y la pasión por la cocina pueden crear un éxito duradero. Su enfoque en asegurarse de que los clientes regresen ha sido la clave de su triunfo, destacando la calidad culinaria y la originalidad de sus platos.",
    ]

    const [visibleParagraphs, setVisibleParagraphs] = useState(1)


    return (
        <div className={styles.principalPage}>
            <section id='/' className={styles.home}>
                <div className={styles.home__content}>
                    <img src='/images/logo.png' alt='logo' className={styles.home__content__logo} />
                    <nav className={styles.home__content__nav}>
                        <ul>
                            <li><a href='http://boquiteo.com/'>Tienda</a></li>
                            <li onClick={() => setIsMenuOpen(!isMenuOpen)}><a>Menú +</a></li>
                            <ul className={`${styles.home__content__nav__submenu} ${isMenuOpen ? styles.open : ""}`}>
                                <li><a href="https://cdn.shopify.com/s/files/1/0268/3093/0000/files/Menu_Breakfast_-_LUKA.pdf?v=1694099039">Desayunos</a></li>
                                <li><a href="https://cdn.shopify.com/s/files/1/0268/3093/0000/files/Menu_Luka_80644f37-5939-4926-9ac3-f2d287501465.pdf?v=1694099026">Almuerzos/Cenas</a></li>
                            </ul>
                            <li><a href='tel:+50222790967'>Reservaciones</a></li>
                            <li><a href='contactrooms'>Salones Corporativos</a></li>
                            <li><a href='contact'>Eventos especiales</a></li>
                            <li><a href='galery'>Galería</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section id='nosotros' className={styles.nosotros}>
                <div className={styles.nosotros__content}>
                    <div className={styles.nosotros__content__text}>
                        {/* {textoArray.slice(0, visibleParagraphs).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        {visibleParagraphs < textoArray.length && (
                            <button onClick={() => setVisibleParagraphs(visibleParagraphs + 1)} className={styles.nosotros__content__text__button}>
                                Leer más
                            </button>
                        )} */}
                        <h2>Exclusive fine dining</h2>
                    </div>
                </div>
            </section>
            <div className={styles.elementor__divider}>
                <span className={styles.elementor__divider__text}>
                </span>
            </div>
            <section id='footer' className={styles.footer}>
                <div className={styles.footer__content}>
                    <Footer />
                </div>
            </section>
            <div className={styles.lastfooter}>
                <div className={styles.lastfooter__content}>
                    <span className={styles.lastfootertext}>9na avenida 19-61 zona 10 Edificio Zenit Guatemala City, 01010</span>
                    <p className={styles.footercopyright} onClick={
                        () => window.open("https://garoo.info/", "_blank")
                    }>c 2023 Garoo Inc. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default PrincipalPage
import React,{useState} from "react"
import styles from "./ContactRooms.module.css"
import { navigate } from "../../store"

const ContactRooms = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        typeevent: "",
        date : "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(formData)

        const contacto = {contacto: formData }
        console.log(contacto)

        try {
            const response = await fetch(import.meta.env.VITE_API_ENDPOINTROOM, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setPopupMessage("Formulario enviado exitosamente!")
                setShowPopup(true)
            } else {
                setPopupMessage("Error al enviar el formulario. Inténtalo de nuevo.");
                setShowPopup(true)
            }
        } catch (error) {
            console.error("Hubo un error:", error)
        }
    }
    
    return (
        <div className={styles.container}>
            {showPopup && (
                <div className={styles.popup}>
                    <p>{popupMessage}</p>
                    <button onClick={() => {
                        setShowPopup(false)
                        navigate("/")
                    }}>Regresar</button>
                </div>
            )}
            <div className={styles.contact__content__info__container}>
                <h2> A continuación puede ponerse en contacto con Restaurante Luka. </h2>
                <p className={styles.contact__content__info__p}> Deja tu mensaje y nos pondremos en contacto contigo lo antes posible. </p>
            </div>
            <div className={styles.contactinfo}>
                <div className={styles.contactright}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nombre" name="from_name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                        <input type="text" placeholder="Correo" name="reply_to" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                        <input type="text" placeholder="Teléfono" name="cellphone" value={formData.cellphone} onChange={(e) => setFormData({ ...formData, cellphone: e.target.value })}/>
                        <span className={styles.contactright__span}>Fecha tentativa</span>
                        <input type="date" placeholder="10/01/2024" name="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}/>
                        <span className={styles.contactright__span}>Tipo de Reunión</span>
                        <select name="type_event" id="" value={formData.typeevent} onChange={(e) => setFormData({ ...formData, typeevent: e.target.value })}>
                            <option value="juntadirectiva">Junta Directiva</option>
                            <option value="capacitacion">Capacitación</option>
                            <option value="reuniontrabajo">Reunión de Trabajo</option>
                        </select>
                        <textarea
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Comentario"
                            name="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        <button type="submit" className={styles.contactright__button}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactRooms

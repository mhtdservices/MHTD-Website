
import { Image } from "react-bootstrap";
import workTime from "../../images/workTime.jpg";


export default function WorkDetails() {

    return(
        <>

        <div id="contactInfo" className="text-white text-center d-flex flex-wrap justify-content-center align-items-center p-4 mt-3">
            <Image src={workTime}  width="600" height="450" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.4076511398803!2d-6.528809324485378!3d34.007745673173744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7496530aba2c3%3A0x6dc2d165ea3a2f9f!2sMHTD%20Sarl!5e0!3m2!1sen!2sma!4v1704060342494!5m2!1sen!2sma" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
    )
    
}


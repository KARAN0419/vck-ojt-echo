import Header from "../components/Header/Header";

const ContanctPage = () =>{
    return(
        <>
        <Header/>
            <h1 text-align="center">"Contact Us"</h1>
            <section>
                <p>We'd love to hear form ypu! Whether you have question about admission, program, or campus lige, our team is here to help</p>
            </section>
            <h2>General Enquiries</h2>
            <section>
                <p>
                    <b>Vivekanand College Main Campus</b><br/>
                    [Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br/>
                    India<br/>
                    Phone: <b>+91 1234567890</b>
                    Email: <b>info@vivekanandcollege</b>
                    Office Hours: <b>Monday - Friday, 9:00 AM - 5:00 PM IST</b>
                </p>
            </section>
            <h2>Admission Office</h2>
            <section>
                <p>
                    For all admission-related queries regarding undergraduate or postgraduate programs:<br/>
                    Phone: <b>+91 9876543210</b>
                    Email: <b>studentsupport@vivekanandcollge.edu</b>
                </p>
            </section>
            <h2>Student Support Services</h2>
            <section>
                <p>
                For current student support, academic advising, or general assistance:<br/>
                Phone: +91 8765432109<br/>
                Email: studentsupport@vivekanandcollege.edu<b/>
                </p>
            </section>
            <h2>Find Us on the Map</h2>
            <section>
                <a href="https://maps.google.com/?q=Vivekanand+College" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </section>
            <section>
                <h2>Send Us a Massage</h2>
                <p>
                    [A contact form with fields for Name, Email, Subject, Message can br added here.]
                </p>
            </section>
        </>
    )
}

export default ContanctPage;
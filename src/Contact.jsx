import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [reason, setReason] = useState("");

    function SubmitForm(e) {
        e.preventDefault();

        if (!name || !mail || !phone || !reason) {
            alert("Please fill all fields");
            return;
        }

        emailjs
            .send(
                "service_0kytm9k",
                "template_5ttzf59",
                {
                    user_name: name,
                    user_email: mail,
                    user_phone: phone,
                    user_reason: reason,
                },
                "qAY2OqQOmikzQ62Dr"
            )
            .then(() => {
                alert("Message sent successfully");
                setName("");
                setMail("");
                setPhone("");
                setReason("");
            })
            .catch((err) => {
                console.error("Email error:", err);
                alert("Something went wrong");
            });
    }

    return (
        <>

            <div className="head">
                <h2>Fill out the form and I’ll get in touch with you</h2>
            </div>

            <div className="frmbdy">
                <form onSubmit={SubmitForm}>
                    <label>Name</label><br />
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br /><br />

                    <label>Email</label><br />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                    /><br /><br />

                    <label>Contact Number</label><br />
                    <input
                        type="tel"
                        placeholder="Enter your Contact Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    /><br /><br />

                    <label>Reason for Contact</label><br />
                    <textarea
                        placeholder="Reason for Contact"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    ></textarea><br /><br />

                    <button type="submit">Submit</button>
                </form>

            </div>

            <hr />




            <div className="mycontacts">
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>

                <a
                    href="https://www.naukri.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Naukri
                </a>

                <a
                    href="https://www.indeed.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Indeed
                </a>

                <a href="mailto:mantukubihal99@gmail.com">
                    Mail : mantukubihal99@gmail.com
                </a>

                <a href="tel:+919113049511">
                    Phone: 9113049511
                </a>
            </div>

            <hr />

        </>
    );
}

export default Contact;

import { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import "../styles/main.css";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_2sxn7kq",
            "template_c9kahtb",
            form,
            "mImIJhy46YbMIOUAd"
        )
            .then(() => {
                alert("Message sent!");

                setForm({
                    name: "",
                    email: "",
                    message: ""
                });
            })
            .catch((error) => {
                console.error(error);
                alert("Failed to send message");
            });
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me</span></h2>

            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <textarea
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                />

                <button type="submit" className="btn">Send</button>
            </form>
        </section>
    );
}
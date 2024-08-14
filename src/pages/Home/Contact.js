import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';

function Contact() {
    const [showContact, setShowContact] = useState(false);

    const toggleContact = () => {
        setShowContact(!showContact);
    };

    const contactInfo = {
        name: "Shekar B",
        age: null,
        gender: "Male",
        email: "shekarb0622@gmail.com",
        mobile: "660-528-5230",
        // country: "INDIA"
    };

    return (
        <div id='contact' className='mt-0'>
            <SectionTitle title="Contact" />

            <div className="flex gap-10 w-full items-center sm:flex-col mt-[-40px] sm:mt-4 sm:gap-6"> {/* Increase negative margin */}
                {/* Left Side: Contact Inspect Code */}
                <div
                    className="flex flex-col gap-2 w-1/2 sm:w-full bg-tertiary bg-opacity-85 text-black font-semibold p-4 rounded-lg cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-105"
                    onClick={toggleContact}
                >
                    <p className="text-white">Click to inspect contact</p>
                    <p>ContactCard contact = new ContactCard();</p>
                    <p>contact.inspect();</p>
                </div>

                {/* Right Side: Animation and Contact Info */}
                <div className="h-[60vh] w-1/2 sm:w-full relative"> {/* Adjust height */}
                    {/* Animation: Always Visible */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <dotlottie-player
                            src="https://lottie.host/770132aa-c8f1-4672-acca-4c4140805075/y3pYeZf6zI.json"
                            background="transparent"
                            speed="1"
                            autoplay
                            className="w-full h-full object-contain"
                        ></dotlottie-player>
                    </div>

                    {/* Contact Info: Only Visible After Click */}
                    {showContact && (
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-primary p-4 rounded-lg">
                            <pre className="text-tertiary whitespace-pre-wrap text-xl">
{`{
    "name": "${contactInfo.name}",
    "age": ${contactInfo.age},
    "gender": "${contactInfo.gender}",
    "email": "${contactInfo.email}",
    "mobile": "${contactInfo.mobile}" 
}`}
                            </pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;

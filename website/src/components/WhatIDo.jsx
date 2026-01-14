const services = [
    { title: "Custom design", description: "Tailored to your personal brand" },
    { title: "Responsive Layout", description: "Looks great on all devices" },
    { title: "Professional Look", description: "Clean, modern, trustworthy"},
];

const WhatIDo = () => {
    return (
        <section>
            <div>
                <h2> What I Do</h2>
                <p>
                    I help professionals turn who they are and wha they do into a strong online presence.
From layout to final build, I focus on clarity, simplicity, and a professional look
that works accros all devices.
                </p>
            </div>
            <div>
                {services.map((service, idx) => 
                <div key={idx}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
                )}
            </div>
        </section>
    );
};

export default WhatIDo;

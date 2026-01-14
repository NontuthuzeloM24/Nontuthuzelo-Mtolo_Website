import React from 'react';

const steps = [
    { step: 1, title: "Consultation", description: "Understand your brand." },
    { step: 2, title: "Design", description: "Layout & look approved by you." },
    { step: 3, title: "Build & Deploy", description: "Website gone live"},
]

const HowItWorks = () => {
    return (
        <section>
            <div>
                <h2> How It Works </h2>
                <p>A simple 3-step process to get your website up and running.</p>
            </div>
            <div>
                {steps.map((s) => (
                    <div key={s.step}>
                        <div>{s.step}</div>
                        <h3>{s.status}</h3>
                        <p>{s.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
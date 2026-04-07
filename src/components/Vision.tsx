import React from 'react';

const Vision = () => {
    return (
        <section id="vision" className="py-20 relative overflow-hidden">
            {/* Background element */}
            <div className="absolute inset-0 bg-accent/5 skew-y-3 transform origin-top-left z-0"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-sm font-bold text-accent tracking-[0.3em] uppercase mb-4">
                    Future Vision
                </h2>
                <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-8 leading-tight">
                    "MAKE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">VIRTUAL</span>,<br />
                    REALITY."
                </h3>

                <p className="max-w-2xl mx-auto text-secondary text-lg mb-10">
                    想像できることは、創造できる。<br />
                    テクノロジーとデザインの力で、境界線のない新しい体験を築き上げます。
                </p>

                <a href="mailto:hello@example.com" className="inline-block border-b-2 border-accent text-white font-bold pb-1 hover:text-accent transition-colors">
                    Let's work together →
                </a>
            </div>
        </section>
    );
};

export default Vision;

import React from 'react';
import { ArrowRight, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
                    alt="Cyberpunk Background"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-accent tracking-[0.2em] text-sm md:text-base font-bold mb-4 uppercase">
                        Welcome to my portfolio
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight">
                        EASTSOURCE DEV
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary mb-10 tracking-widest font-light">
                        GAME CREATOR
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <a
                            href="#games"
                            className="group relative px-8 py-3 bg-accent text-background font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <Gamepad2 size={20} />
                            View Games
                            <div className="absolute inset-0 border-2 border-accent transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
                        </a>

                        <a
                            href="#profile"
                            className="group px-8 py-3 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-background transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            About Me
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent opacity-50"></div>
            </motion.div>
        </section>
    );
};

export default Hero;

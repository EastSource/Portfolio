import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-white font-bold text-xl">
                    EastSource Dev<span className="text-accent">.</span>
                </div>

                <div className="text-secondary text-sm flex items-center gap-1">
                    Created by EastSource Dev using Gemini AI {new Date().getFullYear()}
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-secondary hover:text-white text-sm transition-colors">Privacy</a>
                    <a href="#" className="text-secondary hover:text-white text-sm transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState, useRef } from 'react';
import { ExternalLink, Play, X, Maximize, Github } from 'lucide-react';

const Games = () => {
    const [activeGame, setActiveGame] = useState<string | null>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            iframeRef.current?.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const games = [
        {
            title: "Magic Dragon Adventure",
            genre: "Action Adventure",
            image: `${import.meta.env.BASE_URL}games/MagicDragonAdventure.webp`,
            tags: ["Unity", "C#", "2025"],
            downloadUrl: `https://drive.google.com/drive/folders/1K_SyxiH1gvEE3XBdIsW9PoCj0qVlvfBi?usp=sharing`,
            buttonText: "Download and Play Demo"
        },
        {
            title: "SEARCHING",
            genre: "Action",
            image: `${import.meta.env.BASE_URL}games/SEARCHING.webp`,
            tags: ["Unity", "Wwise", "C#", "2026"],
            downloadUrl: `https://drive.google.com/drive/folders/1K_SyxiH1gvEE3XBdIsW9PoCj0qVlvfBi?usp=sharing`,
            githubUrl: `https://github.com/EastSource/SEARCHING`,
            buttonText: "Download and Play Demo"
        },
        {
            title: "HuntingAction2D",
            genre: "2D Action",
            image: `${import.meta.env.BASE_URL}games/HuntingAction2D.webp`,
            tags: ["Unity", "WebGL", "C#", "The Work for learning", "2024"],
            playUrl: `${import.meta.env.BASE_URL}games/HuningAction2D/index.html`,
            githubUrl: `https://github.com/EastSource/HuntingAction2D`,
            buttonText: "Play Now"
        }
    ];

    return (
        <section id="games" className="py-20 bg-background relative">
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-accent">#</span> Games
                    </h2>
                    <div className="w-20 h-1 bg-accent"></div>
                </div>

                <div className="flex flex-col gap-16 w-full mx-auto">
                    {games.map((game, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-stretch bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-accent/50 transition-colors duration-300 shadow-2xl ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            
                            {/* Content Side */}
                            <div className="flex-1 py-6 px-8 md:py-6 md:px-10 lg:py-8 lg:px-16 flex flex-col justify-center">
                                <div className="text-accent text-sm md:text-base font-bold uppercase tracking-wider mb-2">{game.genre}</div>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight">{game.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {game.tags.map(tag => (
                                        <span key={tag} className="text-sm md:text-base text-gray-300 bg-white/10 px-4 py-1.5 rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link/Button */}
                                <div className="flex items-center gap-4">
                                    {/* @ts-ignore - dynamic check */}
                                    {game.downloadUrl ? (
                                        <a
                                            href={game.downloadUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background text-base md:text-lg font-bold rounded-xl hover:bg-white transition-colors"
                                        >
                                            <Play size={20} fill="currentColor" /> {game.buttonText}
                                        </a>
                                    ) : (
                                        // @ts-ignore
                                        game.playUrl ? (
                                            <button
                                                onClick={() => setActiveGame(game.playUrl)}
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background text-base md:text-lg font-bold rounded-xl hover:bg-white transition-colors"
                                            >
                                                <Play size={20} fill="currentColor" /> {game.buttonText}
                                            </button>
                                        ) : (
                                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background text-base md:text-lg font-bold rounded-xl hover:bg-white transition-colors">
                                                <Play size={20} fill="currentColor" /> Play Demo
                                            </button>
                                        )
                                    )}

                                    {/* @ts-ignore - dynamic check */}
                                    {game.githubUrl && (
                                        <a
                                            href={game.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-accent transition-colors p-3 bg-white/10 rounded-xl hover:bg-white/20 flex items-center justify-center"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="flex-1 relative group overflow-hidden">
                                <div className="aspect-video md:aspect-auto md:h-full w-full min-h-[200px] md:min-h-[280px]">
                                    <img
                                        src={game.image}
                                        alt={game.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Game Modal */}
            {activeGame && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8">
                    <div className="relative w-full h-full max-w-[95vw] max-h-[90vh] flex flex-col bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 bg-white/5 border-b border-white/10">
                            <h3 className="text-white font-bold">Playing Game</h3>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={toggleFullscreen}
                                    className="p-2 text-secondary hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                    title="Toggle Fullscreen"
                                >
                                    <Maximize size={20} />
                                </button>
                                <button
                                    onClick={() => setActiveGame(null)}
                                    className="p-2 text-secondary hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Game Container */}
                        <div className="flex-1 bg-black relative">
                            <iframe
                                ref={iframeRef}
                                src={activeGame}
                                className="w-full h-full border-0"
                                title="Game Frame"
                                allow="fullscreen; autoplay; gamepad; acceleration; gyroscope"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Games;

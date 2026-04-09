import React, { useState, useRef } from 'react';
import { ExternalLink, Play, X, Maximize } from 'lucide-react';

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
            tags: ["Unity", "C#"],
            downloadUrl: `https://drive.google.com/drive/folders/1K_SyxiH1gvEE3XBdIsW9PoCj0qVlvfBi?usp=sharing`,
            buttonText: "Download and Play Demo"
        },
        {
            title: "SEARCHING",
            genre: "Action",
            image: `${import.meta.env.BASE_URL}games/SEARCHING.webp`,
            tags: ["Unity", "Wwise", "C#"],
            downloadUrl: `https://drive.google.com/drive/folders/1K_SyxiH1gvEE3XBdIsW9PoCj0qVlvfBi?usp=sharing`,
            buttonText: "Download and Play Demo"
        },
        {
            title: "HuntingAction2D",
            genre: "2D Action",
            image: `${import.meta.env.BASE_URL}games/HuntingAction2D.webp`,
            tags: ["Unity", "WebGL", "C#", "The Work for learning"],
            playUrl: `${import.meta.env.BASE_URL}games/HuningAction2D/index.html`,
            buttonText: "Play Now"
        }
    ];

    return (
        <section id="games" className="py-20 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-accent">#</span> Games
                    </h2>
                    <div className="w-20 h-1 bg-accent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {games.map((game, index) => (
                        <div key={index} className="group relative rounded-xl overflow-hidden cursor-pointer">
                            {/* Image */}
                            <div className="aspect-video w-full overflow-hidden">
                                <img
                                    src={game.image}
                                    alt={game.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="transform transition-transform duration-300 delay-75">
                                    <div className="text-accent text-sm font-bold uppercase tracking-wider mb-2">{game.genre}</div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {game.tags.map(tag => (
                                            <span key={tag} className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link/Button */}
                                    {/* @ts-ignore - dynamic check */}
                                    {game.downloadUrl ? (
                                        <a
                                            href={game.downloadUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-white font-medium hover:text-accent transition-colors"
                                        >
                                            <Play size={16} fill="currentColor" /> {game.buttonText}
                                        </a>
                                    ) : (
                                        // @ts-ignore
                                        game.playUrl ? (
                                            <button
                                                onClick={() => setActiveGame(game.playUrl)}
                                                className="flex items-center gap-2 text-white font-medium hover:text-accent transition-colors"
                                            >
                                                <Play size={16} fill="currentColor" /> {game.buttonText}
                                            </button>
                                        ) : (
                                            <button className="flex items-center gap-2 text-white font-medium hover:text-accent transition-colors">
                                                <Play size={16} fill="currentColor" /> Play Demo
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Border glow effect on hover */}
                            <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Game Modal */}
            {activeGame && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8">
                    <div className="relative w-full h-full max-w-7xl max-h-[80vh] flex flex-col bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
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

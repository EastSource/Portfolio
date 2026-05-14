import React from 'react';
import { Music, Headphones } from 'lucide-react';

const Musics = () => {
    return (
        <section id="musics" className="py-20 bg-background relative">
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-accent">#</span> Musics
                    </h2>
                    <div className="w-20 h-1 bg-accent"></div>
                </div>

                <div className="flex flex-col gap-16 w-full mx-auto">
                    {/* Niconico Card (Aton Info) */}
                    <div className="flex flex-col md:flex-row items-stretch bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-accent/50 transition-colors duration-300 shadow-2xl">
                        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                            {/* Decorative background blur */}
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Eighton (エイトン)</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                                エイトンという名義で作曲活動をしています。<br className="hidden md:block" />
                                ボーカロイドを用いた楽曲制作などを行っています。
                            </p>
                            <div className="inline-flex items-center gap-2 text-accent font-medium bg-accent/10 w-fit px-4 py-2 rounded-full relative z-10">
                                <Music size={18} />
                                <span>Music Creator / Vocaloid P</span>
                            </div>
                        </div>
                        <div className="w-full md:w-[560px] lg:w-[640px] bg-black/40 p-6 md:p-8 flex items-center justify-center border-t md:border-t-0 md:border-l border-white/10">
                            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-white/10">
                                <iframe
                                    allowFullScreen={true}
                                    allow="autoplay"
                                    frameBorder="0"
                                    width="100%"
                                    height="100%"
                                    src="https://embed.nicovideo.jp/watch/sm43893012?persistence=1&oldScript=1&referer=&from=0&allowProgrammaticFullScreen=1"
                                    style={{ display: 'block' }}
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Spotify Card */}
                    <div className="flex flex-col bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-accent/50 transition-colors duration-300 shadow-2xl p-6 md:p-8">
                        <div className="mb-6 flex items-center gap-4 px-2">
                            <div className="p-3 bg-accent/20 rounded-xl text-accent">
                                <Headphones size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Streaming</h3>
                                <p className="text-gray-400">Spotifyでの配信アルバム</p>
                            </div>
                        </div>
                        <iframe
                            data-testid="embed-iframe"
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/album/4ysGLQ8NTcv7hpS2jlbMkY?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Musics;

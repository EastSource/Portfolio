import React from 'react';
import { User, Code, Coffee, Trophy, Github, Twitter, Mail } from 'lucide-react';

const Profile = () => {
    return (
        <section id="profile" className="py-20 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-accent">#</span> Profile
                    </h2>
                    <div className="w-20 h-1 bg-accent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Bio Section */}
                    <div className="space-y-8">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-6 text-white">Hello, World!</h3>
                            <p className="text-secondary leading-relaxed mb-6">
                                デジタルな世界に「楽しさ」と「驚き」を実装するクリエイターです。<br />
                                UI/UXデザインとゲーム開発に情熱を注ぎ、ユーザーの心を動かす体験を作り出すことを目指しています。
                                技術とデザインの架け橋となり、新しい価値を創造します。
                            </p>

                            <div className="flex space-x-4">
                                <SocialLink href="https://github.com/EastSource" icon={<Github size={20} />} label="GitHub" />
                                <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
                                <SocialLink href="mailto:hello@example.com" icon={<Mail size={20} />} label="Email" />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <StatCard icon={<Code size={24} />} value="3+" label="Years Exp" />
                            <StatCard icon={<Trophy size={24} />} value="5" label="Games Shipped" />
                            <StatCard icon={<Coffee size={24} />} value="∞" label="Coffee" />
                        </div>
                    </div>

                    {/* Avatar Section */}
                    <div className="flex justify-center">
                        <div className="relative w-80 h-80">
                            <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            <div className="relative w-full h-full rounded-full border-4 border-accent/30 overflow-hidden bg-white/5 flex items-center justify-center">
                                <User size={120} className="text-secondary" />
                                {/* Replace with actual image later */}
                                {/* <img src="/path/to/avatar.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 right-0 bg-accent text-background px-6 py-2 rounded-full font-bold shadow-lg shadow-accent/20">
                                Lvl. 25
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        className="p-3 bg-white/5 hover:bg-accent hover:text-background rounded-full transition-all duration-300 border border-white/10"
        aria-label={label}
    >
        {icon}
    </a>
);

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
    <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-center hover:border-accent/50 transition-colors">
        <div className="text-accent mb-2 flex justify-center">{icon}</div>
        <div className="text-2xl font-bold text-white mb-1">{value}</div>
        <div className="text-xs text-secondary uppercase tracking-wider">{label}</div>
    </div>
);

export default Profile;

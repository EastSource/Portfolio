import React from 'react';
import { Gamepad, PenTool, BookOpen } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Game Dev",
            icon: <Gamepad className="text-accent" size={32} />,
            skills: ["Unity"]
        },
        {
            title: "Tools",
            icon: <PenTool className="text-accent" size={32} />,
            skills: ["Rider", "Git", "Cubase", "Blender"]
        },
        {
            title: "Learning",
            icon: <BookOpen className="text-accent" size={32} />,
            skills: ["Unreal Engine", "C/C++", "GameSynth", "Wwise", "After Effects"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-accent">#</span> Skills
                    </h2>
                    <div className="w-20 h-1 bg-accent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-lg inline-block group-hover:bg-accent/10 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-medium text-secondary bg-black/30 rounded border border-white/5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

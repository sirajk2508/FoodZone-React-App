import { AboutSection, TeamSection } from "../config";

export const About = () => {
    return (
        <div className="about-page m-2 p-2 text-slate-800">
            <h1 className="text-3xl font-bold text-center m-2 p-2">About Page</h1>
            <p className="p-2">{AboutSection()}</p>
            <p className="p-2">{TeamSection()}</p>
        </div>
    );
}
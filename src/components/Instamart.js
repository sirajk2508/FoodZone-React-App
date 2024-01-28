import { useState } from "react";
import { AboutSection,TeamSection, CareersSection } from "../config";

export const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border border-gray-300 p-2 m-2 flex flex-col">
      <h3 className="font-bold text-xl text-center">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer border border-gray-500 m-1 p-2 rounded-2xl w-52 mx-auto bg-orange-300 hover:bg-orange-400 hover:border-orange-600"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer border border-gray-500 m-1 p-2 rounded-2xl w-52 mx-auto bg-orange-300 hover:bg-orange-400 hover:border-orange-600"
        >
          Show
        </button>
      )}

      {isVisible && <p className="px-3 mx-3">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  return (
    <div>
      <h1 className="text-5xl p-2 m-2 font-bold text-center mb-0 text-orange-500 italic">Instamart</h1>

      <Section
        title={"About Instamart"}
        description={AboutSection()}
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
            setVisibleSection(visibleSection === "about" ? null : "about")
        }
      />

      <Section
        title={"Team Instamart"}
        description={TeamSection()}
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
            setVisibleSection(visibleSection === "team" ? null : "team")
          }
      />

      <Section
        title={"Careers"}
        description={CareersSection()}
        isVisible={visibleSection === "career"}
        setIsVisible={() =>
            setVisibleSection(visibleSection === "career" ? null : "career")
          }
      />
    </div>
  );
};

export default Instamart;
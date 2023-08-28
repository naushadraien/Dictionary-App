import { useContext, useEffect, useRef } from "react";
import { Context } from "../main";
import Play from "../assets/play.png";
import Pause from "../assets/pause.png";
import Footer from "./Footer";

const Content = ({ partOfSpeech, definitions }) => {
  const {
    res,
    selectedPartOfSpeech,
    setSelectedPartOfSpeech,
    isPlaying,
    setIsPlaying,
  } = useContext(Context);
  const ref = useRef(null);

  const audioUrl = res?.phonetics && res.phonetics[0].audio;

  const wordDefinitions = definitions;

  const playAudio = () => {
    if (isPlaying) {
      ref.current.pause();
      setIsPlaying(false);
    } else {
      ref.current.play();
      setIsPlaying(true);
    }
  };

  // Set up the onEnded event listener after the ref is assigned
  useEffect(() => {
    if (ref.current) {
      ref.current.onended = () => {
        setIsPlaying(false);
      };
    }
  }, [res]);

  return (
    <div>
      {partOfSpeech === selectedPartOfSpeech && (
        <div>
          <div className="flex flex-row my-5">
            <button
              className="text-white h-12 w-12 rounded-full mr-2"
              onClick={playAudio}
            >
              {isPlaying ? (
                <img src={Pause} alt="pause" />
              ) : (
                <img src={Play} alt="play" />
              )}
            </button>
            <audio className="hidden" src={audioUrl} ref={ref} />
            <h3 className="font-bold text-xl">
              Word: {res.word}
              <span className="block font-normal text-sm text-black">
                {res.phonetic}
              </span>
            </h3>
          </div>

          {/* Place the part of speech tabs below the playAudio button */}
          <div className="my-3">
            <div className="flex space-x-4">
              <button
                className={`text-white h-8 px-2 rounded ${
                  selectedPartOfSpeech === "noun" ? "bg-black" : "bg-gray-500"
                }`}
                onClick={() => setSelectedPartOfSpeech("noun")}
              >
                Noun
              </button>
              <button
                className={`text-white h-8 px-2 rounded ${
                  selectedPartOfSpeech === "verb" ? "bg-black" : "bg-gray-500"
                }`}
                onClick={() => setSelectedPartOfSpeech("verb")}
              >
                Verb
              </button>
            </div>
            <ol className="list-decimal px-4 text-gray-800 text-lg space-y-2 mt-2 mb-40">
              {wordDefinitions.map((i) => (
                <li key={i.definition}>{i.definition}</li>
              ))}
            </ol>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Content;

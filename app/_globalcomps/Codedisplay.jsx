import { Prism } from "react-syntax-highlighter";
import {
  vs,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";

function Codedisplay({ code, language = "javascript", isDarkMode = true }) {
  return (
    <div className="relative bg-[#1e1e1e] rounded-md overflow-hidden">
      <div className="bg-[#313131] flex justify-between p-2">
        <span className="text-gray-300 ml-3">{language}</span>
        <div>
          <button className="px-5 py-1 rounded-md text-white border border-white text-xs">
            Copy
          </button>
        </div>
      </div>
      <Prism
        language={language}
        style={isDarkMode ? vscDarkPlus : vs} // Switch based on theme
      >
        {code}
      </Prism>
    </div>
  );
}

export default Codedisplay;

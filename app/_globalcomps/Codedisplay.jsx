import { Prism } from "react-syntax-highlighter";
import {
  vs,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";

function Codedisplay({ code, language = "javascript", isDarkMode = true }) {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 p-2">
        <button className="px-5 py-1 rounded-md text-white border border-white text-xs">
          Copy
        </button>
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

import React from "react";
import Keybutton from "@/app/(frontend)/_globalcomps/Keybutton";
import Mouseclick from "@/app/(frontend)/_globalcomps/Mouseclick";

function page() {
  return (
    <div className="text">
      <h1 className="!mb-0">Shortcuts and Extensions</h1>
      <p>
        lets upgrade your coding experience with these useful shortcuts and
        extensions
      </p>
      <h2>Shortcuts and Their Uses</h2>

      <h3>General Shortcuts</h3>
      <ul>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"P"} />
          </strong>{" "}
          – Quick Open: Instantly open any file in the project.
        </li>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"Shift"} /> +{" "}
            <Keybutton text={"P"} />
          </strong>{" "}
          – Command Palette: Access all commands quickly.
        </li>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"B"} />
          </strong>{" "}
          – Toggle Sidebar: Show or hide the sidebar.
        </li>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"`"} />
          </strong>{" "}
          – Toggle Terminal: Open or close the integrated terminal.
        </li>
      </ul>

      <h3>Editing & Navigation</h3>
      <ul>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"D"} />
          </strong>{" "}
          – Select Next Occurrence: Select the next occurrence of the selected
          text.
        </li>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"L"} />
          </strong>{" "}
          – Select Entire Line: Highlights the whole line.
        </li>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"/"} />
          </strong>{" "}
          – Toggle Comment: Quickly comment/uncomment lines.
        </li>
        <li>
          <strong>
            <Keybutton text={"Alt"} /> + <Keybutton text={"↑"} /> /{" "}
            <Keybutton text={"↓"} />
          </strong>{" "}
          – Move Line Up/Down: Move the selected line(s) up or down.
        </li>
        <li>
          <strong>
            <Keybutton text={"Shift"} /> + <Keybutton text={"Alt"} /> +{" "}
            <Keybutton text={"↑"} /> / <Keybutton text={"↓"} />
          </strong>{" "}
          – Duplicate Line: Copy and paste the selected line(s).
        </li>
      </ul>

      <h3>Multiple Cursors & Selection</h3>
      <ul>
        <li>
          <strong className="flex items-center gap-1">
            <Keybutton text={"Alt"} /> + <Mouseclick leftclick={true} />
          </strong>{" "}
          – Add Multiple Cursors: Place multiple cursors anywhere.
        </li>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"Shift"} /> +{" "}
            <Keybutton text={"L"} />
          </strong>{" "}
          – Select All Occurrences: Select all instances of a word.
        </li>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"Shift"} /> +{" "}
            <Keybutton text={"Alt"} /> + Arrow Keys
          </strong>{" "}
          – Block Selection: Select text in block mode.
        </li>
      </ul>

      <h3>Window & Tabs</h3>
      <ul>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"\\"} />
          </strong>{" "}
          – Split Editor: Open a new editor side by side.
        </li>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"Tab"} />
          </strong>{" "}
          – Switch Tabs: Cycle through open files.
        </li>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"W"} />
          </strong>{" "}
          – Close Current Tab: Close the currently open file.
        </li>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"Shift"} /> +{" "}
            <Keybutton text={"T"} />
          </strong>{" "}
          – Reopen Closed Tab: Restore the last closed file.
        </li>
      </ul>

      <h3>Debugging & Terminal</h3>
      <ul>
        <li>
          <strong>
            <Keybutton text={"F5"} />
          </strong>{" "}
          – Start Debugging: Begin debugging the current file.
        </li>
        <li>
          <strong>
            <Keybutton text={"Shift"} /> + <Keybutton text={"F5"} />
          </strong>{" "}
          – Stop Debugging: Stop the debugging session.
        </li>
        <li>
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"Shift"} /> +{" "}
            <Keybutton text={"`"} />
          </strong>{" "}
          – New Terminal Instance: Open a new terminal window.
        </li>
      </ul>
      {/* extensions */}

      <h2>What is an Extension in VS Code?</h2>
      <p>
        Extensions in Visual Studio Code (VS Code) are add-ons that enhance the
        functionality of the editor. They provide additional features such as
        syntax highlighting, debugging tools, formatters, themes, and live
        server previews.
      </p>

      <h3>How to Add an Extension in VS Code?</h3>
      <ol>
        <li>
          Open Extensions Marketplace: Press{" "}
          <strong>
            <Keybutton text={"Ctrl"} /> + <Keybutton text={"Shift"} /> +{" "}
            <Keybutton text={"X"} />
          </strong>{" "}
          or click on the Extensions icon in the left sidebar.
        </li>
        <li>
          Search for an Extension: Type the extension name in the search bar.
        </li>
        <li>
          Install the Extension: Click the <strong>Install</strong> button next
          to the desired extension.
        </li>
        <li>
          Enable/Disable the Extension: After installation, the extension can be
          enabled, disabled, or uninstalled from the Extensions panel.
        </li>
      </ol>

      <h3>Popular VS Code Extensions</h3>

      <h3>Live Server</h3>
      <p>
        <strong>Purpose:</strong>
      </p>
      <ul>
        <li>
          Launches a local development server with automatic live reloading for
          HTML, CSS, and JavaScript files.
        </li>
      </ul>
      <p>
        <strong>How to Use:</strong>
      </p>
      <ul>
        <li>Install the Live Server extension.</li>
        <li>Open an HTML file and click {'"'}Go Live{'"'} at the bottom of VS Code.</li>
        <li>
          Your file will open in a browser and automatically refresh when
          changes are made.
        </li>
      </ul>

      <h3>Live Preview</h3>
      <p>
        <strong>Purpose:</strong>
      </p>
      <ul>
        <li>
          Provides a built-in browser preview inside VS Code without opening an
          external browser.
        </li>
      </ul>
      <p>
        <strong>How to Use:</strong>
      </p>
      <ul>
        <li>Install Live Preview from the Extensions Marketplace.</li>
        <li>
          Open an HTML file and click {'"'}Live Preview{'"'} from the editor toolbar.
        </li>
      </ul>

      <h3>Prettier (Code Formatter)</h3>
      <p>
        <strong>Purpose:</strong>
      </p>
      <ul>
        <li>
          Automatically formats code in JavaScript, TypeScript, HTML, CSS, JSON,
          and more to ensure clean and consistent styling.
        </li>
      </ul>
      <p>
        <strong>How to Use:</strong>
      </p>
      <ul>
        <li>Install Prettier - Code formatter.</li>
        <li>
          Set Prettier as the default formatter:
          <ul>
            <li>
              Open Settings (
              <strong>
                <Keybutton text={"Ctrl"} /> + <Keybutton text={","} />
              </strong>
              ).
            </li>
            <li>Search for {'"'}Format on Save{'"'} and enable it.</li>
            <li>
              Right-click a file, select {'"'}Format Document,{'"'} and choose Prettier.
            </li>
          </ul>
        </li>
        <li>
          Now, your code will automatically format when you save the file.
        </li>
      </ul>

      <p>
        These extensions improve development speed and maintain clean code in VS
        Code.
      </p>
      <h3>
        <mark>
          Now you are almost ready to make ui, try Creating clone of your
          favourite websites and have fun 😊
        </mark>
      </h3>
      <p>Continue your journey for more advance learning.</p>
    </div>
  );
}

export default page;

import React, { useState } from "react";

export default function App() {
  const [openDefinition, setOpenDefinition] = useState(false);
  const [openTopic, setOpenTopic] = useState(false);
  const [openType, setOpenType] = useState(null);

  return (
    <div className="p-4 max-w-xl mx-auto">
      {/* Heading */}
      <h1
        className="flex justify-center text-2xl font-bold cursor-pointer bg-blue-200 p-3 rounded-lg"
        onClick={() => setOpenDefinition(!openDefinition)}
      >
        What is Hemodialysis?
      </h1>

      {/* Definition + Video + Topic */}
      {openDefinition && (
        <div className="mt-3">
          {/* Definition */}
          <p className="bg-gray-100 p-3 rounded-lg mb-4">
            Hemodialysis is a medical procedure that removes waste products and
            excess fluid from the blood when the kidneys are no longer working
            effectively. It acts as an artificial kidney.
          </p>

          {/* Video */}
          <div className="w-full aspect-video bg-black rounded-lg overflow-hidden mb-5">
            <iframe
              className="w-full h-full"
              src="https://drive.google.com/file/d/1v8dkOXaeLw14-IZp661-QJ2pziVlOrfj/preview"
              allow="autoplay"
            ></iframe>
          </div>

          {/* Topic */}
          <h2
            className="flex justify-center text-xl font-semibold bg-green-200 p-3 rounded-lg cursor-pointer"
            onClick={() => setOpenTopic(!openTopic)}
          >
            Essential Equipment for Hemodialysis
          </h2>

          {openTopic && (
            <ul className="mt-3 bg-gray-100 p-3 rounded-lg">
              {/* Machine */}
              <li
                className="cursor-pointer p-2 border-b font-medium"
                onClick={() =>
                  setOpenType(openType === "machine" ? null : "machine")
                }
              >
                Dialysis Machine
              </li>
              {openType === "machine" && (
                <p className="p-2 pl-4 text-sm">
                  A dialysis machine filters blood to remove wastes and excess
                  fluids.
                </p>
              )}

              {/* Dialyzer */}
              <li
                className="cursor-pointer p-2 border-b font-medium"
                onClick={() =>
                  setOpenType(openType === "dialyzer" ? null : "dialyzer")
                }
              >
                Dialyzer
              </li>
              {openType === "dialyzer" && (
                <p className="p-2 pl-4 text-sm">
                  The dialyzer functions as an artificial kidney.
                </p>
              )}

              {/* Tubing */}
              <li
                className="cursor-pointer p-2 border-b font-medium"
                onClick={() =>
                  setOpenType(openType === "tubing" ? null : "tubing")
                }
              >
                Blood Tubing
              </li>
              {openType === "tubing" && (
                <p className="p-2 pl-4 text-sm">
                  Tubing transports blood safely during dialysis.
                </p>
              )}

              {/* Access */}
              <li
                className="cursor-pointer p-2 border-b font-medium"
                onClick={() =>
                  setOpenType(openType === "access" ? null : "access")
                }
              >
                Vascular Access
              </li>
              {openType === "access" && (
                <p className="p-2 pl-4 text-sm">
                  Access types include AV fistula, AV graft, and catheter.
                </p>
              )}

              {/* Heparin */}
              <li
                className="cursor-pointer p-2 font-medium"
                onClick={() =>
                  setOpenType(openType === "heparin" ? null : "heparin")
                }
              >
                Heparin
              </li>
              {openType === "heparin" && (
                <div className="p-2 pl-4 text-sm">
                  <p>
                    Heparin is a fast-acting anticoagulant used to prevent
                    clotting during dialysis.
                  </p>

                  <p className="mt-1 font-semibold">
                    Formula: C<sub>12</sub>
                    H<sub>19</sub>
                    N<sub>1</sub>
                    O<sub>20</sub>
                    S<sub>3</sub>
                  </p>
                </div>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

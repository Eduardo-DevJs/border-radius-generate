import { ChangeEvent, useState } from "react";

export default function App() {
  const [topLeftRadius, setTopLeftRadius] = useState<number>(0);
  const [topRightRadius, setTopRightRadius] = useState<number>(0);
  const [bottomRightRadius, setBottomRightRadius] = useState<number>(0);
  const [bottomLeftRadius, setBottomLeftRadius] = useState<number>(0);

  const StylesRadius = {
    borderTopLeftRadius: topLeftRadius,
    borderTopRightRadius: topRightRadius,
    borderBottomRightRadius: bottomRightRadius,
    borderBottomLeftRadius: bottomLeftRadius,
  };

  function handleTopLeftRadius(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setTopLeftRadius(Number(value));
  }

  function handleTopRightRadius(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setTopRightRadius(Number(value));
  }

  function handleBottomRightRadius(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setBottomRightRadius(Number(value));
  }

  function handleBottomLeftRadius(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setBottomLeftRadius(Number(value));
  }


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white w-full md:w-[800px] mx-auto p-10 grid-cols-1 gap-5 grid md:grid-cols-2 md:items-start md:gap-16">
        <div>
          <header className="bg-slate-900 text-center mb-5 p-2 rounded text-white">
            Opções de borda
          </header>
          <form className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <label className="block" htmlFor="">
                  Raio superior esquerdo
                </label>
                <input
                  onChange={handleTopLeftRadius}
                  type="range"
                  min={0}
                  max={200}
                />
              </div>

              <h2>{topLeftRadius}px</h2>
            </div>
            <div className="h-px bg-slate-300"></div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block" htmlFor="">
                  Raio superior direito
                </label>
                <input
                  onChange={handleTopRightRadius}
                  type="range"
                  min={0}
                  max={200}
                />
              </div>

              <h2>{topRightRadius}px</h2>
            </div>
            <div className="h-px bg-slate-300"></div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block" htmlFor="">
                  Raio inferior direito
                </label>
                <input
                  onChange={handleBottomRightRadius}
                  type="range"
                  min={0}
                  max={200}
                />
              </div>

              <h2>{bottomRightRadius}px</h2>
            </div>
            <div className="h-px bg-slate-300"></div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block" htmlFor="">
                  Raio inferior esquerdo
                </label>
                <input
                  onChange={handleBottomLeftRadius}
                  className="bg-red-500"
                  type="range"
                  min={0}
                  max={200}
                />
              </div>

              <h2>{bottomLeftRadius}px</h2>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-10">
          <div
            style={StylesRadius}
            className="h-[315px] w-full bg-gray-900"
          ></div>

          <div className="p-3 bg-slate-900 rounded text-slate-100">
            border-radius:{" "}
            {`${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomRightRadius}px`}
          </div>
        </div>
      </div>
    </div>
  );
}

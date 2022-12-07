export default function HomePage() {
  return (
    <>
      <div className="flex">
        <div className="bg-black text-white h-screen w-1/5 flex flex-col items-center justify-center fixed font-serif uppercase">
          <p className="text-3xl font-semibold m-9 first-letter:text-5xl">
            PORTFOLIO
          </p>
          <ul>
            <li className="text-lg m-3 p-3 text-center">Home</li>
            <li className="text-lg m-3 p-3 text-center">About</li>
            <li className="text-lg m-3 p-3 text-center">Projects</li>
            <li className="text-lg m-3 p-3 text-center">Certificates</li>
            <li className="text-lg m-3 p-3 text-center">Resume</li>
            <li className="text-lg m-3 p-3 text-center">Contact</li>
          </ul>
        </div>        
        <div className="flex flex-col w-4/5 ml-auto">
          <div className="h-screen w-full bg-gray-400">
        
          </div>
          <div className="h-screen w-full bg-gray-800">
             
          </div>
        </div>
      </div>
    </>
  );
}

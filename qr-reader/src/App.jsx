import image from "./assets/image-qr-code.png";

function App() {
  return (
    <section className="grid h-screen place-items-center ">
      <div className="bg-white rounded-[25px] w-[400px] drop-shadow-xl">
        <img src={image} alt="" className="w-[400px] p-5 rounded-[32px]" />
        <div className="text-center text-[#073A74] my-3">
          <h1 className="text-3xl font-[700] font-outfit">
            Improve your front-end <br /> skills by building projects
          </h1>
          <p className="text-[#7B879D] font-[400] mt-4 mb-6 text-[15px] font-outfit">
            Scan the QR code to visit Frontend <br /> Mentor and take your
            coding skills to <br /> the next level
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;

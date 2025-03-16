const Home = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center">Juan Fernando Rosero</h1>
        <h1 className="text-3xl font-bold text-center">Configuracion de mi paleta de colores</h1>
      </div>
      <span className="w-32 h-32 flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#2F4156' }}>
      #2F4156
      </span>
      <span className="w-32 h-32 flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#557C8D' }}>
      #557C8D
      </span>
      <span className="w-32 h-32 flex items-center justify-center text-gray-800 font-bold" style={{ backgroundColor: '#F5EEEB' }}>
      #F5EEEB
      </span>
      <span className="w-32 h-32 flex items-center justify-center text-gray-800 font-bold" style={{ backgroundColor: '#C0D9E6' }}>
      #C0D9E6
      </span>
      <span className="w-32 h-32 flex items-center justify-center text-gray-800 font-bold border" style={{ backgroundColor: '#FFFFFF' }}>
      #FFFFFF
      </span>
    </div>
  );
};

export default Home;

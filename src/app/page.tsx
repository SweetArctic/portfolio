const Home = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center items-center">
      <span className="w-32 h-32 flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#2F4156' }}>
        Navy
      </span>
      <span className="w-32 h-32 flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#557C8D' }}>
        Teal
      </span>
      <span className="w-32 h-32 flex items-center justify-center text-gray-800 font-bold" style={{ backgroundColor: '#F5EEEB' }}>
        Beige
      </span>
      <span className="w-32 h-32 flex items-center justify-center text-gray-800 font-bold" style={{ backgroundColor: '#C0D9E6' }}>
        Sky Blue
      </span>
      <span className="w-32 h-32 flex items-center justify-center text-gray-800 font-bold border" style={{ backgroundColor: '#FFFFFF' }}>
        White
      </span>
    </div>
  );
};

export default Home;


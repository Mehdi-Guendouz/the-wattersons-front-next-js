const CardStats = () => {
  return (
    <div className="bg-white  flex flex-col gap-3 border border-solid border-gray-600 w-[400px] min-w-[400px]">
      <div className="flex gap-3">
        32
        <span>total cards</span>
      </div>
      <span>Active: 32</span>
      <span>inactive : 10</span>
      <span>down : 10</span>
    </div>
  );
};

export default CardStats;

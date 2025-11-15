type CateguryItem = {
  img?: string;
  svg?: string;
  title: string;
};

export default function CateguryItem({ img, title ,svg}: CateguryItem) {
  return (
    <div className="flex rounded-sm flex-col bg-item items-center justify-center">
      
      {svg ? (
<svg className="w-20 h-10"> 
    <use xlinkHref={svg}></use>
</svg>
      ) : (
          
          <img
            className="w-20 "
            src={img}
            alt=""
          />
      )}
      <span>{title  }</span>
    </div>
  );
}

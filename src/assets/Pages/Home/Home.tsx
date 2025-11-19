import Index from "../../Components/Index/Index";

export default function Home() {
  return (
    <div className="container-custom pt-4">
      <Index />
      <div className="bg-secondry fixed bottom-5 flex items-center justify-center right-5 w-8 h-8 rounded-full">
        <svg className="w-5 h-5 mr-0.5">
          <use xlinkHref="#support"></use>
        </svg>
      </div>
    </div>
  );
}

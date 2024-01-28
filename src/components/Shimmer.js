// import { ShimmerPostList } from "react-shimmer-effects";

// export const Shimmer = () => {
//   return <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />;
// };



// My Custom Shimmer
export const Shimmer = () => {
  return (
    <div className="shimmer-restaurant-list flex flex-wrap justify-center">
      {Array(24).fill("").map((e, index) => <div className="shimmer-card m-2 p-2 border-solid border w-72 h-96 flex flex-wrap" key={index}>
        <h2 className="shimmer-card-header w-64 m-2 p-2 h-36 bg-gray-100"></h2>
        <h3 className="shimmer-card-cuisines w-40 h-5 bg-gray-100"></h3>
        <h4 className="shimmer-card-area w-36 h-5 bg-gray-100"></h4>
      </div>)}
    </div>
  );
}

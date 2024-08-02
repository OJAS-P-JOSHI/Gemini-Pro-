// src/components/Loading.jsx

export const LoadingSpinner = () => {
  return (
    <div className="inline-block w-8 h-8 border-4 border-t-4 border-r-transparent border-red-500 rounded-full animate-spin"></div>
  );
};

export const LoadingBig = () => {
  return (
    <div className="flex space-x-3 justify-center items-center w-[250px] m-auto mt-[300px]">
      <div className="h-12 w-12 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-12 w-12 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-12 w-12 bg-green-500 rounded-full animate-bounce"></div>
    </div>
  );
};

export const LoadingSmall = () => {
  return (
    <div className="flex space-x-3 justify-center items-center">
      <div className="h-6 w-6 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-6 w-6 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-6 w-6 bg-green-500 rounded-full animate-bounce"></div>
    </div>
  );
};

import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-semibold">Oops!</h1>
      <p className="text-xl my-5">Sorry an unexpected error has occured</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
}

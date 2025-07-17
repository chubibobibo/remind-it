import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  /** @isRouteErrorResponse checks whether error is a route error object that will allow us to access the status property */
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <>
          <section className='w-screen flex flex-col items-center justify-center'>
            <aside className='pt-40 md:pt-20 flex justify-center items-center'>
              <h1 className='font-honk text-3xl md:text-[6rem]'>
                Page not found
              </h1>
            </aside>
            <img
              src='../src/assets/404.jpg'
              alt='404 error'
              className='md:h-[50rem]'
            />
          </section>
        </>
      );
    } else {
      return (
        <>
          <h1>Something went wrong</h1>
        </>
      );
    }
  }
}
export default ErrorPage;

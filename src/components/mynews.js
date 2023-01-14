import "../styles/styles.css"
const Mynews = () => {
    return (
      <div className="py-14 px-6 mx-auto bg-black">
        <section className="mb-32 text-gray-800 text-center lg:text-left">
          <div className="flex flex-wrap justify-center py-10 rounded-3xl shadow text-white grad">
            <div className="w-full lg:w-10/12 px-3">
              <div className="grid lg:grid-cols-2 gap-x-2">
                <div className="mb-10 lg:mb-0">
                  <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Join our mailing list
                  </p>
                  <p className="max-w-3xl mt-2 text-lg">
                    Be the first to hear about news offerings, relevant updates
                    and other news from zoth
                  </p>
                </div>
                <div className="mb-6 md:mb-0">
                  <div className="flex flex-row">
                    <input
                      type="text"
                      className="form-control block w-8/12 px-4 mx-auto lg:ml-40 md:ml-28 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Enter your email"
                    />
                    {/* <button
                      type="submit"
                      className="inline-block py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Subscribe
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Mynews;
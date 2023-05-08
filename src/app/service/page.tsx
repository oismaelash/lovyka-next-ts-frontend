'use client';
import Image from 'next/image'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Title of service</h2>
            <p className="mt-8 mb-8 text-lg leading-8 text-gray-600">
              Description of service
            </p>
            <span
              onClick={() => alert('like')}
              className="mr-5 hover:cursor-pointer inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              LIKES = 00
            </span>
            <span
              onClick={() => alert('dislike')}
              className="hover:cursor-pointer inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              DISLIKES = 100
            </span>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <input
                type="text"
                name="comment"
                id="comment"
                className=" rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="my comment here"
              />
              <button
                type="button"
                className="mt-4 mb-5 inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"

              >
                Comment
              </button>
              <h4 className=' text-3xl text-black'>
                Comments
              </h4>
              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>
              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>
              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>
              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>
              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>
              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>
              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>
              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>

              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>
              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>
              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>
              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>
              <p className="mt-4 text-xl text-gray-500 border-t border-gray-200">
                Some comment here
              </p>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

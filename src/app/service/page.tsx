'use client';
import { ServiceType } from "@/types/service";
import { useEffect, useState } from "react";
import api from '../../service/api'

export default function ServicePage() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [author, setAuthor] = useState('')
  const [service, setService] = useState<ServiceType>({})

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    getServiceData(id)
  }, [])

  async function getServiceData(id: string | null | undefined) {
    try {
      const response = ((await api.get(`service/one?id=${id}`)).data)
      const serviceData: ServiceType = response.data
      setService(serviceData)
      setName(serviceData.name || '')
      setDescription(serviceData.description || '')
      setPrice(serviceData.price || 0)
      setAuthor(serviceData.author || '')
    } catch (error) {
      console.error('getServiceData', error)
    }
  }

  function operationHandle(event: any) {
    if(getCreateOrUpdateText() == 'Create'){
      createService(event)
    } else {
      updateService(event)
    }
  }

  async function createService(event: any) {
    event.preventDefault() 
    try {
      await api.post(`service`, {
        name,
        description,
        price,
        author
      })
      window.location.href = window.location.origin
    } catch (error) {
      console.error('createService', error)
    }
  }

  async function updateService(event: any) {
    event.preventDefault() 
    try {
      await api.put(`service?id=${service.id}`, {
        name,
        description,
        price,
        author
      })
      window.location.href = window.location.origin
    } catch (error) {
      console.error('updateService', error)
    }
  }

  function getCreateOrUpdateText() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    return id == null ? 'Create' : 'Update'
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{getCreateOrUpdateText()} service</h2>
          </div>
          <div className='mt-10'>
            <div >
              <form className="space-y-6 flex flex-col justify-center" onSubmit={(event) => operationHandle(event)}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      type="text"
                      value={name}
                      onChange={event => setName(event.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      value={description}
                      onChange={event => setDescription(event.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      type="number"
                      value={price}
                      onChange={event => setPrice(Number.parseInt(event.target.value))}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Author
                  </label>
                  <div className="mt-2">
                    <input
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      type="text"
                      value={author}
                      onChange={event => setAuthor(event.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {getCreateOrUpdateText()}
                  </button>
                </div>
                <div>
                  <button
                    className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => location.href = '/'}
                  >
                    Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

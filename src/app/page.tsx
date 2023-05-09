'use client';
import { Fragment, useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard'
import Loading from '../components/Loading'
import api from '../service/api'
import { ServiceType } from '@/types/service';
import { formatDatetime } from '../utils'

export default function Index() {

  const [services, setServices] = useState<Array<ServiceType>>([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getServicesData()
  }, [])

  async function getServicesData() {
    try {
      const response = (await api.get<Array<ServiceType>>('service/all')).data
      setServices(response)
    } catch (error) {
      console.error('getServicesData', error)
      alert(`error on get services:: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  if(loading){
    return (
      <Loading />
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services availables</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Visualize, Create and comment services by Dev Supreme
            </p>
            <button
              type="button"
              className="mt-8 rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:w-auto"
              onClick={() => location.href = `service`}
            >
              Create new service
            </button>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {services.map((service) => (
              <ServiceCard
                author={service.author}
                datetime={formatDatetime(service.created_at)}
                description={service.description}
                id={service.id}
                title={service.name}
                key={service.id}
                dislike={service.dislikes}
                like={service.likes}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

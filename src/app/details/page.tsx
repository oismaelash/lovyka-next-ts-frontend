'use client';

import { ServiceType } from "@/types/service";
import { useEffect, useState } from "react";
import api from '../../service/api'
import { formatDatetime } from '../../utils'
import Comment from '../../components/Comment'
import Tag from '../../components/Tag'
import Loading from '../../components/Loading'

export default function DetailsPage() {

  const [service, setService] = useState<ServiceType>({})
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    getServiceData(id)
  }, [])

  async function getServiceData(id: string | null | undefined) {
    setLoading(true)
    try {
      const response = ((await api.get(`service/one?id=${id}`)).data)
      setService(response.data)
      setLoading(false)
    } catch (error) {
      console.error('getServiceData', error)
      alert(`error on get services:: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  async function addLike(serviceId: string | undefined) {
    try {
      setLoading(true)
      await api.post(`like/add-like?serviceId=${serviceId}`)
      getServiceData(serviceId)
    } catch (error) {
      console.error('addLike', error)
      alert(`error on set new like:: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  async function addDislike(serviceId: string | undefined) {
    setLoading(true)
    try {
      await api.post(`like/add-dislike?serviceId=${serviceId}`)
      getServiceData(serviceId)
    } catch (error) {
      console.error('addDislike', error)
      alert(`error on set new dislike:: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  async function addComment(serviceId: string | null | undefined) {
    setLoading(true)
    try {
      await api.post(`comment?serviceId=${serviceId}`, {
        text: comment
      })
      getServiceData(serviceId)
      setComment('')
    } catch (error) {
      console.error('getServiceData', error)
      alert(`error on add new comment:: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  function editService() {
    location.href = `service?id=${service.id}`
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {service.name}
            </h2>
            <div className="flex flex-col  text-xs">
              <time dateTime={service.created_at} className="text-red-500">
                Author: {service.author}
              </time>
              <time dateTime={service.created_at} className="text-gray-500">
                Created at: {formatDatetime(service.created_at)}
              </time>
              <time dateTime={service.created_at} className="text-gray-500">
                Updated at: {formatDatetime(service.update_at)}
              </time>
            </div>
            <p className="mt-8 mb-8 text-lg leading-8 text-gray-600">
              {service.description}
            </p>
            <Tag color="bg-green-500" text={`PRICE = ${service.price}`} isButton={false} />
            <Tag color="bg-blue-600" onAction={() => addLike(service.id)} text={`LIKE = ${service.likes}`} isButton={true} />
            <Tag color="bg-red-500" onAction={() => addDislike(service.id)} text={`DISLIKE = ${service.dislikes}`} isButton={true} />
            <Tag color="bg-orange-500" onAction={() => editService()} text={`EDIT SERVICE`} isButton={true} />
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10 sm:mt-4 sm:pt-4">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <input
                type="text"
                name="comment"
                id="comment"
                className=" rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="my comment here"
                value={comment}
                onChange={event => setComment(event.target.value)}
              />
              <button
                type="button"
                className="mt-4 mb-5 inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                onClick={() => addComment(service.id)}
              >
                Comment
              </button>
              <h4 className=' text-3xl text-black'>
                Comments
              </h4>
              {service.comments?.map((comment) => (
                <Comment
                  key={comment.id}
                  text={comment.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

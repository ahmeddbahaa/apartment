"use client";

import Loading from '@/components/loading';
import { getBackendUrl } from '@/utils/api';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Apartment {
  id: string
  name: string
  imageUrl: string
  description: string
}

export default function Apartment() {
  const { id } = useParams()
  const apiUrl = getBackendUrl();

  const [apartment, setApartment] = useState<Apartment | null>(null)

  useEffect(() => {
    if (id) {
      fetch(`${apiUrl}/apartments/${id}`)
        .then(response => response.json())
        .then(data => setApartment(data))
    }
  }, [id])

  if (!apartment) 
  return (<Loading/>)
  return (
    <section className=" w-[100vw] h-[100vh] bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <img src={apartment.imageUrl} alt={apartment.name} className="w-full object-cover object-center" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">{apartment.name}</h2>
            <p className="mt-2 text-gray-600">{apartment.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

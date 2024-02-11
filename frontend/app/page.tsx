"use client";
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from "next/image";
import Loading from '@/components/loading';
import { getBackendUrl } from '@/utils/api';

interface Apartment {
  id: string
  name: string
  description: string;
  imageUrl: string
}

export default function Home() {
  const [apartments, setApartments] = useState<Apartment[] | null>(null)
  const apiUrl = getBackendUrl();

  useEffect(() => {
    fetch(`${apiUrl}/apartments`)
      .then(response => response.json())
      .then(data => setApartments(data))
  }, [])
  if (!apartments)
    return (<Loading />)
  return (
    <main className="mx-auto max-w-[1960px] p-4 bg-slate-950">
      <h1 className="text-4xl font-bold mb-4 text-white/75">Apartments</h1>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
          <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
            BEST Apartments
          </h1>
          <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
            Find the best apartments in the world
          </p>
        </div>
        {apartments.map(({ id, imageUrl }) => (
          <Link
            key={id}
            href={`/${id}`}
            as={`/${id}`}
            shallow
            className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              alt="Apartment Image Banner"
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: "translate3d(0, 0, 0)" }}
              placeholder="blur"
              blurDataURL={imageUrl}
              src={imageUrl}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
            />
          </Link>
        ))}
      </div>
    </main>
  )
}
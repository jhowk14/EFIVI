/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/7dMkNT2d4MN
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
*/


import { CarouselItem, CarouselContent, Carousel, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "./carolsel";

type Images = {
  alt: string;
  src: string;
  descricão: string;
  title: string;
}

export function Carousel2({ images }: { images: Images[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              alt={image.alt}
              className="w-full h-[700px] object-cover rounded-t-lg"
              height="700"
              src={image.src}
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="800"
            />
            <div className="bg-gray-100 text-gray-950 p-4 text-center rounded-b-lg">
              <h3 className="text-4xl font-bold">{image.title}</h3>
              <p className="text-xl font-semibold">{image.descricão}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/50 p-2 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
        <ChevronLeftIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/50 p-2 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
        <ChevronRightIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
      </CarouselNext>
    </Carousel>
  )
}
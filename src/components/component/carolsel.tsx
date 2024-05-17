import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import Image from "next/image";

type Images = {
  alt: string;
  src: string;
}

export function Carolsel({ images }: { images: Images[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              alt={image.alt}
              className="w-full h-[600px] object-cover rounded-lg"
              height="400"
              src={image.src}
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="1000"
            />
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

export function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

export function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

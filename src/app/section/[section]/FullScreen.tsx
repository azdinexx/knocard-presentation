import Image from "next/image";

export default function FullscreenImageSlider({ images, index, setIndex, setFullscreen }: { images: string[], index: number, setIndex: (index: number) => void, setFullscreen: (fullscreen: boolean) => void }) {

    return (
        <div className='fixed top-0 left-0 z-50 w-screen h-screen bg-gradient-to-r from-[#007CB4] to-[#00BAF2] flex flex-col '>
            <main className="max-w-7xl w-full h-full mx-auto relative py-5">
                <p className='text-white text-2xl font-bold'>
                    {
                        images[index].split('/').pop()
                    }
                </p>
                <div className="flex flex-col items-center justify-center gap-4 h-[65%] overflow-auto mt-10">

                    <Image
                        src={images[index]}
                        alt='image'
                        width={400}
                        height={2000}
                        className='h-full w-auto rounded-lg'
                    />
                </div>
                <ShareAndExit setFullscreen={setFullscreen} />

            </main>
            <div className="absolute  bottom-0 left-0 w-full h-[220px]  flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex  gap-4 ">
                        {
                            images.map((image, i) => (
                                <Image
                                    onClick={() => setIndex(i)}
                                    key={i}
                                    src={image}
                                    alt='image'
                                    width={100}
                                    height={100}
                                    className='w-auto h-[90px] object-cover rounded-md'
                                />
                            ))
                        }
                    </div>
                    <div className="flex gap-4 ">
                        {
                            images.map((image, i) => (
                                <div key={i} className="w-2 h-2 bg-white rounded-full"
                                    style={{
                                        backgroundColor: i === index ? '#007CB4' : 'white'
                                    }}
                                ></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function ShareAndExit({ setFullscreen }: { setFullscreen: (fullscreen: boolean) => void }) {
    return (
        <div className='flex  items-center gap-6 absolute top-6 right-10'>

            <button
                onClick={() => setFullscreen(false)}
            ><svg width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="80" height="80" rx="15" fill="white" />
                    <path d="M37.916 42.0827L20.8327 59.166" stroke="#007CB4" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.1631 50.833V60.833H29.1631" stroke="#007CB4" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M42.0869 60.833H46.2536C56.6702 60.833 60.8369 56.6663 60.8369 46.2497V33.7497C60.8369 23.333 56.6702 19.1663 46.2536 19.1663H33.7536C23.3369 19.1663 19.1702 23.333 19.1702 33.7497V37.9163" stroke="#007CB4" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button><svg width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" rx="15" fill="white" />
                <path d="M61.4178 35.7717L45.7928 20.1467C45.5744 19.9281 45.2961 19.7791 44.993 19.7187C44.69 19.6582 44.3758 19.689 44.0902 19.8071C43.8046 19.9252 43.5605 20.1254 43.3886 20.3823C43.2168 20.6391 43.125 20.9412 43.1249 21.2503V29.1311C38.0585 29.5647 32.4628 32.0452 27.8593 35.9495C22.3163 40.6526 18.8651 46.7131 18.1405 53.0139C18.0839 53.5038 18.1832 53.999 18.4243 54.4292C18.6655 54.8593 19.0361 55.2024 19.4836 55.4097C19.931 55.617 20.4324 55.6778 20.9165 55.5836C21.4005 55.4894 21.8425 55.245 22.1796 54.885C24.328 52.5979 31.9725 45.3655 43.1249 44.7288V52.5003C43.125 52.8093 43.2168 53.1114 43.3886 53.3682C43.5605 53.6251 43.8046 53.8253 44.0902 53.9434C44.3758 54.0615 44.69 54.0923 44.993 54.0318C45.2961 53.9714 45.5744 53.8224 45.7928 53.6038L61.4178 37.9788C61.7101 37.6859 61.8742 37.289 61.8742 36.8753C61.8742 36.4615 61.7101 36.0647 61.4178 35.7717ZM46.2499 48.7288V43.1253C46.2499 42.7109 46.0853 42.3134 45.7922 42.0204C45.4992 41.7274 45.1018 41.5628 44.6874 41.5628C39.203 41.5628 33.8612 42.9944 28.8104 45.8206C26.2381 47.2663 23.8413 49.0044 21.6678 51.0003C22.8007 46.344 25.6561 41.9163 29.8807 38.3323C34.4159 34.4866 39.9511 32.1878 44.6874 32.1878C45.1018 32.1878 45.4992 32.0231 45.7922 31.7301C46.0853 31.4371 46.2499 31.0397 46.2499 30.6253V25.0237L58.1034 36.8753L46.2499 48.7288Z" fill="#007CB4" />
            </svg>
            </button>
        </div>
    )
}
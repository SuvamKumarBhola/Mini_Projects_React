import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([])
    const [currentSlider, setCurrentSlider] = useState(0)
    const [errorMsg, setErrorMsg] = useState('')
    const [loadingState, setLoadingState] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoadingState(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()
            if (data) {
                setImages(data)
                setLoadingState(false)
            }
        } catch (e) {
            setErrorMsg(e.message)
            setLoadingState(false)
        }
    }

    useEffect(() => {
        if (url) fetchImages(url)
    }, [url])

    function handlePrevious() {
        setCurrentSlider(currentSlider === 0 ? images.length - 1 : currentSlider - 1)
    }

    function handleNext() {
        setCurrentSlider(currentSlider === images.length - 1 ? 0 : currentSlider + 1)
    }

    if (loadingState) {
        return (
            <div className="flex items-center justify-center bg-white py-20">
                <div className="text-center">
                    <div className="inline-block w-12 h-12 border-3 border-gray-300 border-t-gray-900 rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-700 text-lg">Loading images...</p>
                </div>
            </div>
        )
    }

    if (errorMsg) {
        return (
            <div className="flex items-center justify-center bg-white py-20">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
                    <p className="text-red-600">Error occurred: {errorMsg}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center bg-gray-50 p-8 py-12">
            <div className="relative w-full max-w-3xl">
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-96 bg-gray-100">
                        {images && images.length > 0 ? (
                            <img
                                src={images[currentSlider]?.download_url || images[currentSlider]?.url}
                                alt={images[currentSlider]?.author || `Slide ${currentSlider + 1}`}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full">
                                <p className="text-gray-400 text-xl">No images available</p>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium shadow-md">
                            {currentSlider + 1} / {images.length}
                        </div>
                    </div>

                    {/* Image Info */}
                    {images[currentSlider]?.author && (
                        <div className="bg-white p-4 border-t border-gray-100">
                            <p className="text-gray-600 text-sm">
                                Photo by <span className="text-gray-900 font-medium">{images[currentSlider].author}</span>
                            </p>
                        </div>
                    )}
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlider(index)}
                            className={`transition-all duration-300 ${index === currentSlider
                                    ? 'w-8 h-2.5 bg-gray-800 rounded-full'
                                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 rounded-full'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        setHover(rating);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
                    Rate Your Experience
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Click on the stars to rate
                </p>

                <div className="flex justify-center gap-2 mb-6">
                    {[...Array(noOfStars)].map((_, index) => {
                        index += 1;
                        const isActive = index <= (hover || rating);

                        return (
                            <FaStar
                                key={index}
                                className={`cursor-pointer transition-all duration-200 ${isActive
                                        ? 'text-yellow-400 scale-110 drop-shadow-lg'
                                        : 'text-gray-300 hover:text-gray-400'
                                    }`}
                                onClick={() => handleClick(index)}
                                onMouseMove={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave()}
                                size={50}
                            />
                        );
                    })}
                </div>

                {rating > 0 && (
                    <div className="text-center animate-fade-in">
                        <p className="text-2xl font-semibold text-gray-700 mb-2">
                            {rating} out of {noOfStars} stars
                        </p>
                        <p className="text-lg text-gray-600">
                            {rating === 1 && "We'll do better next time 😔"}
                            {rating === 2 && "Thanks for your feedback 🙂"}
                            {rating === 3 && "Good to know! 😊"}
                            {rating === 4 && "Great! We're happy you enjoyed it 😄"}
                            {rating === 5 && "Awesome! Thank you so much! 🎉"}
                        </p>
                    </div>
                )}

                {rating > 0 && (
                    <button
                        onClick={() => setRating(0)}
                        className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        Reset Rating
                    </button>
                )}
            </div>
        </div>
    );
}

export default StarRating;
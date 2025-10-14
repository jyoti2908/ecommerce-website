function Display() {
    return (
        <div className="flex justify-center gap-4 px-4 py-4 bg-gray-100 mt-8">
            <div className="mt-6">
                <div className="flex gap-6 p-2 justify-start">
                    <div>
                        <img src="offer1.webp" className="h-56 w-96 
                    transition-transform duration-300 ease-in-out transform hover:-translate-y-2" />
                    </div>
                    <div>
                        <img src="offer2.webp" className="h-56 w-96 
                    transition-transform duration-300 ease-in-out transform hover:-translate-y-2" />
                    </div>
                </div>
                <div className="flex gap-6 p-2 justify-start">
                    <div>
                        <img src="offer3.webp" className="h-56 w-96 
                    transition-transform duration-300 ease-in-out transform hover:-translate-y-2" />
                    </div>
                    <div>
                        <img src="offer4.webp" className="h-56 w-96 
                    transition-transform duration-300 ease-in-out transform hover:-translate-y-2" />
                    </div>
                </div>
                <div className="flex gap-6 p-2 justify-start">
                    <div>
                        <img src="offer5.webp" className="h-56 w-96 
                    transition-transform duration-300 ease-in-out transform hover:-translate-y-2" />
                    </div>
                    <div>
                        <img src="offer6.webp" className="h-56 w-96 
                    transition-transform duration-300 ease-in-out transform hover:-translate-y-2" />
                    </div>
                </div>

            </div>
            <div>
                <img src="shop.webp" className="h-full w-96" />
            </div>
        </div>
    )
}
export default Display;
import React from 'react';

const Work = () => {
    const works = [
        {
            id: 1,
            title: "Amara Raja",
            image: 'images/raja.jpg',
            link: 'https://www.amararaja.com/'
        },
        {
            id: 2,
            title: "Dr. Purnima",
            image: "images/skinclinic.jpg",
            link: 'https://www.advanceskinhairclinic.com/'
        },
        {
            id: 3,
            title: "ProFlowers",
            image: "images/flowers.jpg",
            link: 'https://www.proflowers.com/'
        },
        {
            id: 4,
            title: "MagicPin",
            image: "images/magicpin.jpg",
            link: 'https://www.magicpin.in/'
        },
        {
            id: 5,
            title: "KrishnaAayurveda",
            image: "images/yurveda.jpg",
            link: 'https://krishnaayurved.com/'
        },
        {
            id: 6,
            title: "FruitBae",
            image: "images/fruit.jpg",
            link: 'https://www.fruitbae.com/'
        },
        {
            id: 7,
            title: "FeedoCenter",
            image: "images/feed.png",
            link: 'https://www.fruitbae.com/'
        },
        {
            id: 8,
            title: "EarnX",
            image: "images/earnx.png",
            link: 'https://earnxj.vercel.app/'
        },
    ];

    return (
        <div className="container mx-auto px-4">
            <div>
                <h2 className="font-bold text-3xl text-pink-600">Works</h2>
                <p className="text-gray-500">Here are some of the projects I've worked on.</p>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 mt-5">
                    {works.map((work) => (
                        <a
                            key={work.id}
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="relative w-full h-64 overflow-hidden rounded-lg">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-linear hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-center">
                                    <h5 className="text-white text-lg font-semibold">{work.title}</h5>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;

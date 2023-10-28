const splide = new Splide('.splide',{
    type: 'slide',
    perPage: 1,
    pagination: false,
    wheel: true,
    autoplay:true,
    interval: 3800,
    start: 4,
    speed: 500,
    permove: 2
}).move()
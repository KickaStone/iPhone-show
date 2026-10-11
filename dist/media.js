// Product images: Apple's model guide, https://support.apple.com/en-us/108044.
// Remote assets remain owned by Apple and are loaded from Apple's CDN.
const imageBase='https://cdsassets.apple.com/live/7WUAS350/images/iphone/';
const productImages={
2007:'iphone-iphone-original-colors.jpg',2008:'iphone-iphone3g-colors.jpg',2009:'iphone-iphone3gs-colors.jpg',2010:'iphone-iphone4-colors.jpg',2011:'iphone-iphone4s-colors.jpg',2012:'iphone-iphone5-colors.jpg',2013:'iphone-iphone5s-colors.jpg',2014:'iphone-iphone6-colors.jpg',2015:'iphone-6s-colors.jpg',2016:'iphone-7/iphone7-colors.jpg',2017:'iphone-x-colors.jpg',2018:'iphone-xs-colors.jpg',2019:'identify-iphone-11-colors.jpg',2020:'2021-iphone12-colors.png',2021:'2022-spring-iphone13-colors.png',2022:'iphone-14-pro-colors.png',2023:'fall-2023-iphone-colors-iphone-15.png',2024:'iphone-16-colors.png',2025:'iphone-17-colors.png'
};
const launchVideos=[
{year:2007,id:'2MlSJLPxGYs',title:'The original iPhone introduction',date:'January 9, 2007',credit:'Macworld keynote · archival upload',description:'Steve Jobs introduces the original iPhone at Macworld in San Francisco. This historical recording is hosted by an independent archive.'},
{year:2020,id:'KR0g-1hnQPA',title:'Hi, Speed. Meet iPhone 12.',date:'October 13, 2020',credit:'Apple · official event',description:'The launch of iPhone 12, iPhone 12 mini, and the iPhone 12 Pro family, with 5G and MagSafe.'},
{year:2023,id:'ZiP1l7jlIIA',title:'Wonderlust. The iPhone 15 launch.',date:'September 12, 2023',credit:'Apple · official event',description:'The introduction of iPhone 15 and iPhone 15 Pro. The iPhone 15 segment begins at 34:04.',start:2044},
{year:2024,id:'uarNiSl_uh4',title:'It’s Glowtime. Meet iPhone 16.',date:'September 9, 2024',credit:'Apple · official event',description:'Watch the announcement of the iPhone 16 family, Camera Control, and the next chapter for Apple Intelligence.'},
{year:2025,id:'H3KnMyojEQU',title:'Awe dropping. A new chapter.',date:'September 9, 2025',credit:'Apple · official event',description:'The original launch event for iPhone 17, iPhone Air, and the iPhone 17 Pro family.'}
];

window.onload = function(){

    maptilersdk.config.apiKey = 'xK45SpfS3H0Qvn5ytCae';
      const map = new maptilersdk.Map({
        container: 'map', // container's id or the HTML element to render the map
        style: maptilersdk.MapStyle.STREETS,
        center: [103.812254, 1.365789], // starting position [lng, lat]
        // center: [103.62662018, 1.2125578], // starting position [lng, lat]
        zoom: 11, // starting zoom
      });

    //Central Region
    const city_sq = new maptilersdk.Marker()
    .setLngLat([103.85616568355918, 1.3114646643885177])
    .addTo(map);
    const toa_payoh = new maptilersdk.Marker()
    .setLngLat([103.84954584003627, 1.3331037173051654])
    .addTo(map);
    const orchard = new maptilersdk.Marker()
    .setLngLat([103.83950601120095, 1.3006486679862268])
    .addTo(map);
    const united_square = new maptilersdk.Marker()
    .setLngLat([103.84358811120079, 1.3176467786600121])
    .addTo(map);
    const aperia = new maptilersdk.Marker()
    .setLngLat([103.86450655352967, 1.3098425933043278])
    .addTo(map);
    const chinatown = new maptilersdk.Marker()
    .setLngLat([103.84496346702306, 1.2853324737154388])
    .addTo(map);
    const marina = new maptilersdk.Marker()
    .setLngLat([103.85768852469423, 1.2913142903715649])
    .addTo(map);
    const arc = new maptilersdk.Marker()
    .setLngLat([103.80172529585876, 1.2740539223955822])
    .addTo(map);
    const kallang = new maptilersdk.Marker()
    .setLngLat([103.87646980935186, 1.3023526896587247])
    .addTo(map);

    //North East Region
    const nex = new maptilersdk.Marker()
    .setLngLat([103.8723550553785, 1.3510511708387118])
    .addTo(map);
    const rivervale = new maptilersdk.Marker()
    .setLngLat([103.90485552654296, 1.3922349633186988])
    .addTo(map);
    const seletar = new maptilersdk.Marker()
    .setLngLat([103.87614806702271, 1.3914272350340944])
    .addTo(map);
    const oasis = new maptilersdk.Marker()
    .setLngLat([103.9135093014052, 1.4030986341163596])
    .addTo(map);
    const hougang_mall = new maptilersdk.Marker()
    .setLngLat([103.89414956092523, 1.3726373364956737])
    .addTo(map);
    const hougang1 = new maptilersdk.Marker()
    .setLngLat([103.879362, 1.375396])
    .addTo(map);
    const heartland = new maptilersdk.Marker()
    .setLngLat([103.88532201489846, 1.3596084342334658])
    .addTo(map);

    //East Region
    const paya_lebar = new maptilersdk.Marker()
    .setLngLat([103.89303973024087, 1.317742918651272])
    .addTo(map);
    const amk = new maptilersdk.Marker()
    .setLngLat([103.84741754610683, 1.3701117125715574])
    .addTo(map);
    const east_point = new maptilersdk.Marker()
    .setLngLat([103.95218676986562, 1.3463701017301715])
    .addTo(map);
    const white_sands = new maptilersdk.Marker()
    .setLngLat([103.94938476887185, 1.372616691046537])
    .addTo(map);
    const city_point = new maptilersdk.Marker()
    .setLngLat([103.96219258051632, 1.3344955690361362])
    .addTo(map);
    const tampines1 = new maptilersdk.Marker()
    .setLngLat([103.94365263818733, 1.3528327672463198])
    .addTo(map);
    const tampines_central = new maptilersdk.Marker()
    .setLngLat([103.94374919770739, 1.3528327672463198])
    .addTo(map);
    const djitsun = new maptilersdk.Marker()
    .setLngLat([103.92948792469402, 1.3263840996315073])
    .addTo(map);

    // West Region
    const clememti = new maptilersdk.Marker()
    .setLngLat([103.76494756887189, 1.3123061931012872])
    .addTo(map);
    const star_vista = new maptilersdk.Marker()
    .setLngLat([103.78803928421414, 1.3070303633097682])
    .addTo(map);
    const hillion = new maptilersdk.Marker()
    .setLngLat([103.76278997072066, 1.3788150132081307])
    .addTo(map);

    //North Region
    const wood_square = new maptilersdk.Marker()
    .setLngLat([103.78873126424594, 1.438674188310374])
    .addTo(map);
    const sembawang = new maptilersdk.Marker()
    .setLngLat([103.81973623297286, 1.4485159577855116])
    .addTo(map);
    const sun_plaza = new maptilersdk.Marker()
    .setLngLat([103.81974234003609, 1.4484608558861871])
    .addTo(map);
    const ytp = new maptilersdk.Marker()
    .setLngLat([, 103.74651331120059, 1.3969943602450796])
    .addTo(map);
    const khatib = new maptilersdk.Marker()
    .setLngLat([103.83075575537832, 1.4147550331922552])
    .addTo(map);
}
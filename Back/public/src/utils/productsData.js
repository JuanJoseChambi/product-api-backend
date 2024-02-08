"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Productos_1 = __importDefault(require("../models/Productos"));
const productsData = [
    {
        "_id": "6586177c054c7b7c9fee808c",
        "name": "Zapatillas Deportivas",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703894382/ProductApi/dttsiqhbewym5gur4npw.jpg",
        "description": "Zapatillas deportivas de alta gama con tecnología Air Max para una máxima comodidad y rendimiento.",
        //"brand": "Nike",
        "price": 129.99,
        "category": "Zapatillas Deportivas",
        "type": "Ropa",
        "stock": 100,
        "available_colors": [
            "Negro",
            "Blanco",
            "Rojo"
        ],
        "sizes": [
            "US 7",
            "US 8",
            "US 9",
            "US 10"
        ],
        "createdAt": "2023-12-22T23:10:52.970Z",
        "updatedAt": "2023-12-30T01:20:39.814Z"
    },
    {
        "_id": "6586177c054c7b7c9fee808d",
        "name": "Camiseta de Algodón Negro",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703893547/ProductApi/ac500evbbudjkqse7ofz.jpg",
        "description": "Camiseta de algodón suave y cómoda, perfecta para el uso diario. Diseño clásico de Lownull.",
        //"brand": "Lownull",
        "price": 15.55,
        "category": "Remera",
        "type": "Ropa",
        "stock": 50,
        "available_colors": [
            "Negro",
            "Gris",
            "Rojo"
        ],
        "sizes": [
            "XL",
            "S",
            "M",
            "L"
        ],
        "createdAt": "2023-12-22T23:10:52.971Z",
        "updatedAt": "2024-01-01T20:58:05.309Z"
    },
    {
        "_id": "6586177c054c7b7c9fee8090",
        "name": "Auriculares Inalambricos WH-1000XM4",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703893508/ProductApi/yenck1z8fchx7gln29ni.jpg",
        "description": "Auriculares con cancelación de ruido líder en la industria, sonido premium y larga duración de batería.",
        //"brand": "Sony",
        "price": 299.99,
        "category": "Auriculares",
        "type": "Tecnología",
        "stock": 15,
        "available_colors": [
            "Negro",
            "Plata"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.971Z",
        "updatedAt": "2023-12-30T01:32:22.229Z"
    },
    {
        "_id": "6586177c054c7b7c9fee808e",
        "name": "Camiseta de Algodón Blanca",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703895061/ProductApi/bumj05dch0esx7b4nd62.jpg",
        "description": "Camiseta de algodón suave y cómoda, perfecta para el uso diario. Diseño clásico de Lownull.",
        //"brand": "Lownul",
        "price": 15.55,
        "category": "Remera",
        "type": "Ropa",
        "stock": 40,
        "available_colors": [
            "Blanco"
        ],
        "sizes": [
            "XL",
            "S",
            "M",
            "L"
        ],
        "createdAt": "2023-12-22T23:10:52.971Z",
        "updatedAt": "2024-01-01T20:58:09.894Z"
    },
    {
        "_id": "6586177c054c7b7c9fee8092",
        "name": "Florero",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703900065/ProductApi/qfaqdywxfnlweukksuvq.jpg",
        "description": "Decoracion de Flores para centros de mesa y hogaers, con flores artificiales y cero contaminacion",
        //"brand": "Floristery",
        "price": 35.99,
        "category": "Naturaleza",
        "type": "Decoracion",
        "stock": 20,
        "available_colors": [
            "Rosa",
            "Rojo",
            "Azul"
        ],
        "sizes": [
            "Pequeño",
            "Mediano",
            "Grande"
        ],
        "createdAt": "2023-12-22T23:10:52.971Z",
        "updatedAt": "2023-12-30T01:36:26.154Z"
    },
    {
        "_id": "6586177c054c7b7c9fee8093",
        "name": "Cámara DSLR EOS 90D",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703900324/ProductApi/k8plu1vdxdq9cplphsyd.jpg",
        "description": "Cámara réflex digital con sensor APS-C de 32.5 megapíxeles. Captura imágenes y videos de alta calidad.",
        //"brand": "Canon",
        "price": 1299.99,
        "category": "Camaras",
        "type": "Electrónica",
        "stock": 12,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.971Z",
        "updatedAt": "2023-12-30T01:39:28.197Z"
    },
    {
        "_id": "6586177c054c7b7c9fee808f",
        "name": "Smartwatch Fitbit Versa 3",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703900419/ProductApi/s8x3vjtd0dubd8hh3r4l.jpg",
        "description": "Smartwatch con monitoreo de ritmo cardíaco, seguimiento de sueño y GPS integrado. Compatible con iOS y Android.",
        //"brand": "Fitbit",
        "price": 149.99,
        "category": "Wearables",
        "type": "Tecnología",
        "stock": 30,
        "available_colors": [
            "Negro",
            "Rosa",
            "Gris"
        ],
        "sizes": [
            "S",
            "L"
        ],
        "createdAt": "2023-12-22T23:10:52.971Z",
        "updatedAt": "2023-12-30T01:40:20.626Z"
    },
    {
        "_id": "6586177c054c7b7c9fee8096",
        "name": "Set de Herramientas Craftsman de 200 Piezas",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703900457/ProductApi/uioenzho5uyr3f95lyyp.jpg",
        "description": "Set completo de herramientas para mecánicos y entusiastas del bricolaje. Incluye llaves, destornilladores y más.",
        //"brand": "Craftsman",
        "price": 249.99,
        "category": "Herramientas",
        "type": "Hogar y Herramientas",
        "stock": 15,
        "available_colors": [
            "Rojo",
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.971Z",
        "updatedAt": "2023-12-30T01:41:22.133Z"
    },
    {
        "_id": "6586177c054c7b7c9fee8097",
        "name": "Guitarra Acústica 214ce ",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703900531/ProductApi/u0xjkqfvrhovriwqarif.jpg",
        "description": "Guitarra acústica con tapa de abeto sólido y cuerpo de palisandro. Sonido claro y cálido, ideal para músicos de todos los niveles.",
        //"brand": "Taylor",
        "price": 999.99,
        "category": "Guitarras",
        "type": "Instrumentos Musicales",
        "stock": 8,
        "available_colors": [
            "Natural"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2023-12-30T01:43:00.430Z"
    },
    {
        "_id": "6586177c054c7b7c9fee8098",
        "name": "Silla de Oficina Ergonómica ",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703900609/ProductApi/olpxfgcoj480g4vv410m.jpg",
        "description": "Silla de oficina de diseño ergonómico con soporte lumbar ajustable. Comodidad y estilo para largas jornadas de trabajo.",
        //"brand": "Herman Miller",
        "price": 49.55,
        "category": "Sillas",
        "type": "Muebles",
        "stock": 10,
        "available_colors": [
            "Negro",
            "Blanco",
            "Gris"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2023-12-30T02:03:15.961Z"
    },
    {
        "_id": "6586177c054c7b7c9fee8099",
        "name": "Silla de Comedor",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703901777/ProductApi/uopjp0vhf1bbap2e5lnu.jpg",
        "description": "Silla de Comedor, diseño moderno.\nComodo y con estilo",
        //"brand": "Muster",
        "price": 24.99,
        "category": "Sillas",
        "type": "Muebles",
        "stock": 10,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "Unico"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2023-12-30T02:02:58.207Z"
    },
    {
        "_id": "6586177c054c7b7c9fee8091",
        "name": "Bicicleta de Montaña Cannondale Trail 5",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703901856/ProductApi/bxfs9lbraioosmmbwzwf.jpg",
        "description": "Bicicleta de montaña con cuadro de aluminio y componentes de alta calidad. Perfecta para senderos y terrenos difíciles.",
        //"brand": "Cannondale",
        "price": 899.99,
        "category": "Deportes y Aire Libre",
        "type": "Deportes y Aire Libre",
        "stock": 10,
        "available_colors": [
            "Negro/Azul",
            "Rojo/Negro"
        ],
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "createdAt": "2023-12-22T23:10:52.971Z",
        "updatedAt": "2023-12-30T02:04:20.132Z"
    },
    {
        "_id": "6586177c054c7b7c9fee809b",
        "name": "Auriculares Inalámbricos",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703902302/ProductApi/kwkmjwfnb5yvnfrws2ds.jpg",
        "description": "\nAuriculares inalámbricos compactos y elegantes con calidad de sonido premium y comodidad duradera para una experiencia auditiva sin ataduras.",
        //"brand": "TechScore",
        "price": 149.99,
        "category": "Auriculares",
        "type": "Tecnologia",
        "stock": 15,
        "available_colors": [
            "Blanco",
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2023-12-30T02:13:21.712Z"
    },
    {
        "_id": "6586177c054c7b7c9fee809c",
        "name": "Centro de Mesa milano Blanco",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703902655/ProductApi/sznwc388vmd3fx6bxrdj.jpg",
        "description": "Centro de mesa blanco, sofisticado y elegante, perfecto para resaltar la belleza en cualquier ocasión especial y decoración.",
        //"brand": "DecRoff",
        "price": 40,
        "category": "Centro de Mesa",
        "type": "Decoracion",
        "stock": 10,
        "available_colors": [
            "Blanco",
            "Negro"
        ],
        "sizes": [
            "Unico"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2023-12-30T02:17:36.359Z"
    },
    {
        "_id": "6586177c054c7b7c9fee809d",
        "name": "Gorra Blanca Lisa",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703903042/ProductApi/lo3ykpeomxbftupucj03.jpg",
        "description": "Gorra blanca lisa, elegante y versátil. Ideal para complementar tu estilo con simplicidad y comodidad en cualquier ocasión",
        //"brand": "Lownull",
        "price": 15.55,
        "category": "Gorras",
        "type": "Accesorios",
        "stock": 8,
        "available_colors": [
            "Blanco"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2023-12-30T02:24:04.305Z"
    },
    {
        "_id": "6586177c054c7b7c9fee809e",
        "name": "Remera Oversize de Algodón Verde",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703904022/ProductApi/gwihs2x0yfonenwikrmt.jpg",
        "description": "Remera oversize verde, estilo relajado y moderno. Color vibrante y cómodo, perfecta para looks informales y cómodos",
        //"brand": "Lownull",
        "price": 18.99,
        "category": "Remera",
        "type": "Ropa",
        "stock": 23,
        "available_colors": [
            "Verde"
        ],
        "sizes": [
            "S",
            "M",
            "XL"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2023-12-30T02:40:23.871Z"
    },
    {
        "_id": "6586177c054c7b7c9fee809f",
        "name": "Scooter electrico e-best platinum motor 350w bat",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704141700/ProductApi/as7t3c9xxtiawwymd7ri.jpg",
        "description": "Scooter eléctrico E-Best Platinum, potente motor de 350W, batería de alto rendimiento. Movilidad eficiente y sostenible, diseño moderno.",
        //"brand": "TechShore",
        "price": 89.99,
        "category": "Scooters",
        "type": "Deportes y Aire Libre",
        "stock": 2,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T20:41:47.809Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80a0",
        "name": "Portátil Ultrabook Dell XPS 13",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704135241/ProductApi/lv4hxvhb9wjkt4on3eap.jpg",
        "description": "Portátil ultraligero con pantalla InfinityEdge y procesador Intel Core i7. Ideal para trabajo y entretenimiento.",
        //"brand": "Dell",
        "price": 899.99,
        "category": "Laptop",
        "type": "Tecnología",
        "stock": 20,
        "available_colors": [
            "Plata",
            "Negro"
        ],
        "sizes": [
            "13 pulgadas",
            "15 pulgadas"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T21:02:32.416Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80a1",
        "name": "Auriculares Bluetooth Mpow H7 ",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704135573/ProductApi/mbhpec9vubotrsybxlj7.jpg",
        "description": "Auriculares inalámbricos con calidad de sonido nítida, diseño cómodo, control táctil, y larga duración de batería para disfrutar música.",
        //"brand": "TechShore",
        "price": 289.99,
        "category": "Auriculares",
        "type": "Tecnología",
        "stock": 10,
        "available_colors": [
            "Azul",
            "Negro"
        ],
        "sizes": [
            "Unico"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T18:59:32.430Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80a2",
        "name": " Bicicleta Montañera Giant Talon 4 GE",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704135844/ProductApi/ewaz6fmgaqd26n94tvy4.jpg",
        "description": "\nBicicleta todoterreno diseñada para aventuras off-road, con características avanzadas y rendimiento excepcional en terrenos montañosos y accidentados.",
        //"brand": "Talon",
        "price": 499.99,
        "category": "Bicicletas",
        "type": "Deportes y Aire Libre",
        "stock": 3,
        "available_colors": [
            "Azul",
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T19:04:06.614Z"
    },
    {
        "_id": "6586177c054c7b7c9fee8095",
        "name": "Gorra Negra diseño Diamante",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703903286/ProductApi/gxlqza8newbaufnpo3ee.jpg",
        "description": "Gorra negra con elegante diseño de diamante, un accesorio sofisticado y moderno para realzar tu estilo diario.",
        //"brand": "Lownull",
        "price": 15.55,
        "category": "Gorras",
        "type": "Accesorios",
        "stock": 12,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.971Z",
        "updatedAt": "2023-12-30T02:28:07.107Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80a4",
        "name": "Teclado Mecánico Corsair K70 RGB",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704135890/ProductApi/zeivhwuhqoar90geurw6.jpg",
        "description": "Teclado mecánico para juegos con retroiluminación RGB personalizable y switches Cherry MX. Construcción duradera y diseño ergonómico.",
        //"brand": "Corsair",
        "price": 149.99,
        "category": "Teclados",
        "type": "Tecnología",
        "stock": 25,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "Completo"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T21:02:24.174Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80a5",
        "name": "Monopoly",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704136085/ProductApi/omow4k2pnpoquel7ympv.jpg",
        "description": "\nClásico juego de mesa que desafía estrategias y amistades. Compra, negocia y construye para ser el amo del monopolio.",
        //"brand": "Hasbro",
        "price": 59.99,
        "category": "Juegos de Mesa",
        "type": "Juguetes y Juegos",
        "stock": 5,
        "available_colors": [
            "Unico"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T19:11:46.803Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80a6",
        "name": "Juego de Mesa Catan",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704136344/ProductApi/qffmfffdul5lbqompljf.jpg",
        "description": "Juego de estrategia y negociación para toda la familia. Construye y comercia para ser el colonizador más exitoso en la isla de Catan.",
        //"brand": "Catan Studio",
        "price": 59.99,
        "category": "Juegos de Mesa",
        "type": "Juguetes y Juegos",
        "stock": 5,
        "available_colors": [
            "Unico"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T19:12:23.583Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80a7",
        "name": "Mochila North Face Recon",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704136352/ProductApi/ocgqwz4fc9o4ixp2mi2p.jpg",
        "description": "Mochila resistente y versátil con compartimento para laptop. Ideal para uso diario o excursiones.",
        //"brand": "The North Face",
        "price": 89.99,
        "category": "Mochilas",
        "type": "Moda y Accesorios",
        "stock": 18,
        "available_colors": [
            "Negro",
            "Gris",
            "Azul"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T20:52:02.311Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80a8",
        "name": "Mesa de comedor redonda extensible metálica y tapa madera color blanco",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704141731/ProductApi/x0khlds0agaqhluifr9l.jpg",
        "description": "Elegante mesa comedor redonda con diseño extensible, base metálica resistente y tapa de madera blanca, ideal para espacios modernos.",
        //"brand": "Muster ",
        "price": 35.99,
        "category": "Mesas",
        "type": "Muebles",
        "stock": 20,
        "available_colors": [
            "Blanco",
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T20:42:10.609Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80a9",
        "name": "Guitarra Criolla",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704141838/ProductApi/nyqozxjqrv4h7tprwhhe.jpg",
        "description": "Guitarra criolla con tono cálido, cuerdas de nylon, ideal para expresar tu creatividad musical con elegancia y estilo.",
        //"brand": "Criolla",
        "price": 99.99,
        "category": "Guitarras",
        "type": "Instrumentos Musicales",
        "stock": 8,
        "available_colors": [
            "Unico"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T20:45:09.119Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80aa",
        "name": "Gorra Negra Lisa",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704142122/ProductApi/zdnibpe0sfsuutr256qv.png",
        "description": "Gorra negra lisa, elegante y versátil. Ideal para cualquier ocasión, añade estilo y confort a tu vestuario diario.",
        //"brand": "LowNull",
        "price": 15.99,
        "category": "Gorras",
        "type": "Accesorios",
        "stock": 15,
        "available_colors": [
            "Negro",
            "Blanco"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T20:48:52.009Z"
    },
    {
        "_id": "6586177c054c7b7c9fee809a",
        "name": "Mochila JanSport",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704142489/ProductApi/vlgwkwayuc9lwndw25e1.jpg",
        "description": "\nMochila resistente y versátil con amplio espacio, diseño moderno, cómodas correas y bolsillos funcionales para llevar tus pertenencias diarias.",
        //"brand": "JanSport",
        "price": 59.99,
        "category": "Mochilas",
        "type": "Moda y Accesorios",
        "stock": 15,
        "available_colors": [
            "Negro",
            "Gris"
        ],
        "sizes": [
            "Unico"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T20:54:48.866Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80ac",
        "name": "Remera Nirvana",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704142646/ProductApi/dwu9wwgoblkgabuejtqf.jpg",
        "description": "Remera de algodón con diseño inspirado en Nirvana, perfecta para expresar tu estilo y admiración por la música alternativa.",
        //"brand": "Nirvana",
        "price": 20,
        "category": "Remera",
        "type": "Ropa",
        "stock": 25,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "XL",
            "L"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T20:57:29.852Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80ad",
        "name": "Teclado Gamer Razer Blackwidow V3 Tenkeyless",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704142863/ProductApi/icxef6bndonxvy2ev9km.jpg",
        "description": "\nTeclado gamer tenkeyless con iluminación RGB, interruptores mecánicos, diseño compacto y ergonómico para una experiencia de juego inmersiva.",
        //"brand": "Razer",
        "price": 149.99,
        "category": "Teclados",
        "type": "Tecnologia",
        "stock": 5,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T21:01:05.014Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80ae",
        "name": "Monitor Gaming Alienware 34 Curved",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704142922/ProductApi/fftrzqhrzduycn9ucqtj.jpg",
        "description": "Monitor curvo ultrawide con tasa de refresco de 144Hz y resolución QHD. Experiencia de juego inmersiva.",
        //"brand": "Alienware",
        "price": 899.99,
        "category": "Monitores",
        "type": "Tecnología",
        "stock": 10,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "34 pulgadas"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T21:02:14.026Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80af",
        "name": "Reloj Automático Seiko Presage",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704143196/ProductApi/frou3lgjs6rg8c2rdhpj.jpg",
        "description": "Reloj automático con diseño clásico y movimiento mecánico. Elegancia y precisión en cada detalle.",
        //"brand": "Seiko",
        "price": 349.99,
        "category": "Relojes",
        "type": "Relojes",
        "stock": 25,
        "available_colors": [
            "Plateado",
            "Dorado"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T21:06:35.309Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80b0",
        "name": "Batería Electrónica Roland TD-17KVX",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704143241/ProductApi/gsddxzxnmz4dqhmkum7j.jpg",
        "description": "Kit de batería electrónica con pads de malla y sonidos auténticos. Perfecto para práctica y grabación.",
        //"brand": "Roland",
        "price": 1499.99,
        "category": "Baterias",
        "type": "Instrumentos Musicales",
        "stock": 8,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T21:07:42.410Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80b1",
        "name": "Mouse Gamer Razer Deathadder V3 Pro Wireless ",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704143363/ProductApi/nqykvozev9ng5hk38i1u.jpg",
        "description": "\nRatón inalámbrico para juegos, sensor de alta precisión, diseño ergonómico, botones programables, rendimiento óptimo para jugadores apasionados.",
        //"brand": "Razer",
        "price": 79.99,
        "category": "Mouses",
        "type": "Tecnologia",
        "stock": 20,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T21:09:23.511Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80b2",
        "name": "Camiseta de Algodón Gris",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703901141/ProductApi/cmbk6hknaxa8mmkjkyaq.jpg",
        "description": "Camiseta de algodón suave y cómoda, perfecta para el uso diario. Diseño clásico de Lownull.",
        //"brand": "Lownull",
        "price": 18.99,
        "category": "Camisetas",
        "type": "Ropa",
        "stock": 35,
        "available_colors": [
            "Gris"
        ],
        "sizes": [
            "XL",
            "S",
            "M",
            "L"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2023-12-30T01:52:22.811Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80a3",
        "name": "Gorra NY ",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704145333/ProductApi/bhlnvoiqeqykjq8imv4i.jpg",
        "description": "Gorra clásica, estilo urbano, color versátil. Ideal para resaltar tu look casual y añadir un toque moderno y cómodo.",
        //"brand": "NY",
        "price": 20,
        "category": "Gorras",
        "type": "Accesorios",
        "stock": 10,
        "available_colors": [
            "Azul",
            "Negro"
        ],
        "sizes": [
            "Unico"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T21:42:15.164Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80b4",
        "name": "Auriculares Hyperx Cloud Alpha Gamer ",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704145591/ProductApi/iqqja6iszgdkowf4hzjo.jpg",
        "description": "Auriculares de alto rendimiento para gaming, compatibles con PC, PS5, Xbox, Switch. Experiencia sonora inmersiva y cómoda.",
        //"brand": "Hyperx",
        "price": 129.99,
        "category": "Auriculares",
        "type": "Tecnología",
        "stock": 20,
        "available_colors": [
            "Negro",
            "Rojo"
        ],
        "sizes": [
            "Unico"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T21:46:32.912Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80b5",
        "name": "Reloj Casio Original DB-360GN-9AEF",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704145895/ProductApi/bkpoz6xrqqnw0xqisdav.jpg",
        "description": "Reloj dorado con diseño elegante y funcionalidades avanzadas, incluye cronómetro, alarma, calendario y resistencia al agua.",
        //"brand": "Casio",
        "price": 89.99,
        "category": "Relojes",
        "type": "Accesorios",
        "stock": 12,
        "available_colors": [
            "Dorado",
            "Plateado"
        ],
        "sizes": [
            "Unico"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T21:51:38.940Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80b6",
        "name": "Gorra New Era Boston Red ",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704147286/ProductApi/vom0lhzpr5tuenkpsg8t.jpg",
        "description": "Gorra de béisbol en tono rojo brillante con diseño clásico, ideal para expresar tu estilo deportivo y urbano con comodidad.",
        //"brand": "New Era",
        "price": 25.99,
        "category": "Gorras",
        "type": "Accesorios",
        "stock": 15,
        "available_colors": [
            "Azul",
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T22:14:47.553Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80b7",
        "name": "Uno",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704147574/ProductApi/c0pjtrngbhqrg5tldu6y.jpg",
        "description": "\nDivertido juego de cartas con colores vibrantes y emocionantes cartas especiales. Estrategia y diversión para toda la familia.",
        //"brand": "Uno",
        "price": 25,
        "category": "Cartas",
        "type": "Juguetes y Juegos",
        "stock": 10,
        "available_colors": [
            "Unico"
        ],
        "sizes": [
            "Unico"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T22:19:48.217Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80b8",
        "name": "Trompeta Vivaldi Dorada con Boquilla y Estuche",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704147744/ProductApi/yfla7lqwtpchkktpnuke.jpg",
        "description": "Elegante trompeta dorada Vivaldi con boquilla y estuche, destacando su sonido brillante y estuche protector de calidad",
        //"brand": "Vivaldi",
        "price": 799.99,
        "category": "Trompetas",
        "type": "Instrumentos Musicales",
        "stock": 2,
        "available_colors": [
            "Unico"
        ],
        "sizes": [
            "Unico"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T22:22:27.060Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80b9",
        "name": "Lenovo IdeaPad 330 15.6\" Laptop Intel Pentium Silver 4GB",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704147896/ProductApi/oicops60jbqbglqbewip.jpg",
        "description": "\nLaptop con pantalla de 15.6\", procesador Intel Pentium Silver, 4GB de RAM para rendimiento eficiente y diseño compacto.",
        //"brand": "Lenovo",
        "price": 899.99,
        "category": "Laptops",
        "type": "Tecnologia",
        "stock": 12,
        "available_colors": [
            "Gris"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T22:25:25.740Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80ba",
        "name": "Zapatilla Adidas Star",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704148124/ProductApi/lmprgfy8c7vomwphka6n.jpg",
        "description": "\nZapatos deportivos elegantes y cómodos, diseñados para un estilo activo y un rendimiento óptimo en todas las actividades físicas.\n\n\n\n\n\n",
        //"brand": "Adidas",
        "price": 39.99,
        "category": "Zapatillas",
        "type": "Ropa",
        "stock": 14,
        "available_colors": [
            "Blanco"
        ],
        "sizes": [
            "L",
            "M"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T22:28:47.099Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80ab",
        "name": "Buso Negro Adidas Vintage 90s",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704147029/ProductApi/zbintbrgbhrezvrynnro.jpg",
        "description": "Buso de estilo vintage de los años 90 con diseño clásico y detalles nostálgicos, perfecto para un look retro moderno.",
        //"brand": "Adidas",
        "price": 100,
        "category": "Busos",
        "type": "Ropa",
        "stock": 5,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "L",
            "XL"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T22:10:31.366Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80bc",
        "name": "Buso Nike Vintage 90s",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704146808/ProductApi/ccavtyhsjk1ildr4opv2.jpg",
        "description": "Sudadera nostálgica con diseño inspirado en los años 90, ofrece estilo y comodidad para un look urbano y relajado.",
        //"brand": "Nike",
        "price": 79.99,
        "category": "Busos",
        "type": "Ropa",
        "stock": 2,
        "available_colors": [
            "Unico"
        ],
        "sizes": [
            "L",
            "M"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T22:07:14.630Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80bd",
        "name": "Campera Verde Nike Vintage 90s",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704146663/ProductApi/vianukaullsoqlvzhnzq.jpg",
        "description": "\nPrenda vintage en tono verde, estilo campera, diseño inspirado en los años 90, ideal para un look retro y moderno.",
        //"brand": "Nike",
        "price": 119.99,
        "category": "Camperas",
        "type": "Ropa",
        "stock": 1,
        "available_colors": [
            "Unico"
        ],
        "sizes": [
            "L"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T22:07:02.476Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80be",
        "name": "Campera Azul Marino Vintage Nike  90s",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704146480/ProductApi/w8l4tf12ugyvjhzehvhs.jpg",
        "description": "\nChaqueta estilo vintage en azul marino, inspirada en los años 90. Diseño clásico y cómodo con un toque retro.",
        //"brand": "Nike",
        "price": 90,
        "category": "Camperas ",
        "type": "Ropa",
        "stock": 3,
        "available_colors": [
            "Unico"
        ],
        "sizes": [
            "M",
            "L",
            "XL"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T22:07:35.107Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80bf",
        "name": "Pantalón Negro Vintage Nike",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704146334/ProductApi/ercdzkwdaavvhffyo5ya.jpg",
        "description": "\n\nPantalón negro estilo vintage con diseño atemporal, perfecto para un look casual y cómodo en cualquier ocasión moderna.\n\n\n\n\n\n",
        //"brand": "Nike",
        "price": 49.99,
        "category": "Pantalones",
        "type": "Ropa",
        "stock": 4,
        "available_colors": [
            "Unico"
        ],
        "sizes": [
            "M",
            "L"
        ],
        "createdAt": "2023-12-22T23:10:52.973Z",
        "updatedAt": "2024-01-01T22:07:58.833Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80c0",
        "name": "Buso Negro Nike Vintage",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704146195/ProductApi/kra72spfliz4vbhvb1dp.jpg",
        "description": "Buso negro con estilo vintage, perfecto para un look casual y cómodo. Diseño clásico y versátil para cualquier ocasión.",
        //"brand": "Nike",
        "price": 69.99,
        "category": "Busos",
        "type": "Ropa",
        "stock": 2,
        "available_colors": [
            "Unico"
        ],
        "sizes": [
            "L"
        ],
        "createdAt": "2023-12-22T23:10:52.973Z",
        "updatedAt": "2024-01-01T22:07:49.081Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80c1",
        "name": "Campera Vintage Nike 90s",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704146061/ProductApi/idnztdkrwssnzjib17s2.jpg",
        "description": "\nPrenda retro inspirada en los años 90, estilo campera vintage con detalles clásicos, diseño atemporal y colores vibrantes.",
        //"brand": "Nike",
        "price": 79.99,
        "category": "Camperas",
        "type": "Ropa",
        "stock": 2,
        "available_colors": [
            "Unico"
        ],
        "sizes": [
            "L"
        ],
        "createdAt": "2023-12-22T23:10:52.973Z",
        "updatedAt": "2024-01-01T22:01:50.351Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80c2",
        "name": "Short Retro Negro ",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704144883/ProductApi/jci70luqpnmrndjkhqqa.jpg",
        "description": "\nEstilo retro en negro para un look clásico. Shorts cómodos y versátiles para destacar tu estilo único con elegancia.",
        //"brand": "Nike",
        "price": 19.99,
        "category": "Shorts",
        "type": "Ropa",
        "stock": 12,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "L",
            "M",
            "S"
        ],
        "createdAt": "2023-12-22T23:10:52.973Z",
        "updatedAt": "2024-01-01T21:34:48.603Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80c3",
        "name": "Lámpara de Pie LED",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704144632/ProductApi/ypqwpurkrewzstgi3afc.jpg",
        "description": "Lámpara de pie con iluminación LED regulable. Perfecta para crear ambientes acogedores.",
        //"brand": "BrightLiving",
        "price": 129.99,
        "category": "Iluminación",
        "type": "Muebles",
        "stock": 8,
        "available_colors": [
            "Negro",
            "Blanco"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.973Z",
        "updatedAt": "2024-01-01T21:31:14.748Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80c4",
        "name": "Zapatillas Alexander Mcqueen",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704144574/ProductApi/hpox9bp9cohthrxdfq1e.jpg",
        "description": "\nZapatillas elegantes con diseño vanguardista, comodidad excepcional y detalles distintivos, perfectas para un estilo moderno y sofisticado.",
        //"brand": "Alexander McQueen",
        "price": 59.99,
        "category": "Zapatillas",
        "type": "Ropa",
        "stock": 25,
        "available_colors": [
            "Blanco",
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.973Z",
        "updatedAt": "2024-01-01T21:29:52.549Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80b3",
        "name": "Polo Negro",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1703901577/ProductApi/uogvbqurtitbpvjf8biq.jpg",
        "description": "Polo Negro de algodón suave y cómoda, perfecta para el uso diario. Diseño clásico de Lownull.",
        //"brand": "Lownull",
        "price": 15.99,
        "category": "Camisetas",
        "type": "Ropa",
        "stock": 15,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2023-12-30T01:59:39.345Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80c6",
        "name": "Buso Gris Oversize",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704144326/ProductApi/do3asovhei15ieqitptj.jpg",
        "description": "\nBuso Gris en estilo oversize, cómodo y moderno. Destaca con su diseño relajado y tono Gris vibrante.",
        //"brand": "LowNull",
        "price": 25,
        "category": "Busos",
        "type": "Ropa",
        "stock": 30,
        "available_colors": [
            "Verde",
            "Negro"
        ],
        "sizes": [
            "XL",
            "L",
            "M"
        ],
        "createdAt": "2023-12-22T23:10:52.973Z",
        "updatedAt": "2024-01-01T21:26:08.407Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80c7",
        "name": "Escritorio 1,30M Con 2 Cajones Blanco",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704143893/ProductApi/iaxcmqdjo7yojjqwxbcq.jpg",
        "description": "Práctico escritorio blanco de 1,30 metros con dos cajones, ideal para organizar y mejorar tu espacio de trabajo.",
        //"brand": "TechShore",
        "price": 69.99,
        "category": "Escritorios",
        "type": "Muebles",
        "stock": 10,
        "available_colors": [
            "Blanco",
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.973Z",
        "updatedAt": "2024-01-01T21:18:16.984Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80c8",
        "name": "Sillas de Oficina ASPEN",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704143716/ProductApi/uzwertptibwenpxgtsa7.jpg",
        "description": "Silla de oficina ergonómica con soporte lumbar ajustable. Ideal para largas horas de trabajo.",
        //"brand": "OfficeComfort",
        "price": 149.99,
        "category": "Sillas",
        "type": "Muebles",
        "stock": 20,
        "available_colors": [
            "Negro",
            "Gris"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.973Z",
        "updatedAt": "2024-01-01T21:15:45.957Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80bb",
        "name": "Silla Gamer Masajeadora Wolke Pc Xbox Premium Calor Atmosphere",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704143647/ProductApi/k20pjsatg3mld5trvqko.jpg",
        "description": "Silla gamer premium con funciones masajeadoras y calefacción, diseñada para PC y Xbox, ofrece comodidad y atmósfera envolvente.",
        //"brand": "TechShore",
        "price": 149.99,
        "category": "Sillas",
        "type": "Muebles",
        "stock": 18,
        "available_colors": [
            "Negro"
        ],
        "sizes": [
            "Único"
        ],
        "createdAt": "2023-12-22T23:10:52.972Z",
        "updatedAt": "2024-01-01T21:14:14.038Z"
    },
    {
        "_id": "6586177c054c7b7c9fee80c5",
        "name": "Mesa de Comedor de Madera",
        "image": "https://res.cloudinary.com/dth62bdky/image/upload/v1704143485/ProductApi/qyf9ytolln0cwc8kakat.jpg",
        "description": "Mesa de comedor con diseño de madera sólida. Perfecta para cenas familiares y reuniones.",
        //"brand": "WoodCraft",
        "price": 349.99,
        "category": "Mesas",
        "type": "Muebles",
        "stock": 15,
        "available_colors": [
            "Roble",
            "Nogal"
        ],
        "sizes": [
            "4 personas",
            "6 personas",
            "8 personas"
        ],
        "createdAt": "2023-12-22T23:10:52.973Z",
        "updatedAt": "2024-01-01T21:12:07.261Z"
    }
];
function handlerUploadProductsData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Itera sobre los productos
            for (const product of productsData) {
                // Verifica si el producto ya existe en la base de datos
                const existingProduct = yield Productos_1.default.findOne({ _id: product._id }); // Suponiendo que 'codigo' es un identificador único
                // Si el producto no existe, lo inserta
                if (!existingProduct) {
                    yield Productos_1.default.create(product);
                }
            }
            console.log("Éxito al cargar datos");
        }
        catch (error) {
            console.error("Error al cargar datos:", error);
        }
    });
}
exports.default = handlerUploadProductsData;

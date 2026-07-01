import HomeAgSystem from "../assets/AGSystemWeb/homeAGSystem.png";
import CommentsChatbox from "../assets/AGSystemWeb/commentsChatbox.png";
import ProductAG from "../assets/AGSystemWeb/productAG.png";
import ProductDescription from "../assets/AGSystemWeb/productDescription.png";

import HomeC from "../assets/cn_Mecab/homeC.png";
import loginC from "../assets/cn_Mecab/loginC.png";
import Navbar from "../assets/cn_Mecab/navbar.png";
import CategoryC from "../assets/cn_Mecab/categoryC.png";
import Post from "../assets/cn_Mecab/post.png";
import ScoreC from "../assets/cn_Mecab/scoreC.png";
import Profile from "../assets/cn_Mecab/profile.png";
import YourPost from "../assets/cn_Mecab/yourPost.png";

import LoginPharmacy from "../assets/pharmacy/loginPharmacy.png";
import Product from "../assets/pharmacy/product.png";
import Reports from "../assets/pharmacy/reports.png";
import Category from "../assets/pharmacy/category.png";

import Home from "../assets/recycleEasily/home.jpeg";
import CategoryR from "../assets/recycleEasily/category.jpeg";
import Questionnaire from "../assets/recycleEasily/questionnaire.jpeg";
import Score from "../assets/recycleEasily/score.jpeg";
import DescripCategory from "../assets/recycleEasily/descripCategory.jpeg";

export const projects = [
  {
    id: "web-site-ag-system",
    type: "web",
    category: "programming",

    title: {
      ES: "AG System Website",
      EN: "AG System Website",
    },

    badge: {
      ES: "🎓 Proyecto de Grado SENA",
      EN: "🎓 SENA Graduation Project",
    },

    technologies: ["Next.js", "Tailwind", "Voiceflow"],

    description: {
      ES: "Sitio web corporativo desarrollado para presentar AG System Information, su equipo de trabajo y su producto principal, CN-Mecab. Incluye un chatbot interactivo y una sección dedicada para explorar el producto en detalle.",

      EN: "Corporate website developed to showcase AG System Information, its team, and its main product, CN-Mecab. It includes an interactive chatbot and a dedicated section where users can explore the product in detail.",
    },

    features: {
      ES: [
        "Diseño responsive",
        "Información corporativa de la empresa",
        "Presentación detallada de CN-Mecab",
        "Sistema de comentarios",
        "Chatbot integrado",
        "Galería de imágenes y contenido promocional",
      ],

      EN: [
        "Responsive design",
        "Corporate company information",
        "Detailed CN-Mecab presentation",
        "Comments system",
        "Integrated chatbot",
        "Image gallery and promotional content",
      ],
    },

    results: {
      ES: [
        "Desarrollo con React y Next.js",
        "Interfaces modernas y adaptables",
        "Experiencia enfocada en usabilidad",
        "Proyecto desarrollado para obtener el título de Tecnóloga en ADSO",
      ],

      EN: [
        "Developed with React and Next.js",
        "Modern and responsive interfaces",
        "User-centered experience",
        "Project developed to obtain the ADSO Technology degree",
      ],
      
    },

    github: "https://github.com/Karen908/web_site_ag_system.git",
    demo: "https://web-site-ag-system.vercel.app/",
    images: [HomeAgSystem, ProductAG, CommentsChatbox, ProductDescription],
  },

  {
    id: "cn-mecab",
    type: "mobile",

    category: "programming",

    title: {
      ES: "CN-Mecab",
      EN: "CN-Mecab",
    },

    badge: {
      ES: "🎓 Proyecto de Grado SENA",
      EN: "🎓 SENA Capstone Project",
    },

    technologies: ["Dart","Flutter", "Firebase"],

    description: {
      ES: "Plataforma social para personas interesadas en cine, televisión y literatura. Permite descubrir contenido, compartir opiniones y publicar reseñas según los intereses de cada usuario.",

      EN: "Social networking platform designed for people interested in movies, television, and literature. It allows users to discover content, share opinions, and publish reviews based on their interests.",
    },

    features: {
      ES: [
        "Registro y autenticación de usuarios con Firebase Authentication",
        "Firebase Cloud Storage para almacenamiento de imágenes en la nube",
        "Perfiles personalizados",
        "Publicación de reseñas",
        "Interacción entre usuarios",
        "Gestión de contenido favorito",
        "Exploración por categorías",
      ],

      EN: [
        "User authentication with Firebase Authentication",
        "Firebase Cloud Storage for cloud image storage",
        "Personalized user profiles",
        "Review publishing",
        "User interaction",
        "Favorite content management",
        "Category-based content exploration",
      ],
    },

    results: {
      ES: [
        "Desarrollo de una aplicación tipo red social",
        "Gestión de usuarios y contenido",
        "Aplicación de buenas prácticas de desarrollo",
        "Proyecto desarrollado para obtener el título de Tecnóloga en ADSO",
      ],

      EN: [
        "Development of a social networking application",
        "User and content management",
        "Implementation of software development best practices",
        "Capstone project developed to earn the ADSO Technology degree",
      ],
    },

    github: "https://github.com/Joseph-Lopez-Oficial/CN-Mecab.git",
    images: [HomeC, loginC, Navbar, CategoryC, Post, ScoreC, Profile, YourPost],
  },

  {
    id: "farmacia-java",
    type: "web",

    category: "programming",

    title: {
      ES: "Farmacia Java",
      EN: "Java Pharmacy System",
    },

    badge: {
      ES: "💡 Proyecto Personal",
      EN: "💡 Personal Project",
    },

    technologies: ["Java", "MySQL"],

    description: {
      ES: "Sistema de gestión para farmacias desarrollado en Java y MySQL. Permite administrar inventario, productos, clientes, proveedores, compras, ventas y facturación, incorporando reportes y control de stock para optimizar la operación del negocio.",

      EN: "Pharmacy management system developed with Java and MySQL. It streamlines inventory, products, customers, suppliers, purchases, sales, and invoicing while providing reporting and stock control features to optimize business operations.",
    },

    features: {
      ES: [
        "Gestión de productos y categorías",
        "Administración de clientes, proveedores y empleados",
        "Control de inventario y actualización automática de stock",
        "Registro de compras y ventas",
        "Generación e impresión de facturas",
        "Búsqueda avanzada por código y nombre",
        "Reportes de ventas e inventario",
        "Gestión de perfiles de usuario",
      ],

      EN: [
        "Product and category management",
        "Customer, supplier, and employee management",
        "Inventory control with automatic stock updates",
        "Purchase and sales management",
        "Invoice generation and printing",
        "Advanced search by code and name",
        "Sales and inventory reports",
        "User profile management",
      ],
    },

    results: {
      ES: [
        "Automatización del proceso de ventas",
        "Implementación del patrón DAO",
        "Integración con MySQL",
        "Aplicación de Programación Orientada a Objetos",
      ],

      EN: [
        "Sales process automation",
        "DAO design pattern implementation",
        "MySQL database integration",
        "Object-Oriented Programming (OOP) implementation",
      ],
    },

    github: "https://github.com/Karen908/FarmaciaJava.git",
    demo: "https://drive.google.com/file/d/1OGRr32ZqibS06roOVosKYehnwMmudjj9/view?usp=drivesdk",
    images: [LoginPharmacy, Reports, Category, Product],
  },

  {
    id: "recicla-facil",
    type: "mobile",

    category: "programming",

    title: {
      ES: "Recicla Fácil",
      EN: "Recycle Smart",
    },

    badge: {
      ES: "🌱 Proyecto de Impacto Social",
      EN: "🌱 Social Impact Project",
    },

    technologies: ["Ionic", "TypeScript", "Tailwind"],


    description: {
      ES: "Aplicación móvil educativa que ayuda a clasificar correctamente los residuos mediante contenido interactivo y actividades diseñadas para promover hábitos sostenibles.",

      EN: "Educational mobile application that helps users correctly classify waste through interactive content and learning activities designed to encourage sustainable habits.",
    },

    features: {
      ES: [
        "Guía de clasificación de residuos",
        "Contenido educativo interactivo",
        "Cuestionarios de aprendizaje",
        "Diseño intuitivo",
        "Aplicación multiplataforma",
        "Promoción de buenas prácticas ambientales",
      ],

      EN: [
        "Waste classification guide",
        "Interactive educational content",
        "Learning quizzes",
        "Intuitive user interface",
        "Cross-platform mobile application",
        "Promotion of sustainable environmental practices",
      ],
    },

    results: {
      ES: [
        "Impacto educativo y ambiental",
        "Promoción de hábitos sostenibles",
        "Desarrollo móvil con Ionic",
        "Alineación con los Objetivos de Desarrollo Sostenible",
      ],

      EN: [
        "Positive educational and environmental impact",
        "Promotion of sustainable habits",
        "Mobile application developed with Ionic",
        "Aligned with the United Nations Sustainable Development Goals (SDGs)",
      ],
    },

    github: "https://github.com/Karen908/recicla-facil.git",
    images: [Home, CategoryR, DescripCategory, Questionnaire, Score],
  },
];

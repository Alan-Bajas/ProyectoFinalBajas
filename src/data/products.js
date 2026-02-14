export const products = [
  {
    id: "p1",
    title: "Teclado mecánico 60%",
    price: 39990,
    stock: 8,
    category: "perifericos",
    description: "Teclado compacto, switches táctiles, ideal para gaming y trabajo.",
    image: "https://via.placeholder.com/400x280?text=Teclado+60%",
  },
  {
    id: "p2",
    title: "Micrófono USB cardioide",
    price: 29990,
    stock: 12,
    category: "audio",
    description: "Grabación limpia para streaming, reuniones y contenido.",
    image: "https://via.placeholder.com/400x280?text=Microfono+USB",
  },
  {
    id: "p3",
    title: "Mouse ergonómico",
    price: 15990,
    stock: 0,
    category: "perifericos",
    description: "Diseño cómodo, ideal para largas jornadas.",
    image: "https://via.placeholder.com/400x280?text=Mouse+Ergonomico",
  },
  {
    id: "p4",
    title: "Audífonos inalámbricos",
    price: 49990,
    stock: 5,
    category: "audio",
    description: "Buen aislamiento, batería extendida.",
    image: "https://via.placeholder.com/400x280?text=Audifonos",
  },
];

export const getProductsMock = (categoryId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (!categoryId) return resolve(products);
      resolve(products.filter((p) => p.category === categoryId));
    }, 300);
  });

export const getProductByIdMock = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products.find((p) => p.id === id) ?? null), 300);
  });

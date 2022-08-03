export const createCardProductAdapter = (product) => ({
    cover: product.data.mainimage.url,
    alt: product.data.mainimage.alt,
    name: product.data.name,
    price: product.data.price,
    category: product.data.category.slug,
});

export const productDetailsAdapter = (product) => ({
    name: product.results[0].data.name,
    images: product.results[0].data.images,
    price: product.results[0].data.price,
    sku: product.results[0].data.sku,
    category: product.results[0].data.category.slug,
    tags: product.results[0].tags,
    stock: product.results[0].data.stock,
    description: product.results[0].data.description[0].text,
    specs: product.results[0].data.specs,
});

export const productsHomeAdapter = (products) => ({
    results: products.results,
});

export const productsListAdapter = (products) => ({
    results: products.results,
    page: products.page,
    totalPages: products.total_pages,
    category: products.category,
});
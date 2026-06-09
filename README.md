# clip-path-banner
src/

│

├── app/

│   ├── routes/

│   │   ├── index.tsx

│   │   ├── PrivateRoute.tsx

│   │   └── PublicRoute.tsx

│   │

│   ├── providers/

│   │   ├── QueryProvider.tsx

│   │   ├── ThemeProvider.tsx

│   │   └── AuthProvider.tsx

│   │

│   ├── layouts/

│   │   ├── MainLayout.tsx

│   │   └── AuthLayout.tsx

│   │

│   └── store/

│       ├── index.ts

│       └── slices/

│

├── shared/

│   │

│   ├── assets/

│   │   ├── images/

│   │   ├── icons/

│   │   └── fonts/

│   │

│   ├── components/

│   │   ├── Button/

│   │   │   ├── Button.tsx

│   │   │   ├── Button.module.css

│   │   │   └── index.ts

│   │   │

│   │   ├── Modal/

│   │   │   ├── Modal.tsx

│   │   │   └── index.ts

│   │   │

│   │   └── Spinner/

│   │

│   ├── hooks/

│   │   ├── useDebounce.ts

│   │   ├── useLocalStorage.ts

│   │   └── useWindowSize.ts

│   │

│   ├── services/

│   │   ├── api.ts

│   │   └── interceptors.ts

│   │

│   ├── utils/

│   │   ├── formatCurrency.ts

│   │   ├── formatDate.ts

│   │   └── validators.ts

│   │

│   ├── constants/

│   │   ├── routes.ts

│   │   └── appConstants.ts

│   │

│   └── types/

│       ├── api.types.ts

│       └── common.types.ts

│

├── features/

│   │

│   ├── banner/

│   │   │

│   │   ├── components/

│   │   │   ├── Banner/

│   │   │   │   ├── Banner.tsx

│   │   │   │   ├── Banner.module.css

│   │   │   │   └── index.ts

│   │   │   │

│   │   │   └── OverlayInfo/

│   │   │       ├── OverlayInfo.tsx

│   │   │       ├── OverlayInfo.module.css

│   │   │       └── index.ts

│   │   │

│   │   ├── hooks/

│   │   │   └── useBanner.ts

│   │   │

│   │   ├── services/

│   │   │   └── bannerApi.ts

│   │   │

│   │   ├── types/

│   │   │   └── banner.types.ts

│   │   │

│   │   ├── utils/

│   │   │   └── bannerMapper.ts

│   │   │

│   │   └── index.ts

│   │

│   ├── products/

│   │   │

│   │   ├── components/

│   │   │   ├── ProductCard/

│   │   │   ├── ProductGrid/

│   │   │   └── ProductBadge/

│   │   │

│   │   ├── hooks/

│   │   │   ├── useProducts.ts

│   │   │   └── useProductDetails.ts

│   │   │

│   │   ├── services/

│   │   │   └── productsApi.ts

│   │   │

│   │   ├── types/

│   │   │   └── product.types.ts

│   │   │

│   │   └── index.ts

│   │

│   └── checkout/

│       ├── components/

│       ├── hooks/

│       ├── services/

│       └── types/

│

├── pages/

│   │

│   ├── Home/

│   │   ├── Home.tsx

│   │   └── index.ts

│   │

│   ├── ProductDetails/

│   │   ├── ProductDetails.tsx

│   │   └── index.ts

│   │

│   └── Checkout/

│       ├── Checkout.tsx

│       └── index.ts

│

├── main.tsx

└── vite-env.d.ts

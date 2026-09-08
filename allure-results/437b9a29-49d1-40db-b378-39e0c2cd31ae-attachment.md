# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createArticle.spec.ts >> Article Management Test Suite >> User should be able to create a new article successfully
- Location: tests\createArticle.spec.ts:5:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://imcoarca.leonardojose.dev/articulos"
Received: "https://imcoarca.leonardojose.dev/articulos/nuevo"

Call log:
  - Expect "toHaveURL" with timeout 20000ms
    40 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://imcoarca.leonardojose.dev/articulos/nuevo"
  - Test timeout of 30000ms exceeded.

```

```yaml
- complementary:
  - img "Logo"
  - navigation:
    - searchbox "Buscar en el menú"
    - list:
      - listitem:
        - link "Dashboard":
          - /url: /dashboard
          - img
          - text: Dashboard
      - listitem:
        - button "Gestión de Clientes":
          - img
          - text: Gestión de Clientes
          - img
      - listitem:
        - button "Gestión de Proveedores":
          - img
          - text: Gestión de Proveedores
          - img
      - listitem:
        - button "Inventario":
          - img
          - text: Inventario
          - img
        - list:
          - listitem:
            - link "Artículos":
              - /url: /articulos
              - img
              - text: Artículos
          - listitem:
            - link "Publicaciones ML":
              - /url: /mercadolibre-publicaciones
              - img
              - text: Publicaciones ML
          - listitem:
            - link "Transportes":
              - /url: /transportes
              - img
              - text: Transportes
          - listitem:
            - link "Movimientos de Stock":
              - /url: /stock/movimientos
              - img
              - text: Movimientos de Stock
          - listitem:
            - link "Fraccion/Impresión":
              - /url: /stock/fraccionamientos
              - img
              - text: Fraccion/Impresión
      - listitem:
        - button "Finanzas":
          - img
          - text: Finanzas
          - img
      - listitem:
        - button "Configuración":
          - img
          - text: Configuración
          - img
      - listitem:
        - link "Reportes":
          - /url: /reportes
          - img
          - text: Reportes
  - button "Contraer"
- banner:
  - button "Cerrar Sesión"
- main:
  - heading "Crear Nuevo Artículo" [level=1]
  - heading "Información Principal" [level=2]
  - text: Código (SKU) *
  - textbox "Código (SKU) *":
    - /placeholder: "Ej: 0000.0019.0020"
    - text: "39"
  - paragraph: El SKU debe tener el formato XXXX.XXXX.XXXX (12 dígitos)
  - text: Nombre / Descripción Breve *
  - textbox "Nombre / Descripción Breve *":
    - /placeholder: Nombre principal del artículo
    - text: Generic Bamboo Keyboard
  - text: Descripción Larga
  - textbox "Descripción Larga":
    - /placeholder: Descripción detallada del artículo
  - text: Línea *
  - combobox "Línea *":
    - option "Selecciona una opción"
    - option "LINEA 1" [selected]
  - text: Categoría *
  - combobox "Categoría *":
    - option "Selecciona una opción"
    - option "CATEGORIA 1" [selected]
  - text: Unidad de Medida
  - textbox "Unidad de Medida":
    - /placeholder: "Ej: MTS, KG, Unidad"
  - text: Estado
  - combobox "Estado":
    - option "Selecciona una opción"
    - option "Activo" [selected]
    - option "Inactivo"
  - text: Número de Artículo (Legado)
  - textbox "Número de Artículo (Legado)":
    - /placeholder: ""
  - text: Fabricación propia
  - combobox "Fabricación propia":
    - option "Selecciona una opción" [selected]
    - option "No"
    - option "Si"
  - heading "Precios y Costos" [level=2]
  - text: Precio de Venta
  - textbox "Precio de Venta":
    - /placeholder: ""
    - text: "3668.4"
  - text: Costo
  - textbox "Costo":
    - /placeholder: ""
    - text: "565.05"
  - text: Fecha Ult. Precio
  - textbox "Fecha Ult. Precio"
  - text: Precio de Compra
  - textbox "Precio de Compra":
    - /placeholder: ""
  - text: Multiplicador
  - textbox "Multiplicador":
    - /placeholder: ""
  - text: Moneda de Costo
  - combobox "Moneda de Costo":
    - option "Selecciona una opción" [selected]
    - option "Pesos (ARS)"
    - option "Dólares (USD)"
  - heading "Stock e Inventario" [level=2]
  - text: Stock Actual
  - textbox "Stock Actual":
    - /placeholder: ""
    - text: "170"
  - text: Stock Mínimo
  - textbox "Stock Mínimo":
    - /placeholder: ""
  - text: Cantidad en Pedidos
  - textbox "Cantidad en Pedidos":
    - /placeholder: ""
  - text: Días de Demora (Proveedor)
  - textbox "Días de Demora (Proveedor)":
    - /placeholder: ""
  - text: Cantidad por Bulto
  - textbox "Cantidad por Bulto":
    - /placeholder: ""
  - heading "Impuestos Específicos del Producto" [level=2]
  - checkbox "IVA-21 (21%)"
  - text: IVA-21 (21%)
  - checkbox "IVA-10 (10.5%)"
  - text: IVA-10 (10.5%)
  - checkbox "IVA-27 (27%)"
  - text: IVA-27 (27%)
  - button "Volver"
  - button "Guardar Cambios"
- region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test, expect } from "./fixture/fixtures.js";
  2  | import { ArticleFactory } from "./factory/article.factory.js";
  3  | 
  4  | test.describe("Article Management Test Suite", () => {
  5  |   test("User should be able to create a new article successfully", async ({ articlesPage, sidebar }) => {
  6  |     const articleData = ArticleFactory.create();
  7  | 
  8  |     await sidebar.goToCreateArticle();
  9  | 
  10 |     await articlesPage.fillForm(articleData);
  11 | 
  12 |     await articlesPage.guardarCambios();
  13 | 
> 14 |     await expect(articlesPage.page).toHaveURL(process.env.ARTICLE_URL!, {
     |                                     ^ Error: expect(page).toHaveURL(expected) failed
  15 |       timeout: 20000,
  16 |     });
  17 |   });
  18 | });
  19 | 
```
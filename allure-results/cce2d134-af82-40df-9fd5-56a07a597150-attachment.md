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
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Código (SKU) *' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - complementary [ref=e4]:
      - img "Logo" [ref=e6]
      - navigation [ref=e7]:
        - searchbox "Buscar en el menú" [ref=e9]
        - list [ref=e10]:
          - listitem [ref=e11]:
            - link "Dashboard" [ref=e12]:
              - /url: /dashboard
          - listitem [ref=e16]:
            - button "Gestión de Clientes" [ref=e18] [cursor=pointer]
          - listitem [ref=e24]:
            - button "Gestión de Proveedores" [ref=e26] [cursor=pointer]
          - listitem [ref=e32]:
            - generic [ref=e33]:
              - button "Inventario" [ref=e34] [cursor=pointer]
              - list [ref=e40]:
                - listitem [ref=e41]:
                  - link "Artículos" [ref=e42]:
                    - /url: /articulos
                - listitem [ref=e47]:
                  - link "Publicaciones ML" [ref=e48]:
                    - /url: /mercadolibre-publicaciones
                - listitem [ref=e53]:
                  - link "Transportes" [ref=e54]:
                    - /url: /transportes
                - listitem [ref=e59]:
                  - link "Movimientos de Stock" [ref=e60]:
                    - /url: /stock/movimientos
                - listitem [ref=e65]:
                  - link "Fraccion/Impresión" [ref=e66]:
                    - /url: /stock/fraccionamientos
          - listitem [ref=e71]:
            - button "Finanzas" [ref=e73] [cursor=pointer]
          - listitem [ref=e79]:
            - button "Configuración" [ref=e81] [cursor=pointer]
          - listitem [ref=e87]:
            - link "Reportes" [ref=e88]:
              - /url: /reportes
      - button "Contraer" [ref=e93]
    - generic [ref=e97]:
      - banner [ref=e98]:
        - button "Cerrar Sesión" [ref=e99]
      - main [ref=e100]:
        - generic [ref=e101]:
          - generic [ref=e102]:
            - heading "Listado de Artículos" [level=1] [ref=e104]
            - generic [ref=e105]:
              - button "Ajustar Precio" [disabled] [ref=e106]
              - button "Crear Artículo" [ref=e107]
          - generic [ref=e108]:
            - generic [ref=e110]:
              - generic [ref=e111]: Buscar
              - generic [ref=e112]:
                - textbox "Buscar" [ref=e113]:
                  - /placeholder: Buscar...
                - button "Buscar" [ref=e114]
            - generic [ref=e118]:
              - generic [ref=e119]:
                - generic [ref=e120]: Línea
                - button "Todas" [ref=e122]
              - generic [ref=e124]:
                - generic [ref=e125]: Categoría
                - button "Todas" [ref=e127]
          - table [ref=e133]:
            - rowgroup [ref=e134]:
              - row [ref=e135]:
                - columnheader [ref=e136]:
                  - checkbox "Seleccionar todos los de la página" [ref=e137]
                - columnheader [ref=e138]:
                  - button "Código" [ref=e139]
                - columnheader [ref=e143]:
                  - button "Descripción" [ref=e144]
                - columnheader [ref=e148]:
                  - button "Línea" [ref=e149]
                - columnheader [ref=e153]:
                  - button "Stock" [ref=e154]
                - columnheader [ref=e158]:
                  - button "Precio Compra" [ref=e159]
                - columnheader [ref=e163]:
                  - button "Precio Venta" [ref=e164]
                - columnheader [ref=e168]:
                  - button "Categoría" [ref=e169]
                - columnheader [ref=e173]:
                  - button "Estado" [ref=e174]
                - columnheader "Acciones" [ref=e178]
            - rowgroup [ref=e179]:
              - row [ref=e180] [cursor=pointer]:
                - cell [ref=e181]:
                  - checkbox "Seleccionar fila 7181" [ref=e182]
                - cell "0000.0000.0001" [ref=e183]
                - cell "TESTING" [ref=e184]
                - cell "LINEA 1" [ref=e185]
                - cell "-1" [ref=e186]
                - cell "$ 0,00" [ref=e187]
                - cell "$ 0,00" [ref=e188]
                - cell "CATEGORIA 1" [ref=e189]
                - cell "Activo" [ref=e190]
                - cell [ref=e192]:
                  - generic [ref=e193]:
                    - button "Editar" [ref=e194]
                    - button "Eliminar" [ref=e197]
              - row [ref=e200] [cursor=pointer]:
                - cell [ref=e201]:
                  - checkbox "Seleccionar fila 7182" [ref=e202]
                - cell "0000.0000.0002" [ref=e203]
                - cell "OTRO" [ref=e204]
                - cell "LINEA 1" [ref=e205]
                - cell "0" [ref=e206]
                - cell "$ 0,00" [ref=e207]
                - cell "$ 0,00" [ref=e208]
                - cell "CATEGORIA 1" [ref=e209]
                - cell "Activo" [ref=e210]
                - cell [ref=e212]:
                  - generic [ref=e213]:
                    - button "Editar" [ref=e214]
                    - button "Eliminar" [ref=e217]
              - row [ref=e220] [cursor=pointer]:
                - cell [ref=e221]:
                  - checkbox "Seleccionar fila 7183" [ref=e222]
                - cell "0000.0000.0003" [ref=e223]
                - cell "ARTICULO TAE AUTOMATIZACION" [ref=e224]
                - cell "LINEA 1" [ref=e225]
                - cell "47" [ref=e226]
                - cell "$ 0,00" [ref=e227]
                - cell "$ 0,00" [ref=e228]
                - cell "CATEGORIA 1" [ref=e229]
                - cell "Activo" [ref=e230]
                - cell [ref=e232]:
                  - generic [ref=e233]:
                    - button "Editar" [ref=e234]
                    - button "Eliminar" [ref=e237]
              - row [ref=e240] [cursor=pointer]:
                - cell [ref=e241]:
                  - checkbox "Seleccionar fila 7184" [ref=e242]
                - cell "9000.0000.9846" [ref=e243]
                - cell "ARTICULO E2E PLAYWRIGHT 1788119060150" [ref=e244]
                - cell "LINEA 1" [ref=e245]
                - cell "10" [ref=e246]
                - cell "$ 0,00" [ref=e247]
                - cell "$ 100,00" [ref=e248]
                - cell "CATEGORIA 1" [ref=e249]
                - cell "Activo" [ref=e250]
                - cell [ref=e252]:
                  - generic [ref=e253]:
                    - button "Editar" [ref=e254]
                    - button "Eliminar" [ref=e257]
              - row [ref=e260] [cursor=pointer]:
                - cell [ref=e261]:
                  - checkbox "Seleccionar fila 7185" [ref=e262]
                - cell "9000.0000.3430" [ref=e263]
                - cell "ARTICULO E2E PLAYWRIGHT 1788120134686" [ref=e264]
                - cell "LINEA 1" [ref=e265]
                - cell "10" [ref=e266]
                - cell "$ 0,00" [ref=e267]
                - cell "$ 100,00" [ref=e268]
                - cell "CATEGORIA 1" [ref=e269]
                - cell "Activo" [ref=e270]
                - cell [ref=e272]:
                  - generic [ref=e273]:
                    - button "Editar" [ref=e274]
                    - button "Eliminar" [ref=e277]
              - row [ref=e280] [cursor=pointer]:
                - cell [ref=e281]:
                  - checkbox "Seleccionar fila 7186" [ref=e282]
                - cell "9000.0000.4728" [ref=e283]
                - cell "ARTICULO E2E PLAYWRIGHT 1788120371525" [ref=e284]
                - cell "LINEA 1" [ref=e285]
                - cell "10" [ref=e286]
                - cell "$ 0,00" [ref=e287]
                - cell "$ 100,00" [ref=e288]
                - cell "CATEGORIA 1" [ref=e289]
                - cell "Activo" [ref=e290]
                - cell [ref=e292]:
                  - generic [ref=e293]:
                    - button "Editar" [ref=e294]
                    - button "Eliminar" [ref=e297]
              - row [ref=e300] [cursor=pointer]:
                - cell [ref=e301]:
                  - checkbox "Seleccionar fila 7187" [ref=e302]
                - cell "9000.0000.4141" [ref=e303]
                - cell "ARTICULO E2E PLAYWRIGHT 1788120639260" [ref=e304]
                - cell "LINEA 1" [ref=e305]
                - cell "10" [ref=e306]
                - cell "$ 0,00" [ref=e307]
                - cell "$ 100,00" [ref=e308]
                - cell "CATEGORIA 1" [ref=e309]
                - cell "Activo" [ref=e310]
                - cell [ref=e312]:
                  - generic [ref=e313]:
                    - button "Editar" [ref=e314]
                    - button "Eliminar" [ref=e317]
              - row [ref=e320] [cursor=pointer]:
                - cell [ref=e321]:
                  - checkbox "Seleccionar fila 7188" [ref=e322]
                - cell "9000.0000.5822" [ref=e323]
                - cell "ARTICULO E2E PLAYWRIGHT 1788120770392" [ref=e324]
                - cell "LINEA 1" [ref=e325]
                - cell "10" [ref=e326]
                - cell "$ 0,00" [ref=e327]
                - cell "$ 100,00" [ref=e328]
                - cell "CATEGORIA 1" [ref=e329]
                - cell "Activo" [ref=e330]
                - cell [ref=e332]:
                  - generic [ref=e333]:
                    - button "Editar" [ref=e334]
                    - button "Eliminar" [ref=e337]
              - row [ref=e340] [cursor=pointer]:
                - cell [ref=e341]:
                  - checkbox "Seleccionar fila 7189" [ref=e342]
                - cell "9000.0000.8415" [ref=e343]
                - cell "ARTICULO E2E PLAYWRIGHT 1788120887610" [ref=e344]
                - cell "LINEA 1" [ref=e345]
                - cell "10" [ref=e346]
                - cell "$ 0,00" [ref=e347]
                - cell "$ 100,00" [ref=e348]
                - cell "CATEGORIA 1" [ref=e349]
                - cell "Activo" [ref=e350]
                - cell [ref=e352]:
                  - generic [ref=e353]:
                    - button "Editar" [ref=e354]
                    - button "Eliminar" [ref=e357]
              - row [ref=e360] [cursor=pointer]:
                - cell [ref=e361]:
                  - checkbox "Seleccionar fila 7190" [ref=e362]
                - cell "9000.0000.7574" [ref=e363]
                - cell "ARTICULO E2E PLAYWRIGHT 1788121000710" [ref=e364]
                - cell "LINEA 1" [ref=e365]
                - cell "10" [ref=e366]
                - cell "$ 0,00" [ref=e367]
                - cell "$ 100,00" [ref=e368]
                - cell "CATEGORIA 1" [ref=e369]
                - cell "Activo" [ref=e370]
                - cell [ref=e372]:
                  - generic [ref=e373]:
                    - button "Editar" [ref=e374]
                    - button "Eliminar" [ref=e377]
              - row [ref=e380] [cursor=pointer]:
                - cell [ref=e381]:
                  - checkbox "Seleccionar fila 7191" [ref=e382]
                - cell "9000.0000.1521" [ref=e383]
                - cell "ARTICULO E2E PLAYWRIGHT 1788121132945" [ref=e384]
                - cell "LINEA 1" [ref=e385]
                - cell "10" [ref=e386]
                - cell "$ 0,00" [ref=e387]
                - cell "$ 100,00" [ref=e388]
                - cell "CATEGORIA 1" [ref=e389]
                - cell "Activo" [ref=e390]
                - cell [ref=e392]:
                  - generic [ref=e393]:
                    - button "Editar" [ref=e394]
                    - button "Eliminar" [ref=e397]
              - row [ref=e400] [cursor=pointer]:
                - cell [ref=e401]:
                  - checkbox "Seleccionar fila 7192" [ref=e402]
                - cell "9000.0000.8057" [ref=e403]
                - cell "ARTICULO E2E PLAYWRIGHT 1788121365999" [ref=e404]
                - cell "LINEA 1" [ref=e405]
                - cell "10" [ref=e406]
                - cell "$ 0,00" [ref=e407]
                - cell "$ 100,00" [ref=e408]
                - cell "CATEGORIA 1" [ref=e409]
                - cell "Activo" [ref=e410]
                - cell [ref=e412]:
                  - generic [ref=e413]:
                    - button "Editar" [ref=e414]
                    - button "Eliminar" [ref=e417]
              - row [ref=e420] [cursor=pointer]:
                - cell [ref=e421]:
                  - checkbox "Seleccionar fila 7200" [ref=e422]
                - cell "904807804807" [ref=e423]
                - cell "Vendedor Prod 048078" [ref=e424]
                - cell "LINEA 1" [ref=e425]
                - cell "5" [ref=e426]
                - cell "$ 800,00" [ref=e427]
                - cell "$ 1.500,00" [ref=e428]
                - cell "CATEGORIA 1" [ref=e429]
                - cell "Activo" [ref=e430]
                - cell [ref=e432]:
                  - generic [ref=e433]:
                    - button "Editar" [ref=e434]
                    - button "Eliminar" [ref=e437]
              - row [ref=e440] [cursor=pointer]:
                - cell [ref=e441]:
                  - checkbox "Seleccionar fila 7203" [ref=e442]
                - cell "0000.0000.9988" [ref=e443]
                - cell "testing2" [ref=e444]
                - cell "LINEA 1" [ref=e445]
                - cell "49" [ref=e446]
                - cell "$ 8.000,00" [ref=e447]
                - cell "$ 15.000,00" [ref=e448]
                - cell "CATEGORIA 1" [ref=e449]
                - cell "Activo" [ref=e450]
                - cell [ref=e452]:
                  - generic [ref=e453]:
                    - button "Editar" [ref=e454]
                    - button "Eliminar" [ref=e457]
              - row [ref=e460] [cursor=pointer]:
                - cell [ref=e461]:
                  - checkbox "Seleccionar fila 7222" [ref=e462]
                - cell "0000.0000.0182" [ref=e463]
                - cell "Este un artículo" [ref=e464]
                - cell "LINEA 1" [ref=e465]
                - cell "0" [ref=e466]
                - cell "$ 0,00" [ref=e467]
                - cell "$ 0,00" [ref=e468]
                - cell "CATEGORIA 1" [ref=e469]
                - cell "Activo" [ref=e470]
                - cell [ref=e472]:
                  - generic [ref=e473]:
                    - button "Editar" [ref=e474]
                    - button "Eliminar" [ref=e477]
  - region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { ArticleData } from "../factory/article.factory.js";
  3  | 
  4  | export default class ArticlesPage {
  5  |   readonly page: Page;
  6  |   readonly skuInput: Locator;
  7  |   readonly descripcionBreveInput: Locator;
  8  |   readonly lineaInput: Locator;
  9  |   readonly precioVentaInput: Locator;
  10 |   readonly categoriaInput: Locator;
  11 |   readonly costoInput: Locator;
  12 |   readonly stockActualInput: Locator;
  13 |   readonly guardarCambiosButton: Locator;
  14 | 
  15 |   constructor(page: Page) {
  16 |     this.page = page;
  17 |     this.skuInput = page.getByRole("textbox", { name: "Código (SKU) *" });
  18 |     this.descripcionBreveInput = page.getByRole("textbox", { name: "Nombre / Descripción Breve *" });
  19 |     this.lineaInput = page.getByRole("combobox", { name: "Línea *" });
  20 |     this.precioVentaInput = page.getByRole("textbox", { name: "Precio de Venta" });
  21 |     this.categoriaInput = page.getByRole("combobox", { name: "Categoría *" });
  22 |     this.costoInput = page.getByRole("textbox", { name: "Costo" });
  23 |     this.stockActualInput = page.getByRole("textbox", { name: "Stock Actual" });
  24 |     this.guardarCambiosButton = page.getByRole("button", { name: "Guardar Cambios" });
  25 |   }
  26 | 
  27 |   async selectCategoriaOption(option: string): Promise<void> {
  28 |     await this.categoriaInput.selectOption({ label: option });
  29 |   }
  30 | 
  31 |   async selectLineaOption(option: string): Promise<void> {
  32 |     await this.lineaInput.selectOption({ label: option });
  33 |   }
  34 | 
  35 |   async fillForm(article: ArticleData): Promise<void> {
  36 |     await this.fillSkuInput(article.sku);
  37 |     await this.fillDescripcionBreveInput(article.descripcionBreve);
  38 |     await this.selectLineaOption(article.lineaOption);
  39 |     await this.fillPrecioVentaInput(article.precioVenta);
  40 |     await this.selectCategoriaOption(article.categoriaOption);
  41 |     await this.fillCostoInput(article.costo);
  42 |     await this.fillStockActualInput(article.stockActual);
  43 |     await this.guardarCambios();
  44 |   }
  45 | 
  46 |   async fillSkuInput(sku: string): Promise<void> {
> 47 |     await this.skuInput.fill(sku);
     |                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  48 |   }
  49 | 
  50 |   async fillDescripcionBreveInput(descripcionBreve: string): Promise<void> {
  51 |     await this.descripcionBreveInput.fill(descripcionBreve);
  52 |   }
  53 | 
  54 |   async fillPrecioVentaInput(precioVenta: number): Promise<void> {
  55 |     await this.precioVentaInput.fill(precioVenta.toString());
  56 |   }
  57 |   async fillCostoInput(costo: number): Promise<void> {
  58 |     await this.costoInput.fill(costo.toString());
  59 |   }
  60 | 
  61 |   async fillStockActualInput(stockActual: number): Promise<void> {
  62 |     await this.stockActualInput.fill(stockActual.toString());
  63 |   }
  64 | 
  65 |   async guardarCambios(): Promise<void> {
  66 |     await this.guardarCambiosButton.click();
  67 |   }
  68 | }
  69 | 
```
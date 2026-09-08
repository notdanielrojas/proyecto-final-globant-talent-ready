# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createClient.spec.ts >> Client Management Test Suite >> User should be able to create a new client successfully
- Location: tests\createClient.spec.ts:5:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForResponse: Test timeout of 30000ms exceeded.
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
            - generic [ref=e17]:
              - button "Gestión de Clientes" [ref=e18] [cursor=pointer]
              - list [ref=e24]:
                - listitem [ref=e25]:
                  - link "Prospectos" [ref=e26]:
                    - /url: /leads
                - listitem [ref=e31]:
                  - link "Clientes" [ref=e32]:
                    - /url: /clientes
                - listitem [ref=e37]:
                  - link "Facturas de Venta" [ref=e38]:
                    - /url: /facturas-de-venta
                - listitem [ref=e43]:
                  - link "Notas de Crédito" [ref=e44]:
                    - /url: /notas-credito
                - listitem [ref=e49]:
                  - link "Notas Financieras" [ref=e50]:
                    - /url: /notas-financieras
                - listitem [ref=e55]:
                  - link "Pedidos de Venta" [ref=e56]:
                    - /url: /pedidos-de-venta
                - listitem [ref=e61]:
                  - link "Autorizar pedidos" [ref=e62]:
                    - /url: /autorizacion-pedidos
                - listitem [ref=e67]:
                  - link "Cobranzas" [ref=e68]:
                    - /url: /cobranzas
                - listitem [ref=e73]:
                  - link "Remitos" [ref=e74]:
                    - /url: /remitos
                - listitem [ref=e79]:
                  - link "Vendedores" [ref=e80]:
                    - /url: /vendedores
                - listitem [ref=e85]:
                  - link "Compradores" [ref=e86]:
                    - /url: /compradores
          - listitem [ref=e91]:
            - button "Gestión de Proveedores" [ref=e93] [cursor=pointer]
          - listitem [ref=e99]:
            - button "Inventario" [ref=e101] [cursor=pointer]
          - listitem [ref=e107]:
            - button "Finanzas" [ref=e109] [cursor=pointer]
          - listitem [ref=e115]:
            - button "Configuración" [ref=e117] [cursor=pointer]
          - listitem [ref=e123]:
            - link "Reportes" [ref=e124]:
              - /url: /reportes
      - button "Contraer" [ref=e129]
    - generic [ref=e133]:
      - banner [ref=e134]:
        - button "Cerrar Sesión" [ref=e135]
      - main [ref=e136]:
        - generic [ref=e137]:
          - heading "Crear Nuevo Cliente" [level=1] [ref=e138]
          - generic [ref=e139]:
            - generic [ref=e140]:
              - heading "Datos básicos" [level=2] [ref=e141]
              - generic [ref=e142]:
                - generic [ref=e143]:
                  - generic [ref=e144]: CUIT *
                  - textbox "CUIT *" [active] [ref=e146]:
                    - /placeholder: "Ej: 30-12345678-9"
                    - text: 20-18708223-9
                  - paragraph [ref=e147]: El CUIT debe tener 11 dígitos y un dígito verificador válido (formato XX-XXXXXXXX-X)
                - generic [ref=e148]:
                  - generic [ref=e149]: Condición Tributaria
                  - combobox "Condición Tributaria" [ref=e151]:
                    - option "Selecciona una opción" [selected]
                    - option "IVA Responsable Inscripto"
                    - option "Monotributista"
                    - option "Exento"
                    - option "Consumidor Final"
                    - option "No Responsable"
                - generic [ref=e152]:
                  - generic [ref=e153]: Nombre o Razón Social *
                  - textbox "Nombre o Razón Social *" [ref=e155]:
                    - /placeholder: "Ej: Empresa S.A."
                    - text: Gleichner - Dare
                - generic [ref=e156]:
                  - generic [ref=e157]: Retiene IVA
                  - combobox "Retiene IVA" [ref=e159]:
                    - option "Selecciona una opción" [selected]
                    - option "No"
                    - option "Si"
                - generic [ref=e160]:
                  - generic [ref=e161]: Aplica Ley de Exportación TDF
                  - combobox "Aplica Ley de Exportación TDF" [ref=e163]:
                    - option "Selecciona una opción" [selected]
                    - option "No"
                    - option "Si"
                - generic [ref=e164]:
                  - generic [ref=e165]: Serie de Factura
                  - combobox "Serie de Factura" [disabled] [ref=e167]:
                    - option "Selecciona una opción" [selected]
                - generic [ref=e168]:
                  - generic [ref=e169]: Fecha de alta
                  - textbox "Fecha de alta" [ref=e171]: 2026-09-04
                - generic [ref=e172]:
                  - generic [ref=e173]: Moneda
                  - generic [ref=e175]:
                    - textbox "Código..." [ref=e177]
                    - generic [ref=e178]:
                      - textbox "Nombre..." [ref=e179]
                      - button "Buscar" [ref=e180]
            - generic [ref=e183]:
              - heading "Datos de Contacto" [level=2] [ref=e184]
              - generic [ref=e185]:
                - generic [ref=e186]:
                  - generic [ref=e187]: Domicilio Fiscal
                  - textbox "Domicilio Fiscal" [ref=e189]:
                    - /placeholder: ""
                    - text: 42569 Bridge Road
                - generic [ref=e190]:
                  - generic [ref=e191]: Código Postal
                  - textbox "Código Postal" [ref=e193]:
                    - /placeholder: ""
                - generic [ref=e194]:
                  - generic [ref=e195]: Localidad
                  - textbox "Localidad" [ref=e197]:
                    - /placeholder: ""
                    - text: SANTIAGO
                - generic [ref=e198]:
                  - generic [ref=e199]: Provincia
                  - combobox "Provincia" [ref=e201]:
                    - option "Selecciona una opción" [selected]
                    - option "BOLIVIA"
                    - option "BUENOS AIRES"
                    - option "C.A.B.A."
                    - option "CATAMARCA"
                    - option "CHACO"
                    - option "CHUBUT"
                    - option "CORDOBA"
                    - option "CORRIENTES"
                    - option "ENTRE RIOS"
                    - option "FORMOSA"
                    - option "JUJUY"
                    - option "LA PAMPA"
                    - option "LA RIOJA"
                    - option "MENDOZA"
                    - option "MISIONES"
                    - option "NEUQUEN"
                    - option "PARAGUAY"
                    - option "RIO NEGRO"
                    - option "SALTA"
                    - option "SAN JUAN"
                    - option "SAN LUIS"
                    - option "SANTA CRUZ"
                    - option "SANTA FE"
                    - option "SGO. DEL ESTERO"
                    - option "T. DEL FUEGO"
                    - option "T. DEL FUEGO."
                    - option "TUCUMAN"
                    - option "URUGUAY"
                    - option "URUGUAY."
                - generic [ref=e202]:
                  - generic [ref=e203]: Teléfono
                  - textbox "Teléfono" [ref=e205]:
                    - /placeholder: "Ej: 11-4444-5555"
                    - text: "1144445555"
                - generic [ref=e206]:
                  - generic [ref=e207]: WhatsApp
                  - textbox "WhatsApp" [ref=e209]:
                    - /placeholder: "Ej: +5491112345678"
                - generic [ref=e210]:
                  - generic [ref=e211]: Email
                  - textbox "Email" [ref=e213]:
                    - /placeholder: Uno o varios, separados por coma o espacio
                - generic [ref=e214]:
                  - generic [ref=e215]: Persona de Contacto
                  - textbox "Persona de Contacto" [ref=e217]:
                    - /placeholder: ""
                - generic [ref=e218]:
                  - generic [ref=e219]: Rubro
                  - textbox "Rubro" [ref=e221]:
                    - /placeholder: ""
                - generic [ref=e222]:
                  - generic [ref=e223]: Vendedor Asignado
                  - generic [ref=e225]:
                    - textbox "Código..." [ref=e227]
                    - generic [ref=e228]:
                      - textbox "Nombre..." [ref=e229]
                      - button "Buscar" [ref=e230]
                - generic [ref=e233]:
                  - generic [ref=e234]: Comprador
                  - generic [ref=e236]:
                    - textbox "Código..." [ref=e238]
                    - generic [ref=e239]:
                      - textbox "Nombre..." [ref=e240]
                      - button "Buscar" [ref=e241]
            - generic [ref=e244]:
              - heading "Datos de Entrega" [level=2] [ref=e245]
              - generic [ref=e246]:
                - generic [ref=e247]:
                  - generic [ref=e248]: Domicilios de Entrega
                  - button "Agregar Dirección" [ref=e251]
                - generic [ref=e254]:
                  - generic [ref=e255]: Zona
                  - combobox "Zona" [ref=e257]:
                    - option "Selecciona una opción" [selected]
                    - option "undefined – ZONA 1"
                - generic [ref=e258]:
                  - generic [ref=e259]: Transporte
                  - generic [ref=e261]:
                    - textbox "Código..." [ref=e263]
                    - generic [ref=e264]:
                      - textbox "Nombre..." [ref=e265]
                      - button "Buscar" [ref=e266]
            - generic [ref=e269]:
              - heading "Datos de Cobranza" [level=2] [ref=e270]
              - generic [ref=e271]:
                - generic [ref=e272]:
                  - generic [ref=e273]: Domicilio de Cobranza
                  - textbox "Domicilio de Cobranza" [ref=e275]:
                    - /placeholder: ""
                - generic [ref=e276]:
                  - generic [ref=e277]: Localidad de Cobranza
                  - textbox "Localidad de Cobranza" [ref=e279]:
                    - /placeholder: ""
                - generic [ref=e280]:
                  - generic [ref=e281]: CP de Cobranza
                  - textbox "CP de Cobranza" [ref=e283]:
                    - /placeholder: ""
                - generic [ref=e284]:
                  - generic [ref=e285]: Contacto de Cobranza
                  - textbox "Contacto de Cobranza" [ref=e287]:
                    - /placeholder: ""
                - generic [ref=e288]:
                  - generic [ref=e289]: Teléfono de Cobranza
                  - textbox "Teléfono de Cobranza" [ref=e291]:
                    - /placeholder: ""
                - generic [ref=e292]:
                  - generic [ref=e293]: Días de Cobranza
                  - textbox "Días de Cobranza" [ref=e295]:
                    - /placeholder: "Ej: Lunes, Miércoles"
                - generic [ref=e296]:
                  - generic [ref=e297]: Horario de Cobranza
                  - textbox "Horario de Cobranza" [ref=e299]:
                    - /placeholder: "Ej: 9 a 12 hs"
                - generic [ref=e300]:
                  - generic [ref=e301]: Observaciones de Cobranza
                  - textbox "Observaciones de Cobranza" [ref=e303]:
                    - /placeholder: ""
                - generic [ref=e304]:
                  - generic [ref=e305]: Plazo real
                  - textbox "Plazo real" [ref=e307]:
                    - /placeholder: ""
                - generic [ref=e308]:
                  - generic [ref=e309]: Contacto
                  - textbox "Contacto" [ref=e311]:
                    - /placeholder: Contacto de cobranza
                - generic [ref=e312]:
                  - generic [ref=e313]: Email
                  - textbox "Email" [ref=e315]:
                    - /placeholder: Uno o varios, separados por coma o espacio
                    - text: Juston.Fritsch7@gmail.com
                - generic [ref=e316]:
                  - generic [ref=e317]: Teléfono
                  - textbox "Teléfono" [ref=e319]:
                    - /placeholder: ""
                - generic [ref=e320]:
                  - generic [ref=e321]: URL de portal de cobros
                  - textbox "URL de portal de cobros" [ref=e323]:
                    - /placeholder: https://...
                - generic [ref=e324]:
                  - generic [ref=e325]: Usuario de portal de cobros
                  - textbox "Usuario de portal de cobros" [ref=e327]:
                    - /placeholder: ""
                - generic [ref=e328]:
                  - generic [ref=e329]: Clave de portal de cobros
                  - textbox "Clave de portal de cobros" [ref=e331]:
                    - /placeholder: ""
            - generic [ref=e332]:
              - heading "Otros Datos de Cobranza" [level=2] [ref=e333]
              - generic [ref=e334]:
                - generic [ref=e335]:
                  - generic [ref=e336]: Observaciones Generales
                  - textbox "Observaciones Generales" [ref=e338]:
                    - /placeholder: ""
                - generic [ref=e339]:
                  - generic [ref=e340]: Días de Pago
                  - textbox "Días de Pago" [ref=e342]:
                    - /placeholder: ""
                - generic [ref=e343]:
                  - generic [ref=e344]: Límite de Crédito
                  - textbox "Límite de Crédito" [ref=e346]:
                    - /placeholder: ""
                - generic [ref=e347]:
                  - generic [ref=e348]: Exención
                  - textbox "Exención" [ref=e350]:
                    - /placeholder: ""
                - generic [ref=e351]:
                  - generic [ref=e352]: Adherido a FCE
                  - combobox "Adherido a FCE" [ref=e354]:
                    - option "Selecciona una opción" [selected]
                    - option "No"
                    - option "Si"
                - generic [ref=e355]:
                  - generic [ref=e356]: Cliente Congelado
                  - combobox "Cliente Congelado" [ref=e358]:
                    - option "Selecciona una opción" [selected]
                    - option "No"
                    - option "Si"
                - generic [ref=e359]:
                  - generic [ref=e360]: Es Prospecto
                  - combobox "Es Prospecto" [ref=e362]:
                    - option "Selecciona una opción" [selected]
                    - option "No"
                    - option "Si"
                - generic [ref=e363]:
                  - generic [ref=e364]: Pedir Constancia de IVA
                  - combobox "Pedir Constancia de IVA" [ref=e366]:
                    - option "Selecciona una opción" [selected]
                    - option "No"
                    - option "Si"
            - generic [ref=e367]:
              - heading "Impuestos y Retenciones del Cliente" [level=2] [ref=e368]
              - generic [ref=e369]:
                - generic [ref=e370]:
                  - heading "Impuestos" [level=3] [ref=e371]
                  - generic [ref=e373]:
                    - generic [ref=e374]:
                      - checkbox "IVA-21 (21%)" [ref=e376]
                      - generic [ref=e377]: IVA-21 (21%)
                    - generic [ref=e379]:
                      - checkbox "IVA-10 (10.5%)" [ref=e381]
                      - generic [ref=e382]: IVA-10 (10.5%)
                    - generic [ref=e384]:
                      - checkbox "IVA-27 (27%)" [ref=e386]
                      - generic [ref=e387]: IVA-27 (27%)
                - generic [ref=e389]:
                  - heading "Percepciones" [level=3] [ref=e390]
                  - generic [ref=e392]:
                    - generic [ref=e393]:
                      - checkbox "Percepción de IIBB Misiones (3.31%)" [ref=e395]
                      - generic [ref=e396]: Percepción de IIBB Misiones (3.31%)
                    - generic [ref=e398]:
                      - checkbox "Percepción de IIBB Misiones - Convenio Multilateral (1.96%)" [ref=e400]
                      - generic [ref=e401]: Percepción de IIBB Misiones - Convenio Multilateral (1.96%)
            - generic [ref=e403]:
              - button "Volver" [ref=e404]
              - button "Guardar Cambios" [ref=e405]
  - region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { ClientData } from "../factory/client.factory.js";
  3  | 
  4  | export interface CreatedClientResponse {
  5  |   id: number;
  6  |   customerCode: string;
  7  | }
  8  | 
  9  | export default class ClientsPage {
  10 |   readonly page: Page;
  11 |   readonly cuitInput: Locator;
  12 |   readonly razonSocialInput: Locator;
  13 |   readonly emailInput: Locator;
  14 |   readonly telefonoInput: Locator;
  15 |   readonly domicilioInput: Locator;
  16 |   readonly localidadInput: Locator;
  17 |   readonly guardarCambiosButton: Locator;
  18 | 
  19 |   constructor(page: Page) {
  20 |     this.page = page;
  21 |     this.cuitInput = page.getByRole("textbox", { name: "CUIT *" });
  22 |     this.razonSocialInput = page.getByRole("textbox", { name: "Nombre o Razón Social *" });
  23 |     this.emailInput = page.locator("#collection_email");
  24 |     this.telefonoInput = page.getByPlaceholder("Ej: 11-4444-5555");
  25 |     this.domicilioInput = page.getByRole("textbox", { name: "Domicilio Fiscal" });
  26 |     this.localidadInput = page.getByLabel("Localidad", { exact: true });
  27 |     this.guardarCambiosButton = page.getByRole("button", { name: "Guardar Cambios" });
  28 |   }
  29 | 
  30 |   async fillForm(client: ClientData): Promise<void> {
  31 |     await this.fillCuitInput(client.cuit);
  32 |     await this.fillRazonSocialInput(client.razonSocial);
  33 |     await this.fillEmailInput(client.email);
  34 |     await this.fillTelefonoInput(client.telefono);
  35 |     await this.fillDomicilioInput(client.domicilio);
  36 |     await this.fillLocalidadInput(client.localidad);
  37 |   }
  38 | 
  39 |   async fillCuitInput(cuit: string) {
  40 |     await this.cuitInput.fill(cuit);
  41 |   }
  42 | 
  43 |   async fillRazonSocialInput(razonSocial: string) {
  44 |     await this.razonSocialInput.fill(razonSocial);
  45 |   }
  46 | 
  47 |   async fillEmailInput(email: string) {
  48 |     await this.emailInput.fill(email);
  49 |   }
  50 | 
  51 |   async fillTelefonoInput(telefono: string) {
  52 |     await this.telefonoInput.fill(telefono);
  53 |   }
  54 | 
  55 |   async fillDomicilioInput(domicilio: string) {
  56 |     await this.domicilioInput.fill(domicilio);
  57 |   }
  58 | 
  59 |   async fillLocalidadInput(localidad: string) {
  60 |     await this.localidadInput.fill(localidad);
  61 |   }
  62 | 
  63 |   async guardarCambios() {
  64 |     await this.guardarCambiosButton.click();
  65 |   }
  66 | 
  67 |   async saveChangesAndGetClientCode(): Promise<CreatedClientResponse> {
  68 |     // Escucha el evento de red y ejecuta el clic en paralelo usando Promise.all
  69 |     const [response] = await Promise.all([
> 70 |       this.page.waitForResponse(
     |                 ^ Error: page.waitForResponse: Test timeout of 30000ms exceeded.
  71 |         (res) =>
  72 |           res.url().includes("/clients") &&
  73 |           res.request().method() === "POST" &&
  74 |           (res.status() === 200 || res.status() === 201)
  75 |       ),
  76 |       this.guardarCambiosButton.click(),
  77 |     ]);
  78 | 
  79 |     const responseJson = await response.json();
  80 |     const data = responseJson.data || responseJson;
  81 | 
  82 |     return {
  83 |       id: Number(data.id),
  84 |       customerCode: data.customer_code,
  85 |     };
  86 |   }
  87 | }
```
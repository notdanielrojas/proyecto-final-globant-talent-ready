# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createClient.spec.ts >> Client Management Test Suite >> User should be able to create a new client successfully
- Location: tests\createClient.spec.ts:5:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Cliente guardado con éxito!', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Cliente guardado con éxito!', { exact: true })

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
        - list:
          - listitem:
            - link "Prospectos":
              - /url: /leads
              - img
              - text: Prospectos
          - listitem:
            - link "Clientes":
              - /url: /clientes
              - img
              - text: Clientes
          - listitem:
            - link "Facturas de Venta":
              - /url: /facturas-de-venta
              - img
              - text: Facturas de Venta
          - listitem:
            - link "Notas de Crédito":
              - /url: /notas-credito
              - img
              - text: Notas de Crédito
          - listitem:
            - link "Notas Financieras":
              - /url: /notas-financieras
              - img
              - text: Notas Financieras
          - listitem:
            - link "Pedidos de Venta":
              - /url: /pedidos-de-venta
              - img
              - text: Pedidos de Venta
          - listitem:
            - link "Autorizar pedidos":
              - /url: /autorizacion-pedidos
              - img
              - text: Autorizar pedidos
          - listitem:
            - link "Cobranzas":
              - /url: /cobranzas
              - img
              - text: Cobranzas
          - listitem:
            - link "Remitos":
              - /url: /remitos
              - img
              - text: Remitos
          - listitem:
            - link "Vendedores":
              - /url: /vendedores
              - img
              - text: Vendedores
          - listitem:
            - link "Compradores":
              - /url: /compradores
              - img
              - text: Compradores
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
  - heading "Crear Nuevo Cliente" [level=1]
  - heading "Datos básicos" [level=2]
  - text: CUIT *
  - textbox "CUIT *":
    - /placeholder: "Ej: 30-12345678-9"
    - text: 20-40955585-9
  - paragraph: El CUIT debe tener 11 dígitos y un dígito verificador válido (formato XX-XXXXXXXX-X)
  - text: Condición Tributaria
  - combobox "Condición Tributaria":
    - option "Selecciona una opción" [selected]
    - option "IVA Responsable Inscripto"
    - option "Monotributista"
    - option "Exento"
    - option "Consumidor Final"
    - option "No Responsable"
  - text: Nombre o Razón Social *
  - textbox "Nombre o Razón Social *":
    - /placeholder: "Ej: Empresa S.A."
    - text: Kutch - Lemke
  - text: Retiene IVA
  - combobox "Retiene IVA":
    - option "Selecciona una opción" [selected]
    - option "No"
    - option "Si"
  - text: Aplica Ley de Exportación TDF
  - combobox "Aplica Ley de Exportación TDF":
    - option "Selecciona una opción" [selected]
    - option "No"
    - option "Si"
  - text: Serie de Factura
  - combobox "Serie de Factura" [disabled]:
    - option "Selecciona una opción" [selected]
  - text: Fecha de alta
  - textbox "Fecha de alta": 2026-09-04
  - text: Moneda
  - textbox "Código..."
  - textbox "Nombre..."
  - button "Buscar":
    - img
  - heading "Datos de Contacto" [level=2]
  - text: Domicilio Fiscal
  - textbox "Domicilio Fiscal":
    - /placeholder: ""
    - text: 4524 Hegmann Inlet
  - text: Código Postal
  - textbox "Código Postal":
    - /placeholder: ""
  - text: Localidad
  - textbox "Localidad":
    - /placeholder: ""
    - text: SANTIAGO
  - text: Provincia
  - combobox "Provincia":
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
  - text: Teléfono
  - textbox "Teléfono":
    - /placeholder: "Ej: 11-4444-5555"
    - text: "1144445555"
  - text: WhatsApp
  - textbox "WhatsApp":
    - /placeholder: "Ej: +5491112345678"
  - text: Email
  - textbox "Email":
    - /placeholder: Uno o varios, separados por coma o espacio
  - text: Persona de Contacto
  - textbox "Persona de Contacto":
    - /placeholder: ""
  - text: Rubro
  - textbox "Rubro":
    - /placeholder: ""
  - text: Vendedor Asignado
  - textbox "Código..."
  - textbox "Nombre..."
  - button "Buscar":
    - img
  - text: Comprador
  - textbox "Código..."
  - textbox "Nombre..."
  - button "Buscar":
    - img
  - heading "Datos de Entrega" [level=2]
  - text: Domicilios de Entrega
  - button "Agregar Dirección":
    - img
    - text: Agregar Dirección
  - text: Zona
  - combobox "Zona":
    - option "Selecciona una opción" [selected]
    - option "undefined – ZONA 1"
  - text: Transporte
  - textbox "Código..."
  - textbox "Nombre..."
  - button "Buscar":
    - img
  - heading "Datos de Cobranza" [level=2]
  - text: Domicilio de Cobranza
  - textbox "Domicilio de Cobranza":
    - /placeholder: ""
  - text: Localidad de Cobranza
  - textbox "Localidad de Cobranza":
    - /placeholder: ""
  - text: CP de Cobranza
  - textbox "CP de Cobranza":
    - /placeholder: ""
  - text: Contacto de Cobranza
  - textbox "Contacto de Cobranza":
    - /placeholder: ""
  - text: Teléfono de Cobranza
  - textbox "Teléfono de Cobranza":
    - /placeholder: ""
  - text: Días de Cobranza
  - textbox "Días de Cobranza":
    - /placeholder: "Ej: Lunes, Miércoles"
  - text: Horario de Cobranza
  - textbox "Horario de Cobranza":
    - /placeholder: "Ej: 9 a 12 hs"
  - text: Observaciones de Cobranza
  - textbox "Observaciones de Cobranza":
    - /placeholder: ""
  - text: Plazo real
  - textbox "Plazo real":
    - /placeholder: ""
  - text: Contacto
  - textbox "Contacto":
    - /placeholder: Contacto de cobranza
  - text: Email
  - textbox "Email":
    - /placeholder: Uno o varios, separados por coma o espacio
    - text: Bud_Gottlieb@gmail.com
  - text: Teléfono
  - textbox "Teléfono":
    - /placeholder: ""
  - text: URL de portal de cobros
  - textbox "URL de portal de cobros":
    - /placeholder: https://...
  - text: Usuario de portal de cobros
  - textbox "Usuario de portal de cobros":
    - /placeholder: ""
  - text: Clave de portal de cobros
  - textbox "Clave de portal de cobros":
    - /placeholder: ""
  - heading "Otros Datos de Cobranza" [level=2]
  - text: Observaciones Generales
  - textbox "Observaciones Generales":
    - /placeholder: ""
  - text: Días de Pago
  - textbox "Días de Pago":
    - /placeholder: ""
  - text: Límite de Crédito
  - textbox "Límite de Crédito":
    - /placeholder: ""
  - text: Exención
  - textbox "Exención":
    - /placeholder: ""
  - text: Adherido a FCE
  - combobox "Adherido a FCE":
    - option "Selecciona una opción" [selected]
    - option "No"
    - option "Si"
  - text: Cliente Congelado
  - combobox "Cliente Congelado":
    - option "Selecciona una opción" [selected]
    - option "No"
    - option "Si"
  - text: Es Prospecto
  - combobox "Es Prospecto":
    - option "Selecciona una opción" [selected]
    - option "No"
    - option "Si"
  - text: Pedir Constancia de IVA
  - combobox "Pedir Constancia de IVA":
    - option "Selecciona una opción" [selected]
    - option "No"
    - option "Si"
  - heading "Impuestos y Retenciones del Cliente" [level=2]
  - heading "Impuestos" [level=3]
  - checkbox "IVA-21 (21%)"
  - text: IVA-21 (21%)
  - checkbox "IVA-10 (10.5%)"
  - text: IVA-10 (10.5%)
  - checkbox "IVA-27 (27%)"
  - text: IVA-27 (27%)
  - heading "Percepciones" [level=3]
  - checkbox "Percepción de IIBB Misiones (3.31%)"
  - text: Percepción de IIBB Misiones (3.31%)
  - checkbox "Percepción de IIBB Misiones - Convenio Multilateral (1.96%)"
  - text: Percepción de IIBB Misiones - Convenio Multilateral (1.96%)
  - button "Volver"
  - button "Guardar Cambios"
- region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test, expect } from "./fixture/fixtures.js";
  2  | import { ClientFactory } from "./factory/client.factory.js";
  3  | 
  4  | test.describe("Client Management Test Suite", () => {
  5  |   test("User should be able to create a new client successfully", async ({ clientsPage, sidebar }) => {
  6  |     const clientData = ClientFactory.create();
  7  | 
  8  |     await sidebar.goToCreateClient();
  9  |     await clientsPage.fillForm(clientData);
  10 |     await clientsPage.guardarCambios();
  11 | 
> 12 |     await expect(clientsPage.clientCreatedMessage).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
  13 |   });
  14 | });
  15 | 
```
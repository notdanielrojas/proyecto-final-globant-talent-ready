# 📖 Proyecto Final - Globant Talent Ready

Framework de automatización de pruebas E2E y API desarrollado con **Playwright**, **TypeScript** y **@faker-js/faker**.

El proyecto cubre:

* **ERP de Ventas (UI):** flujo E2E completo de Cliente → Artículo → Factura → Cobranza.
* **API Testing (Backend):** creación de precondiciones y validaciones directamente mediante servicios HTTP.
* **Autenticación Eficiente:** reutilización de estado de sesión mediante `storageState` (`auth.setup.ts`).
* **BDD:** especificaciones Gherkin para una App de Colectivos / Transporte.

---

## 🛠️ Tecnologías

* **TypeScript**
* **Playwright**
* **@faker-js/faker**
* **Gherkin**
* **dotenv**
* **Node.js**
* **Allure Report** / HTML Reporter

---

## 📂 Estructura del Proyecto

```text
.
├── .auth/                       # Estado de sesión guardado (git-ignored)
├── factory/                    # Generación dinámica de datos con Faker
├── features/                   # Especificaciones BDD en Gherkin
├── fixtures/                    # Custom fixtures (Inyección de dependencias)
├── pages/                      # Page Object Model (UI)
│   └── components/             # Componentes compartidos (Sidebar)
├── services/                   # Servicios API HTTP (Backend)
├── tests/                      # Suites de pruebas automáticas (.spec.ts)
│   ├── api/                    # Pruebas exclusivas de Backend / API
│   │   └── e2e/
│   └── ui/                     # Pruebas de Interfaz de Usuario
│       ├── e2e/
│       ├── modules/
│       └── auth.setup.ts       # Script global de autenticación previa
├── .env.example
├── .gitignore
├── playwright.config.ts
├── package.json
└── README.md
```

### Principales archivos

```text
factory/
├── api.factory.ts
├── article.factory.ts
├── client.factory.ts
├── invoice.factory.ts
└── payment.factory.ts

features/
├── authentication.feature
├── colectivos_lines.feature
├── driver_managment.feature
└── ride_request.feature

fixtures/
└── fixtures.ts

pages/
├── components/
│   └── Sidebar.ts
├── ArticlesPage.ts
├── ClientsPage.ts
├── InvoicePage.ts
├── LoginPage.ts
└── PaymentPage.ts

services/
├── article.api.ts
├── auth.api.ts
├── client.api.ts
├── invoice.api.ts
└── payment.api.ts

tests/
├── api/
│   └── e2e/
│       └── e2e.api.spec.ts
└── ui/
    ├── auth.setup.ts
    ├── e2e/
    │   └── e2e.web.spec.ts
    └── modules/
        ├── createArticle.spec.ts
        ├── createClient.spec.ts
        ├── createInvoice.spec.ts
        ├── createPayment.spec.ts
        └── login.spec.ts
```

---

## ⚙️ Instalación

### Requisitos

* Node.js 18+
* npm 9+

### Clonar e instalar

```bash
git clone https://github.com/tu-usuario/proyecto-final-globant-talent-ready.git
cd proyecto-final-globant-talent-ready

npm install
npx playwright install --with-deps
```

---

## 🔐 Variables de Entorno

Crear un archivo `.env` utilizando `.env.example` como referencia:

```env
USER_ADMIN=
PASSWORD_ADMIN=

BASE_URL=
API_BASE_URL=
CLIENT_URL=
ARTICLE_URL=
INVOICE_URL=
PAYMENT_URL=
```

> No subir el archivo `.env` al repositorio.

---

## 🔑 Estrategia de Autenticación (storageState)
Para maximizar la velocidad y estabilidad de la suite, la autenticación se realiza una sola vez antes de ejecutar las pruebas de UI a través de tests/ui/auth.setup.ts.

El proyecto setup se conecta a la aplicación, inicia sesión mediante LoginPage y almacena las cookies/tokens en .auth/user.json.

Las pruebas de UI consumen directamente ese archivo mediante la propiedad storageState configurada en playwright.config.ts, permitiendo abrir las páginas con la sesión activa en 0ms.

---

## 🚀 Ejecución de Pruebas

### Todas las pruebas (Setup + UI + API)

```bash
npx playwright test
```

### Solo el proceso de Autenticación (Setup)
```bash
npx playwright test --project=setup
```

### UI Mode

```bash
npx playwright test --ui
```

### Flujo E2E completo

```bash
npx playwright test tests/e2e.web.spec.ts
npx playwright test tests/e2e.api.spec.ts
```

### Suite específica

```bash
npx playwright test tests/invoice.spec.ts
```

### Modo debug

```bash
npx playwright test --debug
```

### Reporte HTML

```bash
# Reporte HTML oficial
npx playwright show-report

# Allure Report
npx allure serve allure-results

```

---

## 🏗️ Arquitectura

El framework utiliza:
* **Session State (storageState):** Reutiliza el estado autenticado sin repetir logins gráficos.
* **Page Object Model:** encapsula la interacción con la UI.
* **Custom Fixtures:** centralizan páginas, servicios y datos de prueba.
* **Factories:** generan datos dinámicos con Faker.
* **API Services:** crean precondiciones sin depender de la UI.
* **Captura de respuestas HTTP:** obtiene identificadores generados por backend.
* **CUIT Módulo 11:** genera CUITs válidos dinámicamente.
* **Tests aislados:** cada módulo puede preparar sus datos mediante API.

---

## 🔄 Flujo E2E ERP

```text
auth.setup.ts (Login único y guardado de sesión)
     ↓
Crear Cliente  →  Crear Artículo  →  Emitir Factura  →  Registrar Cobranza
```

El flujo completo se encuentra en:

```text
tests/e2e.web.spec.ts
```

---

## 📑 BDD — Transport App

Las especificaciones BDD se encuentran dentro de:

```text
features/
```

Incluyen escenarios de:

* Autenticación y registro de pasajeros.
* Consulta y favoritos de líneas de colectivo.
* Solicitud de viajes en tiempo real.
* Disponibilidad de asientos.
* Gestión de rutas y capacidad del conductor.

Los escenarios están escritos utilizando **Gherkin**.

---

## 🧪 Estrategia de Testing

```text
UI          → Playwright + Page Objects
API         → Services
Test Data   → Faker + Factories
E2E         → Flujo completo del ERP
BDD         → Gherkin Features
```

Las precondiciones se crean por API siempre que sea posible para mantener las pruebas **rápidas, independientes y reproducibles**.

---

## 🔒 Seguridad

No versionar:

```text
.env
.auth/
node_modules/
playwright-report/
test-results/
allure-results/
resultados.json
```

Mantener credenciales, tokens y URLs de ambientes fuera del código fuente.

---

## 👨‍💻 QA Automation

**Playwright · TypeScript · API Testing · E2E Testing · Page Object Model · StorageState · BDD · Gherkin**

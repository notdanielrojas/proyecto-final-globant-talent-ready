# 📖 Proyecto Final - Globant Talent Ready

Framework de automatización de pruebas desarrollado con **Playwright**, **TypeScript** y **@faker-js/faker**.

El proyecto cubre:

* **ERP de Ventas:** flujo E2E de Cliente → Artículo → Factura → Cobranza.
* **API Testing:** creación de precondiciones y datos mediante servicios HTTP.
* **BDD:** especificaciones Gherkin para una App de Colectivos / Transporte.

---

## 🛠️ Tecnologías

* **TypeScript**
* **Playwright**
* **@faker-js/faker**
* **Gherkin**
* **dotenv**
* **Node.js**

---

## 📂 Estructura

```text
.
├── factory/              # Generación dinámica de datos
├── fixtures/             # Custom fixtures
├── pages/                # Page Object Model
├── services/             # Servicios API
├── tests/                # Tests E2E y aislados
├── features/             # Features BDD en Gherkin
├── .env.example
├── playwright.config.ts
├── package.json
└── README.md
```

### Principales archivos

```text
factory/
├── client.factory.ts
├── article.factory.ts
├── invoice.factory.ts
└── payment.factory.ts

pages/
├── LoginPage.ts
├── ClientsPage.ts
├── ArticlesPage.ts
├── InvoicePage.ts
└── PaymentPage.ts

services/
├── auth.api.ts
├── client.api.ts
├── article.api.ts
├── invoice.api.ts
└── payment.api.ts

tests/e2e
├── e2e.web.spec.ts
└── e2e.api.spec.ts

tests
├── login.spec.ts
├── clients.spec.ts
├── articles.spec.ts
├── invoice.spec.ts
└── payment.spec.ts


features/
├── authentication.feature
├── bus_lines.feature
├── ride_request.feature
└── driver_management.feature
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

## 🚀 Ejecución

### Todas las pruebas

```bash
npx playwright test
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
npx playwright show-report
```

---

## 🏗️ Arquitectura

El framework utiliza:

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
Login
  ↓
Cliente
  ↓
Artículo
  ↓
Factura
  ↓
Cobranza
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
node_modules/
playwright-report/
test-results/
```

Mantener credenciales, tokens y URLs de ambientes fuera del código fuente.

---

## 👨‍💻 QA Automation

**Playwright · TypeScript · API Testing · E2E Testing · Page Object Model · BDD · Gherkin**
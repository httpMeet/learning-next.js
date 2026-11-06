# **Create a Next.js App**

Use the following command to create a new Next.js application:

```bash
npx create-next-app@latest
```

# **Main Folders**

- **`app`**: The main folder where we work most of the time. It contains pages, layouts, routes, and other application-related files.
- **`public`**: Stores static assets such as images, icons, and other files that can be accessed directly through their URLs.

# **Components Folder**

- We create a `components` folder to store reusable components that can be used multiple times throughout the project.
- Examples: `Button`, `Card`, `Navbar`, `Footer`, etc.

### **Types of Components**

There are two common ways to categorize components:

1. **Static Components:**
   - Components that display fixed content.
   - Their output does not change based on props or external data.

2. **Dynamic Components:**
   - Components that use props to display different data.
   - They maintain the same structure but can display different content depending on the values passed to them.

### **Example of a Dynamic Component (TypeScript)**

In Next.js with TypeScript, we define the type of props before using them in a component.

**Card.tsx**

```tsx
// Define the type of props
type CardProps = {
  title: string;
  description: string;
};

// Receive props and assign their type
const Card = ({ title, description }: CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
```

**page.tsx**

```tsx
import Card from "@/components/Card";

const Home = () => {
  return (
    <div>
      <Card
        title="Next.js"
        description="Learn Next.js with TypeScript"
      />

      <Card
        title="React.js"
        description="Learn React.js"
      />
    </div>
  );
};

export default Home;
```

**Important Points:**

- `type CardProps` defines the types of props that a component can receive.
- `string` means the prop must contain a string value.
- `CardProps` is assigned to the props using `: CardProps`.
- TypeScript checks whether the correct props and data types are passed to the component.
- We can reuse the same component with different data.

# **Routing in Next.js**

- In Next.js, we can create routes directly by creating folders inside the `app` folder.
- Each route folder must contain a `page.tsx` file to display the page for that particular route.

### **Example**

To create an `/about` route:

```text
app/
 ├── page.tsx
 └── about/
      └── page.tsx
```

- `app/page.tsx` → Home page (`/`)
- `app/about/page.tsx` → About page (`/about`)

**Note:** Next.js uses file-system-based routing, so we don't need to configure routes manually using libraries like React Router.

# **Navigation Using Link Component**

- Next.js provides a built-in `Link` component for navigation between different routes.
- We need to import `Link` from `next/link` before using it.
- It works similarly to the HTML `<a>` tag but provides client-side navigation, making navigation between pages faster without a full page reload.

### **Import Link**

```tsx
import Link from "next/link";
```

### **Example**

```tsx
<nav className="mt-2">
  <Link href="/" className="mr-4 text-blue-500 hover:underline">
    Home
  </Link>

  <Link href="/about" className="text-blue-500 hover:underline">
    About
  </Link>
</nav>
```

### **Important Points**

- `href` specifies the destination route.
- `className` is used to apply CSS or Tailwind CSS classes.
- We use `Link` instead of a regular `<a>` tag for internal navigation in Next.js.
- For external websites, we can use a regular HTML `<a>` tag.
- The destination must exist as a valid route in the Next.js application.

---

# **Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)**

Rendering means converting React components into HTML so that users can see the content on the screen.

There are two common rendering approaches:

## **1. Server-Side Rendering (SSR)**

- In SSR, the HTML of a page is generated on the server.
- The server processes the request, fetches the required data, and generates HTML.
- The generated HTML is then sent to the browser.
- The browser displays the HTML, and JavaScript makes interactive elements functional through hydration.

### **How SSR Works**

```text
1. User requests a page
          |
          v
2. Request goes to the server
          |
          v
3. Server fetches required data
          |
          v
4. Server generates HTML
          |
          v
5. HTML is sent to the browser
          |
          v
6. Browser displays the page
          |
          v
7. JavaScript hydrates the page
          |
          v
8. Page becomes interactive
```

### **Advantages of SSR**

- Better initial content visibility.
- Search engines can easily access the generated HTML.
- Useful for pages that require fresh data on every request.

### **Disadvantages of SSR**

- Server needs to process requests.
- Rendering can increase server workload.
- Initial response can be slower if server-side data fetching takes time.

## **2. Client-Side Rendering (CSR)**

- In CSR, the browser executes JavaScript to render the UI.
- The server initially sends HTML and JavaScript files.
- The browser downloads and executes JavaScript.
- React then renders the components and displays the content.

### **How CSR Works**

```text
1. User requests a page
          |
          v
2. Request goes to the server
          |
          v
3. Server sends HTML and JavaScript
          |
          v
4. Browser downloads JavaScript
          |
          v
5. React executes in the browser
          |
          v
6. React renders the components
          |
          v
7. Page becomes visible and interactive
```

### **Advantages of CSR**

- Smooth navigation between pages after initial loading.
- Less server-side rendering work.
- Useful for highly interactive applications.

### **Disadvantages of CSR**

- Initial loading can be slower because JavaScript must be downloaded and executed.
- Search engine indexing can be more challenging depending on the search engine.
- Users may initially see a loading screen or empty content.

## **3. SSR vs CSR Comparison**

| Feature | SSR | CSR |
|---|---|---|
| Rendering location | Server | Browser |
| HTML generation | Server | Browser using JavaScript |
| Initial content | Usually available earlier | May require JavaScript execution |
| SEO | Generally better | Depends on search engine rendering |
| Server workload | Higher | Lower for rendering |
| JavaScript required for initial HTML | Not necessarily | Yes, for React rendering |
| Best suited for | Content-based websites | Highly interactive applications |

## **4. SSR and CSR in Next.js**

Next.js supports both server-side and client-side rendering.

- **Server Components:** Components are rendered on the server by default in the App Router.
- **Client Components:** Components that use browser features, state, event handlers, and React hooks.

To create a Client Component, we use the `"use client"` directive at the top of the file.

### **Example of a Server Component**

```tsx
// app/page.tsx

const Home = () => {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <p>This is a Server Component.</p>
    </div>
  );
};

export default Home;
```

### **Example of a Client Component**

```tsx
// components/Counter.tsx

"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
```

**Important Points:**

- Server Components are the default in the Next.js App Router.
- Client Components are required when using hooks like `useState`, `useEffect`, or event handlers like `onClick`.
- `"use client"` defines a client-side JavaScript boundary.
- Client Components can also be pre-rendered into HTML on the server. Therefore, Client Components are not automatically CSR-only.
- Next.js uses server rendering and client-side JavaScript together to build applications.

---

# **Dynamic Routing in Next.js**

- Dynamic routing allows us to create routes where some parts of the URL can change dynamically.
- Instead of creating separate folders for every user, product, or blog, we can create one dynamic route that handles different values.
- In Next.js, we create dynamic routes by using square brackets `[]` around the folder name.

### **Example**

Suppose we have multiple users:

- John Doe
- Jane Smith
- Alice Johnson

We want to create a separate profile page for every user.

Instead of creating separate pages for each user, we can create one dynamic route:

```text
app/
 └── profile/
      └── [slug]/
           └── page.tsx
```

Here, `[slug]` is a dynamic route segment.

The URL will look like:

```text
/profile/john-doe
/profile/jane-smith
/profile/alice-johnson
```

All these URLs will use the same `page.tsx` file.

### **How to Access Dynamic Params**

In the App Router, Next.js provides `params` to access the dynamic value from the URL.

In current Next.js versions, `params` is a Promise, so we need to use `await` to access its values in an async Server Component.

**app/profile/[slug]/page.tsx**

```tsx
type ProfilePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProfilePage({
  params
}: ProfilePageProps) {

  const pageParams = await params;
  const userSlug = pageParams.slug;

  return (
    <div>
      <h1>Profile Page</h1>
      <p>User Slug: {userSlug}</p>
    </div>
  );
}
```

If we visit `/profile/john-doe`, the output will be:

```text
Profile Page
User Slug: john-doe
```

### **Example: Display User According to Slug**

We can use the dynamic slug to find the particular user from our users array.

```tsx
// app/profile/[slug]/page.tsx

type ProfilePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProfilePage({
  params
}: ProfilePageProps) {

  const users = [
    {
      id: 1,
      name: "John Doe",
      slug: "john-doe",
      email: "john.doe@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      slug: "jane-smith",
      email: "jane.smith@example.com"
    },
    {
      id: 3,
      name: "Alice Johnson",
      slug: "alice-johnson",
      email: "alice.johnson@example.com"
    }
  ];

  const { slug } = await params;

  const user = users.find((u) => u.slug === slug);

  if (!user) {
    return (
      <div>
        <h1>User Not Found</h1>
        <p>The user you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{user.name}'s Profile Page</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

### **Important Points**

- `[slug]` creates a dynamic route segment.
- `params` contains the dynamic values from the URL.
- We use `await params` to access those values in current Next.js versions.
- We can use the slug to fetch data from an API or database.
- We can use `.find()` to find a particular record.
- If the user does not exist, we can display a User Not Found message.
- We don't need to create separate pages for every user.

---

# **Loading in Next.js**

- Next.js provides a built-in `loading.tsx` file to display a loading UI while a route segment is waiting for content to load.
- It is particularly useful when fetching data from an API or database.
- We don't need to manually manage loading states for every server-side data-fetching operation.
- Next.js automatically handles the loading UI using React Suspense.

### **Where Can We Create loading.tsx?**

We can create `loading.tsx` at different levels depending on where we want the loading UI to appear.

**1. Application-Level Loading**

```text
app/
 ├── loading.tsx
 ├── page.tsx
 ├── about/
 │    └── page.tsx
 └── profile/
      └── [slug]/
           └── page.tsx
```

- `app/loading.tsx` creates a loading UI for the root route segment and its nested routes.
- It acts as a loading boundary for the application routes underneath it.

**2. Specific Route-Level Loading**

```text
app/
 └── profile/
      ├── loading.tsx
      ├── page.tsx
      └── [slug]/
           └── page.tsx
```

- `app/profile/loading.tsx` creates a loading UI for the profile route segment and its nested routes.
- It does not affect unrelated routes like `/about`.

### **Example of loading.tsx**

**app/profile/loading.tsx**

```tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">
        Loading Profile...
      </h1>
    </div>
  );
}
```

Whenever the profile route is waiting for content, this loading UI can be displayed.

### **Example with Data Fetching**

Suppose we want to fetch user information from an API.

**app/profile/[slug]/page.tsx**

```tsx
type ProfilePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type User = {
  name: string;
  email: string;
};

export default async function ProfilePage({
  params
}: ProfilePageProps) {

  const { slug } = await params;

  // Simulate an API request
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${slug}`
  );

  if (!response.ok) {
    return <h1>User Not Found!</h1>;
  }

  const user: User = await response.json();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

**app/profile/loading.tsx**

```tsx
export default function Loading() {
  return (
    <div>
      <h1>Loading User Data...</h1>
    </div>
  );
}
```

**Note:** The API URL above is only an illustrative example. JSONPlaceholder uses numeric user IDs, so the example expects a numeric ID rather than a username slug.

### **Important Points**

- `loading.tsx` is a special file provided by Next.js.
- It automatically creates a loading boundary using Suspense.
- We don't need to manually import `loading.tsx` into `page.tsx`.
- We can create loading files at the application level or for specific route segments.
- The loading UI is displayed while the relevant route content is loading.
- When the content is ready, Next.js replaces the loading UI with the actual page.
- For custom loading conditions inside a Client Component, we can also use `useState` to manage loading states.
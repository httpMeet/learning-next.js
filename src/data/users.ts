export type User = {
  id: number;
  name: string;
  slug: string;
  email: string;
  bio: string;
};

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    slug: "john-doe",
    email: "john.doe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Jane Smith",
    slug: "jane-smith",
    email: "jane.smith@example.com",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    slug: "alice-johnson",
    email: "alice.johnson@example.com",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

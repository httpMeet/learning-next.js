import Image from "next/image";
import Card from '@/components/Card';

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Card title="Card 1" description="First Card" />
      <Card title="Card 2" description="Second Card" />
    </div>
  );
}
